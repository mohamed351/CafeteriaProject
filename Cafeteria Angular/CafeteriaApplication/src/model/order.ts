export class Order {
 
    constructor(
        public OrderID:number,
        public EmployeeID:string,
        public OrderDateTime:Date,
        public Status:OrderStatus,
        public Amount:number
    ){

    }

}

export enum OrderStatus{
    Proccessing,
    OutForDelivery,
    Done
}

