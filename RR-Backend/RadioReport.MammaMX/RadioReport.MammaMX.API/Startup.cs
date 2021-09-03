using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.MammaMX.Repo;

namespace RadioReport.MammaMX.API
{
    public class Startup : ModuleStartupBase<MammaMXDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.MammaMX, environment)
        {
        }
        
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.MammaMX,
                ReportTypeName = ReportTypeNames.MammaMX,
                TotalPageCount = 9,
                TechnologyPageName = PageTypeNames.MammaMxTechnology,
                LocalizationPageName = PageTypeNames.MammaMxPatientIndication
            });
        }
    }
}
