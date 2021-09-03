using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Services;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.HostedServices;
using RadioReport.Core.PatientManager.Domain.Interfaces;
using RadioReport.Core.PatientManager.Domain.Managers;
using RadioReport.Core.PatientManager.Domain.Models;
using RadioReport.Core.PatientManager.Domain.Services;
using RadioReport.Core.PatientManager.Repo;
using RadioReport.Core.PatientManager.Repo.Repositories;
using VaultSharp;
using VaultSharp.V1.AuthMethods.LDAP;

namespace RadioReport.Core.PatientManager.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.PatientManager, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<PatientManagerDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddScoped<IPatientHttpManager, PatientHttpManager>();
            services.AddScoped<IPatientEncryptedManager, PatientEncryptedManager>();
            services.AddScoped<IPatientEncryptedRepository, PatientEncryptedRepository>();
            services.AddScoped<IVaultEncodingService, VaultEncodingService>();
            services.AddVault(Configuration);

            if (Configuration.GetValue($"{VaultOptions.SectionName}:{nameof(VaultOptions.IsMocked)}", false))
            {
                services.AddScoped<IEntityEncryptionService<Patient, PatientEncrypted>, MockPatientEncryptionService>();
            }
            else
            {
                services.AddScoped<IEntityEncryptionService<Patient, PatientEncrypted>, PatientEncryptionService>();
            }

            services.AddHostedService<PatientManagerKafkaService>();
        }
    }
}
