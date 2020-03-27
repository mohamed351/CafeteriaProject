using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using CafeteriaAPI.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace CafeteriaAPI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            InitialValues();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);


        }
       private void InitialValues()
        {

            var users = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
            var roles = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new ApplicationDbContext()));

            if (!roles.RoleExists("Admin"))
            {
                IdentityRole role = new IdentityRole("Admin");
                roles.Create(role);
              
            }
           if(!roles.RoleExists("Customer"))
            {
                IdentityRole role = new IdentityRole("Customer");
                roles.Create(role);
            }
           ApplicationUser us = users.FindByEmail("mohamed.perry351@gmail.com");
            if(us == null)
            {
                ApplicationUser user = new ApplicationUser
                {
                    Email = "mohamed.perry351@gmail.com",
                    UserName ="Mohamed351",
                    ImageUrl="default.png",
                    Name ="Mohamed Beshri Amer",
                    
                };
               IdentityResult result = users.Create(user, "0104859520");
                if (result.Succeeded)
                {
                    users.AddToRole(user.Id, "Admin");

                }
                

            }

        }
    }
}
