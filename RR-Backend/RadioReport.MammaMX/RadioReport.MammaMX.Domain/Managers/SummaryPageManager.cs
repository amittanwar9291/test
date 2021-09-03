using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums.MammographyParenchymaAnatomy;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class SummaryPageManager : PageManagerBase<SummaryPage, ISummaryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMxSummary;

        private readonly IMammographyParenchymaAnatomyPageRepository mammographyParenchymaAnatomyPageRepository;

        public SummaryPageManager(
            ISummaryPageRepository repository,
            IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer,
            IMammographyParenchymaAnatomyPageRepository mammographyParenchymaAnatomyPageRepository, HttpAuthContext httpAuthContext,
            ModuleContext moduleContext)
            : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
            this.mammographyParenchymaAnatomyPageRepository = mammographyParenchymaAnatomyPageRepository;
        }

        public override async Task<SummaryPage> GetByIdAsync(Guid id, Expression<Func<SummaryPage, bool>> predicate = null)
        {
            var model = await base.GetByIdAsync(id);

            if (model != null)
            {
                var mammographyParenchymaAnatomyPage = await mammographyParenchymaAnatomyPageRepository.GetByReportIdAsync(model.ReportId, null);
                model.ParenchymaDensityLeft = CalculateParenchymaDensity(mammographyParenchymaAnatomyPage?.LeftParenchymaDensityBreastCompositionType);
                model.ParenchymaDensityRight = CalculateParenchymaDensity(mammographyParenchymaAnatomyPage?.RightParenchymaDensityBreastCompositionType);
            }

            return model;
        }

        public override IEnumerable<string> GetAvailableFindingTypes() =>
            base.GetAvailableFindingTypes().Append(ReportConsts.CorrelationFinding);

        private char? CalculateParenchymaDensity(ParenchymaDensityBreastCompositionType? parenchymaDensityBreastCompositionType) =>
            parenchymaDensityBreastCompositionType switch
            {
                ParenchymaDensityBreastCompositionType.EntirelyFatty => 'a',
                ParenchymaDensityBreastCompositionType.ScatteredAreasOfFibroglandularDensity => 'b',
                ParenchymaDensityBreastCompositionType.HeterogeneouslyDense => 'c',
                ParenchymaDensityBreastCompositionType.ExtremelyDense => 'd',
                _ => null
            };
    }
}
