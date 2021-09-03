using System;
using Serilog;
using Serilog.Events;

namespace RadioReport.Common.Logic.Extensions
{
    public static class CommonExtensions
    {
        public static LoggerConfiguration ConfigureDefaults(this LoggerConfiguration configuration, Uri seqUrl)
        {
            if (configuration == null) throw new ArgumentNullException(nameof(configuration));
            if (seqUrl == null) throw new ArgumentNullException(nameof(seqUrl));

            return configuration.MinimumLevel.Debug()
                                .MinimumLevel.Override("Microsoft.Hosting", LogEventLevel.Warning)
                                .MinimumLevel.Override("Microsoft.Extensions.Hosting", LogEventLevel.Warning)
                                .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)
                                .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Information)
                                .MinimumLevel.Override("Microsoft.EntityFrameworkCore.Database.Command", LogEventLevel.Warning)
                                .MinimumLevel.Override("Microsoft.EntityFrameworkCore.Model.Validation", LogEventLevel.Error)
                                .MinimumLevel.Override("Microsoft.EntityFrameworkCore.Infrastructure", LogEventLevel.Warning)
                                .MinimumLevel.Override("Microsoft.AspNetCore.DataProtection.KeyManagement", LogEventLevel.Error)
                                .MinimumLevel.Override("Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository", LogEventLevel.Error)
                                .MinimumLevel.Override("Quartz.Core.JobRunShell", LogEventLevel.Warning)
                                .Enrich.FromLogContext()
                                .WriteTo.Console()
                                .WriteTo.Seq(seqUrl.ToString());
        }
    }
}
