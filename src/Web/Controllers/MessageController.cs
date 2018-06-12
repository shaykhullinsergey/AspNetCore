using Core;
using Data;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Web
{
	[Route("messages")]
	public class MessageController : Controller
	{
		private readonly MessageDbContext context;

		public MessageController(MessageDbContext context)
		{
			this.context = context;
		}
		
		[HttpGet("/")]
		public async Task<IActionResult> All()
		{
			var viewModel = new MessageViewModel
			{
				Messages = await context.Messages.ToArrayAsync()
			};
			
			return Json(viewModel);
		}

		[HttpGet("add")]
		public async Task<IActionResult> Add()
		{
			var message = new Message
			{
				Text = Guid.NewGuid().ToString()
			};
			context.Messages.Add(message);
			
			await context.SaveChangesAsync();
			
			return Ok();
		}
	}
}