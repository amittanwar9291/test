using Microsoft.AspNetCore.Builder;
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
using RadioReport.Core.LicenseManager.Domain.HostedServices;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Managers;
using RadioReport.Core.LicenseManager.Domain.Models;
using RadioReport.Core.LicenseManager.Domain.Services;
using RadioReport.Core.LicenseManager.Repo;
using RadioReport.Core.LicenseManager.Repo.Repositories;

namespace RadioReport.Core.LicenseManager.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.LicenseManager, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<LicenseManagerDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddScoped<ILicenseHttpManager, LicenseHttpManager>();
            services.AddScoped<ILicenseFractionManager, LicenseFractionManager>();
            services.AddScoped<IRepository<LicenseFraction>, LicenseFractionRepository>();
            services.AddScoped<ILicenseTokenService, LicenseTokenService>();
            services.AddScoped<IKeyStoreService, PublicKeyStoreService>();
            services.AddScoped<IRepository<CurrentCreditScore>, CurrentCreditScoreRepository>();
            services.AddScoped<ICurrentCreditScoreManager, CurrentCreditScoreManager>();
            services.AddScoped<IRepository<License>, LicenseRepository>();
            services.AddScoped<ILicenseManager, Domain.Managers.LicenseManager>();
            services.AddScoped<IPaginationService, PaginationService>();
            services.AddScoped<ILicenseIncrementHandler, LicenseIncrementHandler>();
            
            services.AddVault(Configuration);

            services.Configure<LicenseOptions>(Configuration.GetSection(LicenseOptions.SectionName));
            services.Configure<KeyStoreOptions>(Configuration.GetSection(KeyStoreOptions.SectionName));

            services.AddHostedService<LicenseManagerKafkaService>();
        }
    }
}
