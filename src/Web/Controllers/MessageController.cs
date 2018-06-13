using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCore
{
	[Route("messages")]
	public class MessagesController : Controller
	{
		private readonly MessageDbContext context;

		public MessagesController(MessageDbContext context)
		{
			this.context = context;
		}

		[HttpGet("")]
		public async Task<IActionResult> GetAllMessages()
		{
			var messages = await context.Messages
				.Select(message => new MessageViewModel {Id = message.Id, Text = message.Text})
				.ToArrayAsync();

			var viewModel = new MessagesViewModel
			{
				Messages = messages
			};

			return Json(viewModel);
		}

		[HttpPost("add")]
		public async Task<IActionResult> AddMessage([FromBody] MessageViewModel model)
		{
			var message = new Message
			{
				Text = model.Text
			};
			
			context.Messages.Add(message);

			await context.SaveChangesAsync();

			return Ok();
		}
	}
}