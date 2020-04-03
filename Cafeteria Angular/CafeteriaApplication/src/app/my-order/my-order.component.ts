import { Order } from './../../model/order';
import { Interval } from './../../model/interval';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DateAdapter,MAT_DATE_LOCALE,MAT_DATE_FORMATS } from '@angular/material/core/datetime';
import { OrderDetailsService } from 'src/services/order-details.service';
import { IOrderWithProduct } from 'src/model/order-product';



@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css'],
 
})
export class MyOrderComponent implements OnInit {
  interval:Interval;
  orders:Order[];
  OrderDetails:IOrderWithProduct[];
  constructor(private order:OrderDetailsService) { 

    this.interval = new Interval();
  }


  @ViewChild("picker") From;
  @ViewChild("picker2") To;
  

  ngOnInit(): void {
  }
  onContainerClick(){
   
    this.interval.from = this.From._validSelected;
    this.interval.to = this.To._validSelected;
    this.order.GetInterval(this.interval).subscribe(a=>{
      this.orders =a;
      

    });
  }
  Expanded(data:number){
      this.order.GetOrderProduct(data).subscribe(a=>{
        this.OrderDetails = a;
        console.log(this.OrderDetails);

      });
  }
  CloseExpanded(){
    this.OrderDetails=[];
    console.log(this.OrderDetails);
  }






}
