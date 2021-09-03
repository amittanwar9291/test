using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.SpineMRT.Repo;

namespace RadioReport.SpineMRT.API
{
    public class Startup : ModuleStartupBase<SpineMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.SpineMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.SpineMRT,
                ReportTypeName = ReportTypeNames.SpineMRT,
                TotalPageCount = 10,
                TechnologyPageName = PageTypeNames.SpineMrtTechnology,
                LocalizationPageName = PageTypeNames.SpineMrtLocalization
            });
        }
    }
}
