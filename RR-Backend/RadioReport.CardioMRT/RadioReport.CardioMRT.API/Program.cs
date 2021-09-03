using Microsoft.Extensions.Hosting;
using RadioReport.CardioMRT.Repo;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;

namespace RadioReport.CardioMRT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<CardioMRTDbContext>(args, ServiceNames.CardioMRT, CreateHostBuilder);
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
        
    }
}
