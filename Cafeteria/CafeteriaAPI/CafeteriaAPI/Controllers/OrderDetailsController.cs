using CafeteriaAPI.Models;
using CafeteriaAPI.ViewModel;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CafeteriaAPI.Controllers
{
    public class OrderDetailsController : ApiController
    {
        ApplicationDbContext context = new ApplicationDbContext();
        [Authorize(Roles ="Customer")]
       public IHttpActionResult Post(OrderViewModel viewModel)
        {
            string CustomerID = User.Identity.GetUserId();
            Order order = new Order();
            order.CustomerID = CustomerID;
            order.OrderDateTime = DateTime.Now;
            order.OrderDetails = new List<OrderDetails>();
            foreach (var item in viewModel.OrderDetails)
            {
                order.OrderDetails.Add(new OrderDetails()
                {
                    ProductID = item.ProductID,
                    Qtu = item.Qtu,
                    UnitPrice = item.Price,
                  
                });
            }
            context.Orders.Add(order);
            context.SaveChanges();

            



             

            return Ok();
        }
    }
}
