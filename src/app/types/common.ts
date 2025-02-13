import { StaticImageData } from "next/image";

export interface AuthorTypes {
  name: string;
  role: string;
  href: string;
  imageUrl: StaticImageData;
}

export interface GameTypes {
  id: string;
  date: string;
  mainImg: string;
  title: string;
  subtitle: string;
  href: string;
  content: string;
}

export interface MessageProps {
  id: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
export interface EquipmentTypes {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  href: string;
  content: string;
  type: string;
  date: string;
  image: string;
  price: number;
  discount: number;
}
