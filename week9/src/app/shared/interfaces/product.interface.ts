import { Category } from './category.interface';
import { Image } from './image.interface';
import { Master } from './master.interface';

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: boolean;
  likes_count: number;
  likes_up_count: number;
  likes_down_count: number;
  published_at: string;
  master?: Master;
  category?: Category;
  image?: Image;
}
