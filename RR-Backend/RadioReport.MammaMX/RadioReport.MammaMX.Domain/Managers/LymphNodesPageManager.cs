using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums;
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
    public class LymphNodesPageManager : PageManagerBase<LymphNodesPage, ILymphNodesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMxLymphNodes;

        protected override List<Type> FindingTypes { get; } = new List<Type> { typeof(LymphNodesFindingType) };

        public LymphNodesPageManager(ILymphNodesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        public override async Task<LymphNodesPage> GetByIdAsync(Guid id, Expression<Func<LymphNodesPage, bool>> predicate = null)
        {
            var baseInclude = nameof(LymphNodesPage.Findings);
            var includes = new[]
            {
                baseInclude,
                baseInclude + "." + nameof(LymphNodesFinding.LeftLymphNodeDetails),
                baseInclude + "." + nameof(LymphNodesFinding.RightLymphNodeDetails)
            };
            var model = await Repository.GetByIdAsync(id, includes);

            model?.Findings?.ToList().ForEach(f =>
            {
                if (f.LeftLymphNodeDetails != null)
                {
                    f.LeftLymphNodeDetails.FindingType = f.FindingType;
                }
                if (f.RightLymphNodeDetails != null)
                {
                    f.RightLymphNodeDetails.FindingType = f.FindingType;
                }
            });

            return model;
        }
    }
}
