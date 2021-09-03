using Microsoft.Extensions.Hosting;
using RadioReport.AbdomenCT.Repo;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;

namespace RadioReport.AbdomenCT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<AbdomenCTDbContext>(args, ServiceNames.AbdomenCT, CreateHostBuilder);

        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
