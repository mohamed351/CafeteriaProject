using CafeteriaAPI.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CafeteriaAPI.Controllers
{
 
    [Authorize(Roles ="Customer")]
    public class ValuesController : ApiController
    {
        // GET api/values
        ApplicationDbContext context = new ApplicationDbContext();

        //public IHttpActionResult Post(IntervalViewModel interval)
        //{

        //    string CustomerID = User.Identity.GetUserId();
        //    var order = context.Orders.Where(a => a.CustomerID == CustomerID && a.OrderDateTime > interval.From && a.OrderDateTime < interval.To);

        //    return Ok(order);
        //}


    }
}
