using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.ShoulderMRT.Repo;

namespace RadioReport.ShoulderMRT.API
{
    public class Startup : ModuleStartupBase<ShoulderMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.ShoulderMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.ShoulderMRT,
                ReportTypeName = ReportTypeNames.ShoulderMRT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.ShoulderMrtTechnology,
                LocalizationPageName = PageTypeNames.ShoulderMrtLocalization
            });
        }
    }
}
