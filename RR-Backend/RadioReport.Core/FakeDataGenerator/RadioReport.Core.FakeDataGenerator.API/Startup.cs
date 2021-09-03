using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Core.FakeDataGenerator.Domain.Interfaces;
using RadioReport.Core.FakeDataGenerator.Domain.Managers;
using RadioReport.Core.FakeDataGenerator.Domain.Services;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.FakeDataGenerator.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.FakeDataGenerator, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddScoped<IFakeDataManager, FakeDataManager>();
            services.AddScoped<IFakeDataService, FakeDataService>();
            services.AddScoped<IReportListFakeDataService, ReportListFakeDataService>();
            services.AddTransient(_ => new MapperConfiguration(c =>
            {
                c.CreateMap<Report, ReportEntry>();
                c.CreateMap<ReportEntry, Report>();
            }).CreateMapper());
        }
    }
}
