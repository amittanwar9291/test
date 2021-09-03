using Microsoft.Extensions.Hosting;
using RadioReport.Common.Repository;
using Microsoft.AspNetCore.Identity;
using RadioReport.Common.Repository.Helpers;

namespace RadioReport.Common.API.Extensions
{
    public static class HostExtensions
    {
        public static void MigrateAndSeedDatabase<T>(this IHost host) where T : DbContextBase =>
            DbHelper.Migrate<T>(host, (dbContext, serviceProvider) => (dbContext as T)?.MigrateAndSeed(serviceProvider));

        public static void MigrateAndSeedUserDatabase<TUser, TRole, TUserRole, TContext>(this IHost host)
            where TUser : IdentityUser<string>
            where TRole : IdentityRole<string>
            where TUserRole : IdentityUserRole<string>
            where TContext : UserDbContextBase<TUser, TRole, TUserRole> =>
            DbHelper.Migrate<TContext>(host, (dbContext, serviceProvider) => (dbContext as TContext)?.MigrateAndSeed(serviceProvider));
    }
}
