using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.NeckMRT.Domain.Enums.Technology;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Services
{
    public class NeckMRTImportReportService : ImportReportService
    {
        private readonly IPageManager<ExaminationPage> _examinationPageManager;
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public NeckMRTImportReportService(
            ILogger<NeckMRTImportReportService> logger,
            IKafkaProducer kafkaProducer,
            ModuleContext moduleContext,
            IDicomValueParser dicomValueParser,
            HttpAuthContext httpAuthContext,
            IPageManager<ExaminationPage> examinationPageManager,
            IPageManager<TechnologyPage> technologyPageManager,
            IReportManager reportManager,
            IReportPageService reportPageService
        ) : base(logger, kafkaProducer, moduleContext, dicomValueParser, httpAuthContext, reportManager, reportPageService)
        {
            _examinationPageManager = examinationPageManager;
            _technologyPageManager = technologyPageManager;
        }

        protected override async Task<Guid> CreateLocalizationPageAndImport(ICollection<StringImportValue> importValues, PatientInformation patientInformation,
            Guid reportId)
        {
            var examinationPage = new ExaminationPage
            {
                ReportId = reportId,
                PatientInformation = patientInformation
            };
            SetDicomValues(importValues, examinationPage);
            examinationPage = await _examinationPageManager.AddAsync(examinationPage);

            return examinationPage.Id;
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
