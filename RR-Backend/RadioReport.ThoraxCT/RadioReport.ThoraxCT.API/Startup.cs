using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.ThoraxCT.Repo;

namespace RadioReport.ThoraxCT.API
{
    public class Startup : ModuleStartupBase<ThoraxCTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.ThoraxCT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.ThoraxCT,
                ReportTypeName = ReportTypeNames.ThoraxCT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.ThoraxCtTechnology,
                LocalizationPageName = PageTypeNames.ThoraxCtStudyArea
            });
        }
    }
}
