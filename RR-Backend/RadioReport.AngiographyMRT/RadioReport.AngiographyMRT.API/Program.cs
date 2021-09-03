using Microsoft.Extensions.Hosting;
using RadioReport.AngiographyMRT.Repo;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;

namespace RadioReport.AngiographyMRT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<AngiographyMRTDbContext>(args, ServiceNames.AngiographyMRT, CreateHostBuilder);
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
        
    }
}
