export interface Product {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: null;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  stop_time: Date;
  attributes: any[];
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null;
}

export interface ProductCategory {
  id: string;
  name: string;
  picture: null;
  permalink: null;
  total_items_in_this_category: number;
  path_from_root: PathFromRoot[];
  children_categories: ChildrenCategory[];
  attribute_types: string;
  settings: Settings;
  meta_categ_id: null;
  attributable: boolean;
  date_created: Date;
}

export interface ChildrenCategory {
  id: string;
  name: string;
  total_items_in_this_category: number;
}

export interface PathFromRoot {
  id: string;
  name: string;
}