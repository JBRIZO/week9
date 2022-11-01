export interface Master {
  id: number;
  sku: string;
  price: number;
  promotionalPrice: string;
  stock: number;
  weight: number | null;
  height: number | null;
  width: number | null;
  depth: number | null;
  isMaster: boolean;
  position: number;
}
