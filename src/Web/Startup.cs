using System.IO.Compression;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCore
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<MessageDbContext>(
				options => options.UseInMemoryDatabase(nameof(MessageDbContext)));

			services.AddMvc();

			services.Configure<GzipCompressionProviderOptions>(options =>
			{
				options.Level = CompressionLevel.Optimal;
			});
				
			services.AddResponseCompression();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			app.UseResponseCompression();

			app.UseStaticFiles();
			app.UseMvcWithDefaultRoute();
		}
	}
}