using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.API.Services;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.API.Extensions;
using RadioReport.Common.Module.API.Services;
using RadioReport.Common.Module.Logic.Generators.ReportGenerator;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.Common.Module.Logic.Validators.ReportGenerator;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.Common.Module.API.Models
{
    public abstract class ModuleStartupBase<TDbContext> : WebApiStartupBase where TDbContext : DbContext
    {
        protected ModuleStartupBase(IConfiguration configuration, ModuleType moduleType, IWebHostEnvironment environment) : base(configuration,
            moduleType.ToServiceName(), environment)
        {
            ModuleType = moduleType;
        }

        protected ModuleType ModuleType { get; }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(new ServiceContext{ Name = ServiceName, CoreService = false});
            
            base.ConfigureServices(services);

            services.AddDbContext<DbContext, TDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));
            services.AddDbContext<TDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.AddSingleton<IReportTranslationManager, ReportTranslationManager>();

            services.AddScoped<IReportSchemaManager, ReportSchemaManager>();
            services.AddScoped<IReportSchemaSessionManager, ReportSchemaSessionManager>();
            services.AddScoped<IFindingLocalizerManager, FindingLocalizerManager>();
            services.AddScoped<IReportGenerationManager, ReportGenerationManager>();
            services.AddScoped<IBooleanExpressionManager, BooleanExpressionManager>();
            services.AddScoped<IDocumentGenerator, HtmlGenerator>();
            services.AddScoped<IReportManager, ReportManager>();
            services.AddScoped<IReportSessionManager, ReportSessionManager>();
            services.AddScoped<IReportHttpManager, ReportHttpManager>();
            services.AddScoped<IRepository<ReportSession>, ReportSessionRepository>();
            services.AddScoped<IReportService, ReportService>();
            services.AddScoped<IReportTextService, ReportTextService>();
            services.AddScoped<IReportPageService, ReportPageService>();
            services.AddScoped<IDicomValueParser, DefaultDicomValueParser>();
            services.AddScoped<ILicenseService, LicenseService>();
            services.AddScoped<IReportStatusService, ReportStatusService>();

            services.AddTransient<IValidator<ReportSchema>, ReportSchemaValidator>();
            services.AddHostedService<ModuleKafkaService>();

            services.AddModuleSpecific(ModuleType);
        }

        protected override void ConfigureMvcServices(IServiceCollection services)
        {
            services.AddMvc(options =>
                {
                    options.AddExceptionFilters();
                    options.Conventions.Add(new GenericControllerRouteConvention());
                })
                .ConfigureApplicationPartManager(m => m.FeatureProviders.Add(new GenericTypeControllerFeatureProvider()))
                .AddFluentValidation();
        }
    }
}