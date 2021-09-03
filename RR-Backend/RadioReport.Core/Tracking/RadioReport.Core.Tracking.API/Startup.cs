using FluentValidation;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.Tracking.Domain.HostedServices;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Managers;
using RadioReport.Core.Tracking.Domain.Models;
using RadioReport.Core.Tracking.Domain.Services;
using RadioReport.Core.Tracking.Domain.Validators;
using RadioReport.Core.Tracking.Repo;
using RadioReport.Core.Tracking.Repo.Repositories;

namespace RadioReport.Core.Tracking.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.Tracking, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<TrackingDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddScoped<ITrackingHttpManager, TrackingHttpManager>();
            services.AddScoped<ITrackingManager, TrackingManager>();
            services.AddScoped<ITrackingRepository, TrackingsRepository>();
            services.AddScoped<ITrackingService, TrackingService>();
            services.AddScoped<ICsvExportService, CsvExportService>();
            services.AddTransient<IValidator<StartStopTrackingRequest>, StartStopTrackingRequestValidator>();
            services.AddTransient<IStatisticsManager, StatisticsManager>();

            services.AddHostedService<TrackingKafkaService>();
        }
    }
}
