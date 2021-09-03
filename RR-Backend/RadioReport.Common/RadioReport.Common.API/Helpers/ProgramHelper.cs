using System;
using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Repository;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Logic.Helpers;

namespace RadioReport.Common.API.Helpers
{
    public static class ProgramHelper
    {
        public static void CreateAndRunHostWithDbSeed<T>(string[] args, string serviceName, Func<string[], IHostBuilder> hostBuilder) where T : DbContextBase
        {
            if (hostBuilder == null) throw new ArgumentNullException(nameof(hostBuilder));

            CreateHost(args, serviceName, hostBuilder, host => host.MigrateAndSeedDatabase<T>());
        }

        public static void CreateAndRunHostWithUserDbSeed<TUser, TRole, TUserRole, TContext>(string[] args, string serviceName,
            Func<string[], IHostBuilder> hostBuilder)
            where TUser : IdentityUser<string>
            where TRole : IdentityRole<string>
            where TUserRole : IdentityUserRole<string>
            where TContext : UserDbContextBase<TUser, TRole, TUserRole>
        {
            if (hostBuilder == null) throw new ArgumentNullException(nameof(hostBuilder));

            CreateHost(args, serviceName, hostBuilder, host => host.MigrateAndSeedUserDatabase<TUser, TRole, TUserRole, TContext>());
        }

        private static void CreateHost(string[] args, string serviceName, Func<string[], IHostBuilder> hostBuilder, Action<IHost> migrationAction)
        {
            try
            {
                var host = hostBuilder(args).Build();
                migrationAction(host);
                host.Run();
            }
            catch (Exception exception)
            {
                LogHelper.CreateLogger(serviceName).Error(exception, exception.Message);
            }
        }
    }
}
