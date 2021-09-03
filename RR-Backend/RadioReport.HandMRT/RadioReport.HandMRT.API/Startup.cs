using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.HandMRT.Repo;

namespace RadioReport.HandMRT.API
{
    public class Startup : ModuleStartupBase<HandMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.HandMRT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.HandMRT,
                ReportTypeName = ReportTypeNames.HandMRT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.HandMrtTechnology,
                LocalizationPageName = PageTypeNames.HandMrtLocalization
            });
        }
    }
}
