using CafeteriaAPI.Models;
using CafeteriaAPI.ViewModel;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.Entity;

namespace CafeteriaAPI.Controllers
{
    // [Authorize(Roles = "Customer")]
  
    public class OrderDetailsController : ApiController
    {
        ApplicationDbContext context = new ApplicationDbContext();

  

        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        [Route("api/myDetails/{from}/{to}")]
        public IHttpActionResult GetAll([FromUri]DateTime from ,[FromUri] DateTime to)
        {
           
            string CustomerID = User.Identity.GetUserId();
            var order = context.Orders.Where(a => a.CustomerID == CustomerID && a.OrderDateTime > from && a.OrderDateTime <= to).ToList();
            return Ok(order);
        }
        [Route("api/OrderDetails/{ID}")]
        public IHttpActionResult GetOrderDetails(int? ID)
        { 
            if(ID == null)
            {
                return BadRequest();
            }
            List<OrderDetails> orderDetails = context.OrderDetails.Include(async=>async.Product)
                .Where(a => a.OrderID == ID).ToList();


            return Ok(orderDetails);
        }
       
       
       public IHttpActionResult Post(OrderViewModel viewModel)
        {
            string CustomerID = User.Identity.GetUserId();
            Order order = new Order();
            order.CustomerID = CustomerID;
            order.OrderDateTime = DateTime.Now;
            order.Status = OrderStatus.Processing;
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
            // calculate amount
            int tempAmount = 0;
            foreach (var item in viewModel.OrderDetails)
            {
                tempAmount += (item.Price * item.Qtu);
            }
            order.Amount = tempAmount;
            
            context.Orders.Add(order);
            context.SaveChanges();
            return Ok(order);
        }
       
    }
}
