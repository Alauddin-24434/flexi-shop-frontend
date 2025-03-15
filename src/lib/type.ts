export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    shopId: string;
    isDeleted: boolean;
    stock: number;
    regularDiscount: number;
    productThumbnail: string;
    productImages: string[];
    tags: string[];
    shop: Shop; // Assuming `Shop` is another type you have in your app
    category: Category; // Assuming `Category` is another type you have in your app
    categoryId: string;
    Review: Review[]; // Assuming `Review` is another type you have in your app
    FlashSale: FlashSale[]; // Assuming `FlashSale` is another type you have in your app
  }
  
  // Assuming the `Shop`, `Category`, `OrderItem`, `Review`, and `FlashSale` types are defined somewhere in your code.
  
  interface Shop {
    id: string;
    name: string;
    // Other properties related to `Shop`
  }
  
  interface Category {
    id: string;
    name: string;
    // Other properties related to `Category`
  }
  

  interface Review {
    id: string;
    rating: number;
    comment: string;
    // Other properties related to `Review`
  }
  
  interface FlashSale {
    id: string;
    salePrice: number;
    startDate: Date;
    endDate: Date;
    // Other properties related to `FlashSale`
  }
  