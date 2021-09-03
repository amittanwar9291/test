using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.API.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.HeadMRT.Repo;

namespace RadioReport.HeadMRT.API
{
    public class Startup: ModuleStartupBase<HeadMRTDbContext>
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ModuleType.HeadMRT, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddSingleton(new ModuleContext
            {
                Type = ModuleType.HeadMRT,
                ReportTypeName = ReportTypeNames.HeadMRT,
                TotalPageCount = 12,
                TechnologyPageName = PageTypeNames.HeadMrtTechnology,
                LocalizationPageName = PageTypeNames.HeadMrtExamination
            });
        }
    }
}
