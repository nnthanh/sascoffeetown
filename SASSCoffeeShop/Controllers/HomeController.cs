using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SASSCoffeeShop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult ManageUser()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null || Int32.Parse(Session["loggedRole"].ToString()) != 1)
            {
                return RedirectToAction("Login", "Account");
            }
            return View();
        }

        public ActionResult UpgradeMembership()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null)
            {
                return RedirectToAction("Login", "Account");
            }
            return View();
        }

        public ActionResult CheckIn()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null)
            {
                return RedirectToAction("Login", "Account");
            }

            return View();
        }

        public ActionResult SplashNews()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null || Int32.Parse(Session["loggedRole"].ToString()) != 1)
            {
                return RedirectToAction("Login", "Account");
            }

            return View();
        }

        public ActionResult Event()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null || Int32.Parse(Session["loggedRole"].ToString()) != 1)
            {
                return RedirectToAction("Login", "Account");
            }

            return View();
        }

        public ActionResult Branch()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null || Int32.Parse(Session["loggedRole"].ToString()) != 1)
            {
                return RedirectToAction("Login", "Account");
            }

            return View();
        }

        public ActionResult EventList()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null)
            {
                return RedirectToAction("Login", "Account");
            }

            return View();
        }

        public ActionResult ContentUpload()
        {
            //Check session
            if (Session["loggedUser"] == null || Session["loggedToken"] == null || Int32.Parse(Session["loggedRole"].ToString()) != 1)
            {
                return RedirectToAction("Login", "Account");
            }

            return View();
        }
    }
}