import { Category } from './category.interface';
import { Image } from './image.interface';
import { Master } from './master.interface';

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: boolean;
  likesCount: number;
  likesUpCount: number;
  likesDownCount: number;
  publishedAt: string;
  master?: Master;
  category?: Category;
  image?: Image;
}
