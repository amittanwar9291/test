using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Module.Logic.Enums;

namespace RadioReport.Common.Module.Logic.Managers
{
    public abstract class PageManagerBase<TModel, TRepository> : Manager<TModel, TRepository>, IPageManager<TModel>
        where TModel : PageModelBase
        where TRepository : IPageRepository<TModel>
    {
        public abstract string PageTypeName { get; }
        protected IReportManager ReportManager { get; }
        protected IReportService ReportService { get; }
        protected IKafkaProducer KafkaProducer { get; }
        protected HttpAuthContext HttpAuthContext { get; }
        protected ModuleContext ModuleContext { get; }
        protected virtual List<Type> FindingTypes { get; } = new List<Type>();

        protected PageManagerBase(
            IReportManager reportManager,
            IReportService reportService,
            TRepository repository,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            ModuleContext moduleContext
        ) : base(repository)
        {
            ReportManager = reportManager;
            ReportService = reportService;
            KafkaProducer = kafkaProducer;
            HttpAuthContext = httpAuthContext;
            ModuleContext = moduleContext;
        }

        public async Task<TModel> AddWithReportSessionAsync(TModel model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            await VerifyReportSession(model.ReportId);
            await AddAsync(model);

            return model;
        }

        public override async Task<TModel> AddAsync(TModel model, bool keepId = false)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            var blockedPage = await GetPagesToBlock(model);
            var result = await base.AddAsync(model, keepId);
            await ReportService.UpdatePageId(model.ReportId, model.Id, model.PageTypeName);
            await TriggerPageReload(model, blockedPage);

            return result;
        }

        public async Task<TModel> GetByReportId(Guid reportId) => await Repository.GetByReportIdAsync(reportId);

        public async Task<TModel> GetByReportIdAsync(Guid reportId, string[] includes) => await Repository.GetByReportIdAsync(reportId, includes);

        public async Task RemoveByReportIdAsync(Guid reportId)
        {
            Repository.RemoveByReportId(reportId);
            await Repository.SaveChangesAsync();
            await ReportService.UpdatePageId(reportId, Guid.Empty, PageTypeName);
        }

        protected void FillFindingsDetailsParent(ICollectionItem parent, IEnumerable<FindingBase> details)
        {
            if (parent == null || details == null || !details.Any())
            {
                return;
            }

            foreach (var detail in details)
            {
                detail.ParentNumber = parent.Number;
            }
        }

        public async Task<TModel> UpdateWithReportSessionAsync(Guid id, TModel model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            model.Id = id;
            await VerifyReportSession(model.ReportId);
            await UpdateAsync(model);

            return model;
        }

        public override async Task<TModel> UpdateAsync(TModel model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            var pagesToBlock = await GetPagesToBlock(model);
            var result = await base.UpdateAsync(model);
            await TriggerPageReload(result, pagesToBlock);

            await ReportService.ClearReportApproval(model.ReportId);

            return result;
        }

        private async Task TriggerPageReload(TModel result, Dictionary<string, bool> pagesToBlock)
        {
            if (pagesToBlock?.Count > 0)
            {
                var report = await ReportManager.GetByIdAsync(result.ReportId);
                foreach (var (key, value) in pagesToBlock)
                {
                    var pageToBlock = report.Pages.Single(p => p.TypeName == key);

                    pageToBlock.IsBlocked = value;

                    if (value)
                    {
                        pageToBlock.WasModified = false;
                    }
                }
                await ReportManager.UpdateAsync(report);
                await RemoveBlockedPages(report.Id, pagesToBlock);
                await SendUpdatePagesMessage(report.Id);
            }
        }

        private async Task SendUpdatePagesMessage(Guid reportId)
        {
            var reportData = ReportData.Create(reportId, ModuleContext.Type).Value;
            await KafkaProducer.WriteMessage(KafkaTopic.Request.UpdateReportPages, reportData.AsJson(), HttpAuthContext);
        }

        public virtual async Task<Dictionary<string, bool>> GetPagesToBlock(TModel newModel) => await Task.FromResult<Dictionary<string, bool>>(null);

        protected virtual Task RemoveBlockedPages(Guid reportId, Dictionary<string, bool> pagesToBlock) => Task.CompletedTask;

        public virtual IDictionary<string, HashSet<string>> GetAvailableFieldIds(byte pageNumber) =>
            RrIdSuggestionsReader.GetAvailableFieldIds(typeof(TModel), ModuleContext.ReportTypeName, pageNumber);

        public virtual IEnumerable<string> GetAvailableFindingTypes() => FindingTypeSuggestionsReader.GetAvailableFindingTypes(FindingTypes);
        
        public async Task AddPageInstance(object pageInstance)
        {
            await AddAsync((TModel)pageInstance);
        }

        public Type PageType => typeof(TModel);

        private async Task VerifyReportSession(Guid reportId)
        {
            var reportSessionResult = await ReportService.VerifyReportSession(reportId);
            switch (reportSessionResult)
            {
                case ReportSessionResult.NoSessionExists:
                    // TODO uncomment when problems fixed
                    // throw new MissingReportSessionException();
                    return;
                case ReportSessionResult.ReportLocked:
                    throw new ReportLockedException();
                case ReportSessionResult.SessionOwner:
                case ReportSessionResult.ReportSessionExcluded:
                    return;
                default:
                    throw new ArgumentOutOfRangeException(nameof(reportSessionResult));
            }
        }
    }
}
