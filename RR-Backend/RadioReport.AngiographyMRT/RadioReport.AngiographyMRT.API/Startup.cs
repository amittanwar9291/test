using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.AngiographyMRT.Repo;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.AngiographyMRT.API
{
    public class Startup : ModuleStartupBase<AngiographyMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.AngiographyMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.AngiographyMRT,
                ReportTypeName = ReportTypeNames.AngiographyMRT,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.AngiographyMrtTechnology,
                LocalizationPageName = PageTypeNames.AngiographyMrtLocalization
            });
        }
    }
}
