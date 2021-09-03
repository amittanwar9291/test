using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Core.Logic.Services;
using RadioReport.Core.ExportInterface.Domain.Interfaces;
using RadioReport.Core.ExportInterface.Domain.Managers;
using RadioReport.Core.ExportInterface.Domain.Services;

namespace RadioReport.Core.ExportInterface.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.ExportInterface, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddScoped<IExportHttpManager, ExportHttpManager>();
            services.AddScoped<IHtmlTemplateService, HtmlTemplateService>();
            services.AddScoped<IInstituteLogoService, InstituteLogoService>();
            services.AddScoped<IExportService, ExportService>();
        }
    }
}
