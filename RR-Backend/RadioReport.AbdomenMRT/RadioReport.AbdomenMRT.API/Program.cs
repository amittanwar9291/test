using Microsoft.Extensions.Hosting;
using RadioReport.AbdomenMRT.Repo;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;

namespace RadioReport.AbdomenMRT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<AbdomenMRTDbContext>(args, ServiceNames.AbdomenMRT, CreateHostBuilder);
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
