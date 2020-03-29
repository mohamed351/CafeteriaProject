using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using CafeteriaAPI.Models;

namespace CafeteriaAPI.Controllers
{
    [Authorize(Roles = "Admin,Customer")]
    public class ProductsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

       
        public IEnumerable<Product> GetProducts()
        {
            var products = db.Products;
            foreach (var item in products.ToList())
            {
                item.ImageUrl = GetImage(item.ImageUrl);
            }

            return products;
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }
           
            return Ok(product);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.ID)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(Product))]
        public IHttpActionResult PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            product.ImageUrl = saveImage(product.ImageUrl);
            db.Products.Add(product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.ID }, product);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.ID == id) > 0;
        }
        public static string GetImage(string image)
        {
            Uri uri = System.Web.HttpContext.Current.Request.Url;
            return $"{uri.Scheme}://{uri.Host}:{uri.Port}/Images/{image}";

        }
        private static string saveImage(string info)
        {
            string fromBase64 = info;
            int index = fromBase64.IndexOf(@"base64,");
            fromBase64 = fromBase64.Remove(0, index + ("base64,").Length);
            byte[] imageArray = Convert.FromBase64String(fromBase64);
            ImageConverter image = new ImageConverter();
            Image savedImage = (Image)image.ConvertFrom(imageArray);
            string serverPath = HttpContext.Current.Server.MapPath("~/Images/");
            string Imagename = Guid.NewGuid().ToString() + ".png";
            string fullPath = Path.Combine(serverPath, Imagename);
            savedImage.Save(fullPath);
            return Imagename;
        }
    }
}