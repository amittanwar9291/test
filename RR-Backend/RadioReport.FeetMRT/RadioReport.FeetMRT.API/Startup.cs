using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.FeetMRT.Repo;

namespace RadioReport.FeetMRT.API
{
    public class Startup : ModuleStartupBase<FeetMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.FeetMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.FeetMRT,
                ReportTypeName = ReportTypeNames.FeetMRT,
                TotalPageCount = 7,
                TechnologyPageName = PageTypeNames.FeetMrtTechnology,
                LocalizationPageName = PageTypeNames.FeetMrtLocalization
            });
        }
    }
}
