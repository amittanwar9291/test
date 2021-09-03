using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.Users.Domain.Models.Entities;
using RadioReport.Core.Users.Repo;

namespace RadioReport.Core.Users.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper
                .CreateAndRunHostWithUserDbSeed<ApplicationUser, ApplicationRole, ApplicationUserRole, CoreUserDbContext>(args, ServiceNames.Users,
                    CreateHostBuilder);

        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
