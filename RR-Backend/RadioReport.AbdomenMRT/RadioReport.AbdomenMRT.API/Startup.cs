using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.AbdomenMRT.Repo;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.AbdomenMRT.API
{
    public class Startup : ModuleStartupBase<AbdomenMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.AbdomenMRT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.AbdomenMRT,
                ReportTypeName = ReportTypeNames.AbdomenMRT,
                TotalPageCount = 12,
                TechnologyPageName = PageTypeNames.AbdomenMrtTechnology,
                LocalizationPageName = PageTypeNames.AbdomenMrtAnamnesis
            });
        }
    }
}
