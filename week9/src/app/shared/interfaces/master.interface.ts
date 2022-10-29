export interface Master {
  id: number;
  sku: string;
  price: number;
  promotional_price: string;
  stock: number;
  weight: number | null;
  height: number | null;
  width: number | null;
  depth: number | null;
  is_master: boolean;
  position: number;
}
