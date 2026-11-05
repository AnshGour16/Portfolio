interface SendMessagePayload {
  name: string;
  email: string;
  message: string;
}

interface SendMessageResponse {
  success: boolean;
  message?: string;
}

const WEB3FORMS_ACCESS_KEY = '0fc4ddce-3d46-45bd-9e93-f6e03449f1bf';
const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';

export const contactService = {
  async sendMessage(payload: SendMessagePayload): Promise<SendMessageResponse> {
    const response = await fetch(WEB3FORMS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: payload.name,
        email: payload.email,
        message: payload.message,
        from_name: 'Ansh Gour Portfolio',
        subject: `New Portfolio Message from ${payload.name}`,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Failed to transmit message. Please try again or reach out directly.');
    }

    return {
      success: true,
      message: data.message,
    };
  },
};

