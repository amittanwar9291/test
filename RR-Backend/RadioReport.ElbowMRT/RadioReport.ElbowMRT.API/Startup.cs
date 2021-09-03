using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.ElbowMRT.Repo;

namespace RadioReport.ElbowMRT.API
{
    public class Startup : ModuleStartupBase<ElbowMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.ElbowMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.ElbowMRT,
                ReportTypeName = ReportTypeNames.ElbowMRT,
                TotalPageCount = 8,
                TechnologyPageName = PageTypeNames.ElbowMrtTechnology,
                LocalizationPageName = PageTypeNames.ElbowMrtLocalization
            });
        }
    }
}
