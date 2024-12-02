export type Room = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number | null;
  image: string | null;
  description?: string | null;
};
