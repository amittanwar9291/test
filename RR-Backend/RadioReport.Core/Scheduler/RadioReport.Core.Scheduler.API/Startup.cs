using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Quartz;
using RadioReport.Common.Consts;
using RadioReport.Core.Scheduler.Domain.Jobs;
using StartupBase = RadioReport.Common.API.Models.StartupBase;

namespace RadioReport.Core.Scheduler.API
{
    public class Startup : StartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.Scheduler, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddQuartz(q =>
            {
                q.SchedulerId = "Scheduler-Core";

                q.UseMicrosoftDependencyInjectionScopedJobFactory(options =>
                {
                    options.AllowDefaultConstructor = true;
                });

                q.ScheduleJob<AvailableModulesJob>(trigger => trigger
                    .StartNow()
                    .WithSimpleSchedule(x => x.WithIntervalInMinutes(1).RepeatForever())
                    .WithDescription("Refresh available modules cache")
                );
                q.ScheduleJob<HtmlRenderCleanupJob>(trigger => trigger
                    .StartNow()
                    .WithSimpleSchedule(x => x.WithIntervalInMinutes(5).RepeatForever())
                    .WithDescription("Cleanup all Html Render Results that are old")
                );
                q.ScheduleJob<ReportSessionLockCleanupJob>(trigger => trigger
                    .StartNow()
                    .WithSimpleSchedule(x => x.WithIntervalInHours(6).RepeatForever())
                    .WithDescription("Cleanup expired report session locks")
                );
            });
            services.AddQuartzHostedService(options =>
            {
                // when shutting down we want jobs to complete gracefully
                options.WaitForJobsToComplete = true;
            });
        }
    }
}
