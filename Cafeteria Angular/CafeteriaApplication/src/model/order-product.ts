export interface IProduct {
    ID: number;
    Name: string;
    ImageUrl: string;
    IsDeleted: boolean;
    IsAvailable: boolean;
    Price: number;
    Quantity: number;
    CategoryID: number;
    Category?: any;
    OrderDetails: any[];
}

export interface IOrderWithProduct {
    ID: number;
    OrderID: number;
    Order?: any;
    Qtu: number;
    UnitPrice: number;
    ProductID: number;
    Product: IProduct;
}