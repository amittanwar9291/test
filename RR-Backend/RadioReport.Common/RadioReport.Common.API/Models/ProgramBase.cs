using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Extensions;
using Serilog;

namespace RadioReport.Common.API.Models
{
    public abstract class ProgramBase<TStartup> where TStartup : StartupBase
    {
        public static IHostBuilder CommonCreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(builder =>
                {
                    builder.AddJsonFile(Path.Combine(AppContext.BaseDirectory, "appsettings.common.json"), false, true);
                    var commonJsonConfiguration = builder.Build();
                    builder.Sources.Insert(1, builder.Sources.Last());
                    builder.Sources.RemoveAt(builder.Sources.Count - 1);

                    builder.AddVaultConfiguration(commonJsonConfiguration);
                })
                .ConfigureWebHostDefaults(webBuilder => webBuilder.UseStartup<TStartup>())
                .UseSerilog();
    }
}
