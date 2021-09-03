using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MMLib.SwaggerForOcelot.Configuration;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Helpers;
using Serilog;

namespace OcelotAPIGateway
{
    public class Program
    {
        static readonly string AllowedOrigins = "_allowedOrigins";


        private static List<string> origins =
            new List<string>()
            {
                "http://*.radio-report.de",
                "https://*.radio-report.de",
                "https://*.radio-report.de:81",
                "http://*.radio-report.de:81",
                "http://localhost:4200"
            };

        public static void Main(string[] args)
        {
            var configuration = new ConfigurationBuilder().Build();
            new WebHostBuilder()
                .UseKestrel()
                .UseSerilog()
                .ConfigureKestrel((context, options) =>
                {
                    options.Listen(IPAddress.Any, 80);
                })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config
                        .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
                        .AddJsonFile("appsettings.json", true, true)
                        .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", true,
                            true)
                        .AddJsonFile("ocelotConfiguration.json")
                        .AddEnvironmentVariables();
                    configuration = config.Build();
                })
                .ConfigureServices(s =>
                {
                    s.AddSwaggerForOcelot(configuration);
                    s.Configure<List<SwaggerEndPointOptions>>(options =>
                    {
                        options.AddRange(CreateSwaggerEndPointOptions(configuration));
                    });
                    s.AddOcelot();
                    s.AddCors(options =>
                    {
                        options.AddPolicy(name: AllowedOrigins,
                            builder =>
                            {
                                if (Environment.GetEnvironmentVariable("CORS_ALLOW_ALL") == "True")
                                {
                                    builder
                                        .AllowAnyOrigin()
                                        .AllowAnyMethod()
                                        .AllowAnyHeader();
                                }
                                else
                                {
                                    builder
                                        .WithOrigins(origins.ToArray())
                                        .SetIsOriginAllowedToAllowWildcardSubdomains()
                                        .AllowAnyMethod()
                                        .AllowAnyHeader();
                                }
                            });
                    });
                })
                .Configure(app =>
                {
                    LogHelper.CreateLogger(ServiceNames.Ocelote, app.ApplicationServices.GetService<IHostEnvironment>(), configuration);
                    app.UseWebSockets();
                    app.UseCors(AllowedOrigins);
                    app.UseSwaggerForOcelotUI(opt =>
                    {
                        opt.PathToSwaggerGenerator = "/swagger/docs";
                    });
                    app.UseOcelot().Wait();
                })
                .Build()
                .Run();
        }

        private static IEnumerable<SwaggerEndPointOptions> CreateSwaggerEndPointOptions(IConfiguration configuration)
        {
            const string defaultSwaggerPath = "swagger/v1";
            var routesSection = configuration.GetSection("Routes");
            var resultList = new List<SwaggerEndPointOptions>();
            routesSection.GetChildren().ForEach(eachRoute =>
            {
                var swaggerEndpointOptions = new SwaggerEndPointOptions
                {
                    Key = eachRoute.GetValue<string>("SwaggerKey"),
                    Config = new List<SwaggerEndPointConfig>()
                };
                if (swaggerEndpointOptions.Key.IsNullOrEmpty()) return;
                var hpSections = eachRoute.GetSection("DownstreamHostAndPorts").GetChildren();
                var dsPath = eachRoute.GetValue<string>("DownstreamPathTemplate").Replace("{everything}", "");
                var version = 1;
                Console.WriteLine($"{dsPath}{defaultSwaggerPath}/{swaggerEndpointOptions.Key}.json");
                hpSections.ForEach(eachHP =>
                {
                    var host = eachHP.GetValue<string>("Host");
                    var port = eachHP.GetValue<string>("Port");
                    swaggerEndpointOptions.Config.Add(
                        new SwaggerEndPointConfig()
                        {
                            Name = $"{swaggerEndpointOptions.Key} API",
                            Version = $"v{version}",
                            Url = $"http://{host}:{port}{dsPath}{defaultSwaggerPath}/{swaggerEndpointOptions.Key}.json"
                        });
                    version++;
                });
                Console.WriteLine(swaggerEndpointOptions.AsIndentedJson());
                resultList.Add(swaggerEndpointOptions);
            });
            return resultList;
        }
    }
}
