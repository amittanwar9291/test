using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.HipMRT.Repo;

namespace RadioReport.HipMRT.API
{
    public class Startup : ModuleStartupBase<HipMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.HipMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.HipMRT,
                ReportTypeName = ReportTypeNames.HipMRT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.HipMrtTechnology,
                LocalizationPageName = PageTypeNames.HipMrtLocalization
            });
        }
    }
}
