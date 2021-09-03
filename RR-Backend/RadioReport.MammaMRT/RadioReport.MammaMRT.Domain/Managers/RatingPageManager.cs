using Microsoft.Extensions.Configuration;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.MammaMRT.Domain.Managers
{
    public class RatingPageManager :
        PageManagerBase<RatingPage, IRatingPageRepository>
    {
        private readonly IPageManager<AnatomyEnhancementPage> _anatomyEnhancementPageManager;
        public override string PageTypeName => PageTypeNames.MammaMrtRating;

        public RatingPageManager(IRatingPageRepository repository, IReportManager reportManager, IReportService reportService, IConfiguration configuration,
            IPageManager<AnatomyEnhancementPage> anatomyEnhancementPageManager, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository,
                kafkaProducer, httpAuthContext, moduleContext)
        {
            _anatomyEnhancementPageManager = anatomyEnhancementPageManager;
        }

        public override async Task<RatingPage> GetByIdAsync(Guid id, Expression<Func<RatingPage, bool>> predicate = null)
        {
            var result = await base.GetByIdAsync(id);

            if (result != null)
            {
                var anatomyEnhancementPage = await _anatomyEnhancementPageManager.GetByReportId(result.ReportId);

                if (anatomyEnhancementPage != null)
                {
                    result.ACRDensityIndex = anatomyEnhancementPage.GlandularBody switch
                    {
                        Enums.GlandularBody.AlmostEntirelyFat => 1,
                        Enums.GlandularBody.ScatteredFibroglandularTissue => 2,
                        Enums.GlandularBody.HeterogeneousFibroglandularTissue => 3,
                        Enums.GlandularBody.ExtremeFibroglandularTissue => 4,
                        _ => 0
                    };
                }
            }
            return result;
        }
    }
}
