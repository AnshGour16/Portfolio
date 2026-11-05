import { portfolioData } from '../data/portfolioData';
import { Project, SkillCategory, Experience, EducationItem, ResponsibilityItem, PortfolioData } from '../types';

export const portfolioService = {
  getPortfolioData(): PortfolioData {
    return portfolioData;
  },

  getProjects(): Project[] {
    return portfolioData.projects;
  },

  getProjectsByCategory(category: string): Project[] {
    if (category === 'All') {
      return portfolioData.projects;
    }
    return portfolioData.projects.filter((p) => p.category === category);
  },

  getSkillCategories(): SkillCategory[] {
    return portfolioData.skills;
  },

  getExperiences(): Experience[] {
    return portfolioData.experience;
  },

  getEducation(): EducationItem[] {
    return portfolioData.education;
  },

  getResponsibilities(): ResponsibilityItem[] {
    return portfolioData.responsibilities;
  },

  getAchievements(): string[] {
    return portfolioData.achievements;
  },
};

