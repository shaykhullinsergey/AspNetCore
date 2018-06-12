using Microsoft.AspNetCore.Mvc;

namespace Web
{
	public class HomeController : Controller
	{
		[HttpGet]
		public IActionResult Index()
		{
			return View();
		}
	}
}