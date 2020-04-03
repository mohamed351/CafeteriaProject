import { OrderStatus } from './../../model/order';
import {Pipe,PipeTransform} from '@angular/core' 


@Pipe({
  name:"orderStatus"
})
export class StatusPipe implements PipeTransform{
    transform(value:OrderStatus) {
        
       switch(value){
           case OrderStatus.Done:
               return "Done";
            case OrderStatus.Proccessing:
                return "Processing";
            case OrderStatus.OutForDelivery:
                return "Out of Delivery";
            default:
                return "unknown";

       }
    }

}