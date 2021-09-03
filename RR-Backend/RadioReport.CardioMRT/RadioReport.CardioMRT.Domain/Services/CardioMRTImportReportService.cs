using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.CardioMRT.Domain.Enums.Technology;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.CardioMRT.Domain.Services
{
    public class CardioMRTImportReportService : ImportReportService
    {
        private readonly IPageManager<AreaOfExaminationPage> _areOfExaminationPageManager;
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public CardioMRTImportReportService(
            ILogger<CardioMRTImportReportService> logger,
            IKafkaProducer kafkaProducer,
            ModuleContext moduleContext,
            IDicomValueParser dicomValueParser,
            HttpAuthContext httpAuthContext,
            IPageManager<AreaOfExaminationPage> areOfExaminationPageManager,
            IPageManager<TechnologyPage> technologyPageManager,
            IReportManager reportManager,
            IReportPageService reportPageService
        ) : base(logger, kafkaProducer, moduleContext, dicomValueParser, httpAuthContext, reportManager, reportPageService)
        {
            _areOfExaminationPageManager = areOfExaminationPageManager;
            _technologyPageManager = technologyPageManager;
        }

        protected override async Task<Guid> CreateLocalizationPageAndImport(ICollection<StringImportValue> importValues, PatientInformation patientInformation,
            Guid reportId)
        {
            var areaOfExaminationPage = new AreaOfExaminationPage
            {
                ReportId = reportId,
                PatientInformation = patientInformation
            };
            SetDicomValues(importValues, areaOfExaminationPage);
            areaOfExaminationPage = await _areOfExaminationPageManager.AddAsync(areaOfExaminationPage);

            return areaOfExaminationPage.Id;
        }

        protected override async Task<Guid> CreateTechnologyPageAndImport(ICollection<SeriesImportValue> seriesImportValues, Guid reportId)
        {
            if (seriesImportValues == null) throw new ArgumentNullException(nameof(seriesImportValues));

            var sequences = CreateSequences(seriesImportValues);
            var technologyPage = new TechnologyPage
            {
                ReportId = reportId,
                CMReinforcedType = sequences.Any(s => s.IsPostContrast) ? CMReinforcedType.Yes : CMReinforcedType.No,
                SequencesType = SequencesType.Auto,
                Sequences = sequences,
                CMSideEffects = new List<CMSideEffect> { new CMSideEffect() }
            };
            if (technologyPage.Sequences.Any(s => s.MagneticFieldStrengthType == MagneticFieldStrengthType.OneAndHalfT))
            {
                technologyPage.MagneticFieldStrengthType = MagneticFieldStrengthType.OneAndHalfT;
            }
            else if (technologyPage.Sequences.Any(s => s.MagneticFieldStrengthType == MagneticFieldStrengthType.ThreeT))
            {
                technologyPage.MagneticFieldStrengthType = MagneticFieldStrengthType.ThreeT;
            }

            technologyPage = await _technologyPageManager.AddAsync(technologyPage);

            return technologyPage.Id;
        }

        private List<Sequence> CreateSequences(ICollection<SeriesImportValue> seriesImportValues)
        {
            var sequences = new List<Sequence>();
            foreach (var serieImportValue in seriesImportValues)
            {
                var sequence = new Sequence();
                SetDicomValues(serieImportValue.Values, sequence);
                if (sequence.WeightingType == WeightingType.None) continue;

                if (sequence.InversionTime >= 140 && sequence.InversionTime <= 170)
                {
                    sequence.SequenceType = SequenceType.STIROrSPIROrSPAIR;
                    sequence.IsSaturatedFat = true;
                }

                sequence.Number = (byte) (sequences.Count + 1);
                sequences.Add(sequence);
            }

            return sequences;
        }
    }
}
