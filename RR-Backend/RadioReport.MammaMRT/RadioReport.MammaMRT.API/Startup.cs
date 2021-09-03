using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.MammaMRT.Repo;

namespace RadioReport.MammaMRT.API
{
    public class Startup : ModuleStartupBase<MammaMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.MammaMRT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.MammaMRT,
                ReportTypeName = ReportTypeNames.MammaMRT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.MammaMrtTechnology,
                LocalizationPageName = PageTypeNames.MammaMrtPatientIndication
            });
        }
    }
}
