using Microsoft.Extensions.Hosting;
using RadioReport.AngiographyCT.Repo;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;

namespace RadioReport.AngiographyCT.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<AngiographyCTDbContext>(args, ServiceNames.AngiographyCT, CreateHostBuilder);
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}
