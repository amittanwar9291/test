using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Core.Logic.Services;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Services;
using RadioReport.Core.InstituteManager.Domain.HostedServices;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Managers;
using RadioReport.Core.InstituteManager.Domain.Services;
using RadioReport.Core.InstituteManager.Repo;
using RadioReport.Core.InstituteManager.Repo.Repositories;

namespace RadioReport.Core.InstituteManager.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.InstituteManager, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<InstituteManagerDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.Configure<KeyStoreOptions>(Configuration.GetSection("KeyStoreOptions"));

            services.AddScoped<IDicomMapIOService, DicomMapIOService>();
            services.AddScoped<IHtmlTemplateService, HtmlTemplateService>();
            services.AddScoped<IInstituteLogoService, InstituteLogoService>();
            services.AddScoped<IInstituteHttpManager, InstituteHttpManager>();
            services.AddScoped<IInstituteManager, InstituteManagerImpl>();
            services.AddScoped<IInstituteRepository, InstituteRepository>();
            services.AddScoped<ISettingsHttpManager, SettingsHttpManager>();
            services.AddScoped<IInstituteLogoService, InstituteLogoService>();
            services.AddScoped<IKeyStoreService, PublicKeyStoreService>();
            services.AddScoped<IInstituteService, InstituteService>();

            services.AddHostedService<InstituteManagerKafkaService>();
        }
    }
}
