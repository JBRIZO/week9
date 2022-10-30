export interface CartItem {
  id: number;
  quantity: number;
  product_variant_id: number;
  product_id: number;
  order_id: number;
  total: string;
  price: string;
  name: string;
  description: string;
  promotion: number;
}
