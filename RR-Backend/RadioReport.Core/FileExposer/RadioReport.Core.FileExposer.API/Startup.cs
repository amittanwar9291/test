using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.FileExposer.Domain.Interface;
using RadioReport.Core.FileExposer.Domain.Managers;

namespace RadioReport.Core.FileExposer.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.FileExposer, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddScoped<IFileExposerHttpManager, FileExposerHttpManager>();
        }
    }
}
