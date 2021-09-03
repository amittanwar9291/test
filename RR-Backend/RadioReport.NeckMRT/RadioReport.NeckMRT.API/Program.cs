using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.NeckMRT.Repo;

namespace RadioReport.NeckMRT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<NeckMRTDbContext>(args, ServiceNames.NeckMRT, CreateHostBuilder);

        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
