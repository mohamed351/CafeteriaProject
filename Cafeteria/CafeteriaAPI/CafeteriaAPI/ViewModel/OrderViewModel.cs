using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CafeteriaAPI.ViewModel
{
    public class OrderViewModel
    {

        public string Note { get; set; }
        public ICollection<OrderDetailsViewModel> OrderDetails { get; set; }
    }
    public class OrderDetailsViewModel
    {
        public int ProductID { get; set; }
        public int  Qtu { get; set; }
        public int Price { get; set; }
    }
  


}