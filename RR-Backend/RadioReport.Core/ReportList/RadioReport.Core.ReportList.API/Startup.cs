using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Core.ReportList.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Managers;
using RadioReport.Core.ReportList.Repo.Repositories;
using RadioReport.Core.ReportList.Domain.HostedServices;
using RadioReport.Core.ReportList.Repo;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Core.ReportList.Domain.Models;
using RadioReport.Core.ReportList.Domain.Services;

namespace RadioReport.Core.ReportList.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.ReportList, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddDbContext<ReportListDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddTransient<IReportListHttpManager, ReportListHttpManager>();
            services.AddTransient<IReportEntryManager, ReportEntryManager>();
            services.AddTransient<IReportEntryRepository, ReportEntryRepository>();
            services.AddTransient<ISortingService, SortingService>();
            services.AddTransient<IFilteringService, FilteringService>();
            services.AddTransient<IReportListPaginationService, ReportListPaginationService>();
            services.AddTransient(_ => new MapperConfiguration(c =>
            {
                c.CreateMap<Report, ReportEntry>();
                c.CreateMap<ReportEntry, Report>();
            }).CreateMapper());

            services.AddHostedService<ReportListKafkaService>();
            services.AddScoped<IExportCsvManager, ExportCsvManager>();
            services.AddScoped<IExportCsvService, ExportCsvService>();
        }
    }
}
