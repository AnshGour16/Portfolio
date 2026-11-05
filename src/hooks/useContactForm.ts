import { useState, useCallback, FormEvent, ChangeEvent } from 'react';
import confetti from 'canvas-confetti';
import { contactService } from '../services/contactService';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitError(null);
  }, []);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const newErrors: ContactFormErrors = {
        name: validateField('name', formData.name),
        email: validateField('email', formData.email),
        message: validateField('message', formData.message),
      };

      setTouched({ name: true, email: true, message: true });

      if (newErrors.name || newErrors.email || newErrors.message) {
        setErrors(newErrors);
        return;
      }

      setIsSubmitting(true);
      setSubmitError(null);

      try {
        await contactService.sendMessage(formData);

        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#10B981', '#8B5CF6'],
        });

        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTouched({});
      } catch (err: unknown) {
        const errorMsg =
          err instanceof Error
            ? err.message
            : 'Unable to deliver message right now. Please email directly at anshgour759@gmail.com.';
        setSubmitError(errorMsg);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setSubmitError(null);
  }, []);

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
