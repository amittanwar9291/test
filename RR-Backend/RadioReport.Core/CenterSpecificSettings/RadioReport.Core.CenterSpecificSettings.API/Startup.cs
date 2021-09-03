using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.CenterSpecificSettings.Repo;
using RadioReport.Core.CenterSpecificSettings.Domain.Interfaces;
using RadioReport.Core.CenterSpecificSettings.Domain.Managers;

namespace RadioReport.Core.CenterSpecificSettings.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.CenterSpecificSettings, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<CenterSpecificSettingsDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddScoped<ICSPFindingRepository, CenterSpecificSettingsRepository>();
            services.AddScoped<ICSPFindingManager, CSPFindingManager>();
        }
    }
}
