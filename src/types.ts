export interface NavMenuItem {
  label: string;
  href: string;
  items?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  details?: string;
  stack?: string[];
}

export interface ConsultationForm {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  readTime: string;
  slug?: string;
}

