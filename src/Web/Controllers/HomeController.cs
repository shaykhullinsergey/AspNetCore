using Microsoft.AspNetCore.Mvc;

namespace AspNetCore
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}