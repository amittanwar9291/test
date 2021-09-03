using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Connections;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.SignalR.API.HostedServices;
using RadioReport.Core.SignalR.API.Hubs;
using RadioReport.Core.SignalR.Domain.Interfaces;
using RadioReport.Core.SignalR.Domain.Managers;
using RadioReport.Core.SignalR.Domain.Models;

namespace RadioReport.Core.SignalR.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.SignalR, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSignalR();
            services.AddHostedService<SignalRKafkaService>();
            services.AddHostedService<TaskQueueService>();
            services.AddTransient<IConnectionManager, ConnectionManager>();
            services.AddSingleton<TaskQueue>();
        }

        public override void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            base.Configure(app, env);

            app.UseHttpsRedirection();
            app.UseEndpoints(
                endpoints =>
                {
                    endpoints.MapHub<ReportListHub>("api/Core/SignalR/Sockets/ReportList", ConfigureHubOptions);
                    endpoints.MapHub<ReportSessionHub>("api/Core/SignalR/Sockets/ReportSession", ConfigureHubOptions);
                }
            );
        }

        private static void ConfigureHubOptions(HttpConnectionDispatcherOptions options)
        {
            options.Transports = HttpTransportType.WebSockets;
        }
    }
}
