using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.Consts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RadioReport.Common.API.Filters;

namespace RadioReport.Common.API.Extensions
{
    public static class ApiExtensions
    {
        public static bool GetDuplicateExternalIdentifierAllowed(this HttpContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            return GetJwtPayloadValue<bool>(context, JwtPayloadKey.DuplicateExternalIdentifierAllowed);
        }

        public static string GetUserAgent(this HttpContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            return context.Request.Headers.ContainsKey(AuthConst.UserAgent)
                ? context.Request.Headers[AuthConst.UserAgent].FirstOrDefault()
                : null;
        }

        public static void ConfigureDefaults(this DbContextOptionsBuilder optionsBuilder, IConfiguration configuration, string serviceName)
        {
            if (configuration == null) throw new ArgumentNullException(nameof(configuration));

            var dbHost = configuration.GetValue<string>("DbHost");
            var dbUser = configuration.GetValue<string>("DbUser");
            var dbPassword = configuration.GetValue<string>("DbPassword");
            var connectionString = $"Host={dbHost};Database=RadioReport_{serviceName};Username={dbUser};Password={dbPassword}";

            optionsBuilder.UseNpgsql(connectionString, options => options.CommandTimeout(ConfigurationConsts.SqlCommandTimeoutSec));
        }

        public static void AddExceptionFilters(this MvcOptions options)
        {
            options.Filters.Add<IdentityExceptionFilter>(3);
            options.Filters.Add<UnauthorizedAccessExceptionFilter>(2);
            options.Filters.Add<CommonExceptionFilter>(1);
        }

        private static T GetJwtPayloadValue<T>(HttpContext context, string key) => context.Items.ContainsKey(key) ? (T) context.Items[key] : default;
    }
}
