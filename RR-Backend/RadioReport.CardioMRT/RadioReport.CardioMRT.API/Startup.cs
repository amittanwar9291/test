using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.CardioMRT.Repo;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.CardioMRT.API
{
    public class Startup : ModuleStartupBase<CardioMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.CardioMRT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.CardioMRT,
                ReportTypeName = ReportTypeNames.CardioMRT,
                TotalPageCount = 10,
                TechnologyPageName = PageTypeNames.CardioMrtTechnology,
                LocalizationPageName = PageTypeNames.CardioMrtAreaOfExamination
            });
        }
    }
}
