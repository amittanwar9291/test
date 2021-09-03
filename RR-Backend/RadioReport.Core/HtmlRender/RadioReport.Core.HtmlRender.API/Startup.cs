using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Core.HtmlRender.API.Extensions;
using RadioReport.Core.HtmlRender.Domain.HostedServices;
using RadioReport.Core.HtmlRender.Domain.Interfaces;
using RadioReport.Core.HtmlRender.Domain.Services;
using StartupBase = RadioReport.Common.API.Models.StartupBase;

namespace RadioReport.Core.HtmlRender.API
{
    public class Startup : StartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.HtmlRender, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            services.AddConnectOptions(Configuration);
            services.AddSingleton<IBrowserService, BrowserService>();

            services.AddHostedService<HtmlRenderKafkaService>();
        }
    }
}
