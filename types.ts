export interface Destination {
  id: number;
  name: string;
  country: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}