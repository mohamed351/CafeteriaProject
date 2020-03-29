using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CafeteriaAPI.Models;

namespace CafeteriaAPI.Controllers
{
    public class TestingSomthignController : Controller
    {
        // GET: TestingSomthign
        public ActionResult Index()
        {
            ApplicationDbContext context = new ApplicationDbContext();
            var items = from i in context.Products
                        join x in context.Categories on i.CategoryID equals x.ID
                        select new { i.Name, x.CategoryName };


            var items9 = context.Products.Join(context.Categories, c => c.CategoryID, p => p.ID,(p,c)=>new { p.Name,c.CategoryName}).ToList();

            return View();
        }
    }
}