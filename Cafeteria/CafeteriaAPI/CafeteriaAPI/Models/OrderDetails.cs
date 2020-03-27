using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CafeteriaAPI.Models
{
    public class OrderDetails
    {
        public int ID { get; set; }

        public int OrderID { get; set; }
        [ForeignKey("OrderID")]
        public Order Order { get; set; }
        public int Qtu { get; set; }
        public decimal UnitPrice { get; set; }

        public int ProductID { get; set; }
        [ForeignKey("ProductID")]
        public Product Product { get; set; }



    }
}