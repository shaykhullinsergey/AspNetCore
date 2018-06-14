using Microsoft.EntityFrameworkCore;

namespace AspNetCore
{
	public class MessageDbContext : DbContext
	{
		public MessageDbContext(DbContextOptions<MessageDbContext> options)
			: base(options)
		{
		}

		public DbSet<Message> Messages { get; set; }
	}
}