using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.PelvisMRT.Repo;

namespace RadioReport.PelvisMRT.API
{
    public class Startup : ModuleStartupBase<PelvisMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.PelvisMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.PelvisMRT,
                ReportTypeName = ReportTypeNames.PelvisMRT,
                TotalPageCount = 12,
                TechnologyPageName = PageTypeNames.PelvisMrtTechnology,
                LocalizationPageName = PageTypeNames.PelvisMrtLocalization
            });
        }
    }
}
