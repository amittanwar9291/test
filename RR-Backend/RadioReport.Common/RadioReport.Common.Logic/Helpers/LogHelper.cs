using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using RadioReport.Common.Extensions;
using Serilog;

namespace RadioReport.Common.Logic.Helpers
{
    public static class LogHelper
    {
        public static ILogger CreateLogger(string serviceName, IHostEnvironment environment = null, IConfiguration configuration = null,
            Action<LoggerConfiguration> configurationAction = null)
        {
            var seqUrl = configuration?.GetSection("SeqConnection")?.Value;
            seqUrl = !seqUrl.IsNullOrEmpty() && seqUrl != "SeqServerPlaceholder" ? seqUrl : "http://seq:5341";

            var loggerConfiguration = Extensions.CommonExtensions.ConfigureDefaults(new LoggerConfiguration()
                .Enrich.WithProperty("ServiceName", serviceName), new Uri(seqUrl));
            if (environment != null && !environment.IsDevelopment())
            {
                loggerConfiguration.MinimumLevel.Information();
            }

            if (configuration != null)
            {
                loggerConfiguration.ReadFrom.Configuration(configuration);
            }

            configurationAction?.Invoke(loggerConfiguration);
            var logger = loggerConfiguration.CreateLogger();
            Log.Logger = logger;

            return logger;
        }
    }
}
