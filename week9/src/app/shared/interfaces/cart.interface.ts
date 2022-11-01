import { CartItem } from './cartitem.interface';

export interface Cart {
  id: number;
  userId: number;
  number: number;
  status: string;
  total: string;
  totalItems: string;
  completedAt: string | null;
  createdAt: string;
  items: CartItem[];
}
