using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.CenterSpecificSettings.Repo;

namespace RadioReport.Core.CenterSpecificSettings.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<CenterSpecificSettingsDbContext>(args, ServiceNames.CenterSpecificSettings, CreateHostBuilder);
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);

    }
}
