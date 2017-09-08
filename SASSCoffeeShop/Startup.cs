using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SASSCoffeeShop.Startup))]
namespace SASSCoffeeShop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
