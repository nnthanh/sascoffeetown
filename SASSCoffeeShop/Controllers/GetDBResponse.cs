namespace SASSCoffeeShop.Controllers
{
    internal class GetDBResponse<T>
    {
        public GetDBResponse()
        {
        }

        public object Data { get; set; }
        public bool IsOK { get; set; }
    }
}