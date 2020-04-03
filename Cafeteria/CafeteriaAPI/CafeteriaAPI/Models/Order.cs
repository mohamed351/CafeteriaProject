using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CafeteriaAPI.Models
{
    public class Order
    {
        public int OrderID { get; set; }
     
        public string EmployeeID { get; set; }

   
        public string CustomerID { get; set; }

        public DateTime OrderDateTime { get; set; }

        [ForeignKey("EmployeeID")]
        public ApplicationUser  Employee { get; set; }
        [ForeignKey("CustomerID")]
        public ApplicationUser Customer { get; set; }

        public OrderStatus Status { get; set; }

        public int Amount { get; set; }

        public ICollection<OrderDetails> OrderDetails { get; set; }

    }
}