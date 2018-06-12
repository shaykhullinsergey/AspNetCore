using System;
using Core;
using Microsoft.EntityFrameworkCore;

namespace Data
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