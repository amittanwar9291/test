using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using System.Linq;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class TechnologyPageManager : PageManagerBase<TechnologyPage, ITechnologyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtTechnology;

        protected override List<Type> FindingTypes => new List<Type> { typeof(CMSideEffectType), typeof(AcquisitionType), typeof(ReconstructionType) };

        public TechnologyPageManager(ITechnologyPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        public override async Task<IEnumerable<RadioReportValue>> GetValuesForReport(Guid id)
        {
            var page = await base.GetByIdAsync(id);

            if (page?.Acquisitions?.Count() > 0)
            {
                page.Acquisitions.ToList().ForEach(acquisition => FillFindingsDetailsParent(acquisition, acquisition.Reconstructions));
            }

            List<RadioReportValue> result = new List<RadioReportValue>();
            if (page != null)
            {
                result.AddRange(RadioReportIdAttributeReader.GetValuesFromAllProperties(page));
            }
            return result;
        }
    }
}
