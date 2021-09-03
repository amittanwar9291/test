using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.AbdomenCT.Repo;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.AbdomenCT.API
{
    public class Startup : ModuleStartupBase<AbdomenCTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.AbdomenCT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.AbdomenCT,
                ReportTypeName = ReportTypeNames.AbdomenCT,
                TotalPageCount = 12,
                TechnologyPageName = PageTypeNames.AbdomenCtTechnology,
                LocalizationPageName = PageTypeNames.AbdomenCtAreaOfInvestigation
            });
        }
    }
}