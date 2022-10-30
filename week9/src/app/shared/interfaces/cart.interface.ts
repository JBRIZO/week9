import { CartItem } from './cartitem.interface';

export interface Cart {
  id: number;
  user_id: number;
  number: number;
  status: string;
  total: string;
  total_items: string;
  completed_at: string | null;
  created_at: string;
  items: CartItem[];
}
