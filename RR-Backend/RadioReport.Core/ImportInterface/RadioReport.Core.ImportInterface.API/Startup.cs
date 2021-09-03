using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.ImportInterface.Domain.HostedServices;
using RadioReport.Core.ImportInterface.Domain.Interfaces;
using RadioReport.Core.ImportInterface.Domain.Managers;
using RadioReport.Core.ImportInterface.Repo;
using RadioReport.Core.ImportInterface.Repo.Repositories;

namespace RadioReport.Core.ImportInterface.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.ImportInterface, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<ImportInterfaceDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddScoped<ICVI42ImportsRepository, CVI42ImportsRepository>();
            services.AddScoped<IImportManager, ImportManager>();
            services.AddMvc().AddXmlSerializerFormatters();

            services.AddHostedService<ImportInterfaceKafkaService>();
        }
    }
}
