using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ShoulderMRT.Domain.Models;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Linq.Expressions;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ShoulderMRT.Domain.Enums;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.ShoulderMRT.SoftParts.Domain.Managers
{
    public class SoftPartsPageManager : PageManagerBase<SoftPartsPage, ISoftPartsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ShoulderMrtSoftParts;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SoftPartsFindingType), typeof(MusculatureFindingType) };

        public SoftPartsPageManager(ISoftPartsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        public override async Task<SoftPartsPage> GetByIdAsync(Guid id, Expression<Func<SoftPartsPage, bool>> predicate = null)
        {
            var page = await Repository.GetByIdAsync(id, new string[]
            {
                nameof(SoftPartsPage.Findings),
                nameof(SoftPartsPage.Findings) + "." + nameof(SoftPartsFinding.MusculatureFindings)
            });

            if (page?.Findings?.Count() > 0)
            {
                page.Findings.ToList().ForEach(finding => FillFindingsDetailsParent(finding, finding.MusculatureFindings));
            }

            return page;
        }
    }
}
