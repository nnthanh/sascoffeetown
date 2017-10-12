using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SASSCoffeeShop.Models
{
    public class LoginModel
    {
        public string Name { get; set; }
        public string Token { get; set; }
        public Int32 Role { get; set; }
        public Int32 BranchId { get; set; }
    }
}