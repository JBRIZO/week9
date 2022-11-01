export interface CartItem {
  id?: number;
  quantity: number;
  productVariantId: number;
  productId: number;
  orderId?: number;
  total?: string;
  price?: string;
  name?: string;
  description?: string;
  promotion?: number;
}
