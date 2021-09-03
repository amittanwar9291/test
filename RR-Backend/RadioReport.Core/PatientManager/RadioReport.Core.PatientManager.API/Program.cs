using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.PatientManager.Repo;

namespace RadioReport.Core.PatientManager.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args) =>
            ProgramHelper.CreateAndRunHostWithDbSeed<PatientManagerDbContext>(args, ServiceNames.PatientManager, CreateHostBuilder);
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);

    }
}
