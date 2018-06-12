using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Web
{
	public class Startup
	{
		private readonly IConfiguration configuration;
		
		public Startup(IConfiguration configuration)
		{
			this.configuration = configuration;
		}
		
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseStaticFiles();
			app.UseMvcWithDefaultRoute();
		}
	}
}