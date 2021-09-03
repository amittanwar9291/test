using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.AngiographyCT.Repo;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.AngiographyCT.API
{
    public class Startup : ModuleStartupBase<AngiographyCTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.AngiographyCT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.AngiographyCT,
                ReportTypeName = ReportTypeNames.AngiographyCT,
                TotalPageCount = 11,
                TechnologyPageName = PageTypeNames.AngiographyCtTechnology,
                LocalizationPageName = PageTypeNames.AngiographyCtLocalization
            });
        }
    }
}
