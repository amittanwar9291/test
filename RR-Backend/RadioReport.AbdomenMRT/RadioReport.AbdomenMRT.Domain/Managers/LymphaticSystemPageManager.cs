using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.AbdomenMRT.Domain.Enums.LymphaticSystem;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Linq;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class LymphaticSystemPageManager : PageWithImageManagerBase<LymphaticSystemPage, ILymphaticSystemPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtLymphaticSystem;

        protected override List<Type> FindingTypes => new List<Type> { typeof(LymphaticSystemFindingType), typeof(LymphNodeStationsType) };

        public LymphaticSystemPageManager(ILymphaticSystemPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        public override async Task<LymphaticSystemPage> GetByIdAsync(Guid id, Expression<Func<LymphaticSystemPage, bool>> predicate = null)
        {
            var page = await Repository.GetByIdAsync(id, GetIncludes());

            if (page?.Findings?.Count() > 0)
            {
                page.Findings.ToList().ForEach(finding => FillFindingsDetailsParent(finding, finding.LymphNodeStations));
            }

            return page;
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LymphaticSystemPage.Findings) + "." + nameof(LymphaticSystemFinding.UploadedImageFile);
            var subFindings = nameof(LymphaticSystemPage.Findings) + "." + nameof(LymphaticSystemFinding.LymphNodeStations);
            return new[]
            {
                nameof(LymphaticSystemPage.Findings),
                imageFilePropertyPath,
                subFindings
            };
        }
    }
}
