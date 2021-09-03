using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.Tracking.Repo;

namespace RadioReport.Core.Tracking.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) => ProgramHelper.CreateAndRunHostWithDbSeed<TrackingDbContext>(args, ServiceNames.Tracking, CreateHostBuilder);

        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
