using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.SpineCT.Repo;

namespace RadioReport.SpineCT.API
{
    public class Startup : ModuleStartupBase<SpineCTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.SpineCT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.SpineCT,
                ReportTypeName = ReportTypeNames.SpineCT,
                TotalPageCount = 10,
                TechnologyPageName = PageTypeNames.SpineCtTechnology,
                LocalizationPageName = PageTypeNames.SpineCtLocalization
            });
        }
    }
}
