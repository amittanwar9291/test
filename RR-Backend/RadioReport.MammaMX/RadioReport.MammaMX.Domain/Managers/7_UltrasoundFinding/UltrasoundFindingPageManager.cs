using Microsoft.Extensions.Configuration;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class UltrasoundFindingPageManager : PageManagerBase<UltrasoundFindingPage, IUltrasoundFindingPageRepository>
    {
        private readonly ISummaryPageRepository summaryPageRepository;

        public override string PageTypeName => PageTypeNames.MammaMxUltrasoundFinding;

        public UltrasoundFindingPageManager(
            IUltrasoundFindingPageRepository repository,
            ISummaryPageRepository summaryPageRepository,
            IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext, ModuleContext moduleContext)
            : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
            this.summaryPageRepository = summaryPageRepository;
        }

        public override async Task<UltrasoundFindingPage> GetByIdAsync(Guid id, Expression<Func<UltrasoundFindingPage, bool>> predicate = null)
        {
            return await Repository.GetByIdAsync(id, new[] { nameof(UltrasoundFindingPage.Findings) });
        }

        public override async Task<UltrasoundFindingPage> UpdateAsync(UltrasoundFindingPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            await loadFindingsRelationsIntoMemory(model.ReportId);
            return await base.UpdateAsync(model);
        }

        public override async Task RemoveAsync(Guid id)
        {
            var toRemove = await Repository.GetByIdAsync(id);
            if (toRemove != null)
            {
                await loadFindingsRelationsIntoMemory(toRemove.ReportId);
                await base.RemoveAsync(id);
            }
        }

        protected override List<Type> FindingTypes { get; } = new List<Type> { typeof(UltrasoundFindingType) };

        // hack: this loads correct findingrelations into memory and ef sets null on their reference to removed findings
        // this is done, because standard setnull on db is disallowed by sql server (reason: cycles...)
        private Task loadFindingsRelationsIntoMemory(Guid reportId) =>
            summaryPageRepository.GetByReportIdAsync(reportId, new[] { nameof(SummaryPage.FindingRelations) });
    }
}
