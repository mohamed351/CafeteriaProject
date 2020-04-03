using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CafeteriaAPI.Controllers
{
    public class ImagesController : Controller
    {
        // GET: Images
        public ActionResult Index()
        {
            Uri uri =  System.Web.HttpContext.Current.Request.Url;
            string u = uri.Host;
            int p = uri.Port;
            string imagePath = "c1144ebb-4143-4fd7-b4be-d3bf042f3667.png";
            string formater = $"{uri.Scheme}://{u}:{p}/Images/{imagePath}";

            return Content(formater);
        }
    }
}