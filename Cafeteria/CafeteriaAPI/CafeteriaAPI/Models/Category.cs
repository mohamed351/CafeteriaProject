using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CafeteriaAPI.Models
{
    public class Category
    {
        public int ID { get; set; }
        public string CategoryName { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}