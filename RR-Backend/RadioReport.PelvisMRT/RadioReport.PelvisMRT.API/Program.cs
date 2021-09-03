using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.PelvisMRT.Repo;

namespace RadioReport.PelvisMRT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<PelvisMRTDbContext>(args, ServiceNames.PelvisMRT, CreateHostBuilder);

        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
