using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.ThoraxMRT.Repo;

namespace RadioReport.ThoraxMRT.API
{
    public class Startup : ModuleStartupBase<ThoraxMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.ThoraxMRT, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.ThoraxMRT,
                ReportTypeName = ReportTypeNames.ThoraxMRT,
                TotalPageCount = 8,
                TechnologyPageName = PageTypeNames.ThoraxMrtTechnology,
                LocalizationPageName = PageTypeNames.ThoraxMrtStudyArea
            });
        }
    }
}
