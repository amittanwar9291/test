using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.KneeMRT.Repo;

namespace RadioReport.KneeMRT.API
{
    public class Startup : ModuleStartupBase<KneeMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.KneeMRT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.KneeMRT,
                ReportTypeName = ReportTypeNames.KneeMRT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.KneeMrtTechnology,
                LocalizationPageName = PageTypeNames.KneeMrtLocalization
            });
        }
    }
}
