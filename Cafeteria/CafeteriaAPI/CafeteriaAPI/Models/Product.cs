using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CafeteriaAPI.Models
{
    public class Product
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public bool IsDeleted { get; set; }
        public bool IsAvailable { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }

        public int CategoryID { get; set; }
        [ForeignKey("CategoryID")]
        public Category Category { get; set; }

        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}