using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.NeckMRT.Repo;

namespace RadioReport.NeckMRT.API
{
    public class Startup : ModuleStartupBase<NeckMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.NeckMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.NeckMRT,
                ReportTypeName = ReportTypeNames.NeckMRT,
                TotalPageCount = 11,
                TechnologyPageName = PageTypeNames.NeckMrtTechnology,
                LocalizationPageName = PageTypeNames.NeckMrtExamination
            });
        }
    }
}
