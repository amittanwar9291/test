using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Logic.Helpers;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;

namespace RadioReport.Common.API.Models
{
    public abstract class StartupBase
    {
        protected IConfiguration Configuration { get; }
        public string ServiceName { get; }
        public IWebHostEnvironment Environment { get; }

        protected StartupBase(IConfiguration configuration, string serviceName, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            ServiceName = serviceName;
            Environment = environment;
        }

        public virtual void ConfigureServices(IServiceCollection services)
        {
            services.TryAddSingleton(new ServiceContext { Name = ServiceName });

            services.AddScoped<HttpAuthContext>();
            services.AddEnvironmentContext(Configuration);
            services.Configure<VaultOptions>(Configuration.GetSection(VaultOptions.SectionName));

            services.AddKafkaConfiguration(Configuration);
            services.AddMinIOWrapper(Configuration);
        }

        public virtual void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            LogHelper.CreateLogger(ServiceName, Environment, Configuration);
            app.UseExceptionHandling();
        }
    }
}
