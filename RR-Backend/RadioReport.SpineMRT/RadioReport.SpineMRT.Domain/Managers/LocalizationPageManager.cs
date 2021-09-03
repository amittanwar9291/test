using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Localization;

namespace RadioReport.SpineMRT.Domain.Managers
{
    public class LocalizationPageManager : PageManagerBase<LocalizationPage, ILocalizationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineMrtLocalization;

        private readonly IPageManager<SacroiliacJointPage> _sacroiliacJointPageManager;

        public LocalizationPageManager(ILocalizationPageRepository repository, IReportManager reportManager, IReportService reportService, IPageManager<SacroiliacJointPage> sacroiliacJointPageManager,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
            _sacroiliacJointPageManager = sacroiliacJointPageManager;
        }

        protected override async Task RemoveBlockedPages(Guid reportId, Dictionary<string, bool> pagesToBlock)
        {
            if (pagesToBlock == null) throw new ArgumentNullException(nameof(pagesToBlock));

            if (pagesToBlock.ContainsKey(PageTypeNames.SpineMrtSacroiliacJoint) && pagesToBlock[PageTypeNames.SpineMrtSacroiliacJoint])
            {
                await _sacroiliacJointPageManager.RemoveByReportIdAsync(reportId);
            }
        }

        public override async Task<Dictionary<string, bool>> GetPagesToBlock(LocalizationPage newModel)
        {
            if (newModel == null) throw new ArgumentNullException(nameof(newModel));

            var pagesToBlock = new Dictionary<string, bool>();

            if (newModel.Id == Guid.Empty)
            {
                pagesToBlock.Add(PageTypeNames.SpineMrtSacroiliacJoint, ShouldSacroiliacJointPageBeBlocked(newModel));
            }
            else
            {
                var oldModel = await base.GetAsNoTrackingAsync(newModel.Id);

                if (oldModel.ScanAreaType != newModel.ScanAreaType ||
                    oldModel.SpineLocation.HasFlag(SpineLocations.OsSacrum) != newModel.SpineLocation.HasFlag(SpineLocations.OsSacrum))
                {
                    pagesToBlock.Add(PageTypeNames.SpineMrtSacroiliacJoint, ShouldSacroiliacJointPageBeBlocked(newModel));
                }
            }

            return pagesToBlock;
        }

        private static bool ShouldSacroiliacJointPageBeBlocked(LocalizationPage model)
        {
            return !(model.ScanAreaType == ScanAreaType.DedicatedSIJScan ||
                     model.ScanAreaType == ScanAreaType.Spine && model.SpineLocation.HasFlag(SpineLocations.OsSacrum));
        }
    }
}
