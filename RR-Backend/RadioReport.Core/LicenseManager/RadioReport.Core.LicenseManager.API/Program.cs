using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.LicenseManager.Repo;

namespace RadioReport.Core.LicenseManager.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<LicenseManagerDbContext>(args, ServiceNames.LicenseManager, CreateHostBuilder);

        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
