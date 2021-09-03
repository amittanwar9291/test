using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace RadioReport.Common.Repository
{
    public abstract class UserDbContextBase<TUser, TRole, TUserRole> : IdentityDbContext<TUser, TRole, string, IdentityUserClaim<string>,
        TUserRole, IdentityUserLogin<string>, IdentityRoleClaim<string>, IdentityUserToken<string>>
        where TUser : IdentityUser<string>
        where TRole : IdentityRole<string>
        where TUserRole : IdentityUserRole<string>
    {
        protected UserDbContextBase(DbContextOptions options) : base(options)
        {
        }

        public void MigrateAndSeed(IServiceProvider serviceProvider)
        {
            Database.Migrate();
            Seed(serviceProvider);
        }

        protected virtual Task Seed(IServiceProvider serviceProvider) => Task.CompletedTask;
    }
}
