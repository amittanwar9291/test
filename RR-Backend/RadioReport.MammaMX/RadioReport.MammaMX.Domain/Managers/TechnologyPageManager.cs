using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using System.Threading.Tasks;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class TechnologyPageManager : PageManagerBase<TechnologyPage, ITechnologyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMxTechnology;

        protected override List<Type> FindingTypes => new List<Type>() { typeof(TechnologyFindingType) };

        private IPageManager<MammographyParenchymaAnatomyPage> _mammographyParenchymaAnatomyPageManager;

        private IPageManager<MammographyFindingPage> _mammographyFindingPageManager;

        private IPageManager<UltrasoundMammaryGlandsPage> _ultrasoundMammaryGlandsPageManager;

        private IPageManager<UltrasoundFindingPage> _ultrasoundFindingPageManager;

        public TechnologyPageManager(
            ITechnologyPageRepository repository,
            IReportManager reportManager,
            IReportService reportService,
            IKafkaProducer kafkaProducer,
            IPageManager<MammographyParenchymaAnatomyPage> mammographyParenchymaAnatomyPageManager,
            IPageManager<MammographyFindingPage> mammographyFindingPageManager,
            IPageManager<UltrasoundMammaryGlandsPage> ultrasoundMammaryGlandsPageManager,
            IPageManager<UltrasoundFindingPage> ultrasoundFindingPageManager,
            HttpAuthContext httpAuthContext,
            ModuleContext moduleContext
        ) : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
            _mammographyParenchymaAnatomyPageManager = mammographyParenchymaAnatomyPageManager;
            _mammographyFindingPageManager = mammographyFindingPageManager;
            _ultrasoundMammaryGlandsPageManager = ultrasoundMammaryGlandsPageManager;
            _ultrasoundFindingPageManager = ultrasoundFindingPageManager;
        }

        protected override async Task RemoveBlockedPages(Guid reportId, Dictionary<string, bool> pagesToBlock)
        {
            if (pagesToBlock == null) throw new ArgumentNullException(nameof(pagesToBlock));

            if (pagesToBlock.ContainsKey(PageTypeNames.MammaMxMammographyParenchymaAnatomy) && pagesToBlock[PageTypeNames.MammaMxMammographyParenchymaAnatomy])
            {
                await _mammographyParenchymaAnatomyPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.MammaMxMammographyFinding) && pagesToBlock[PageTypeNames.MammaMxMammographyFinding])
            {
                await _mammographyFindingPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.MammaMxUltrasoundMammaryGlands) && pagesToBlock[PageTypeNames.MammaMxUltrasoundMammaryGlands])
            {
                await _ultrasoundMammaryGlandsPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.MammaMxUltrasoundFinding) && pagesToBlock[PageTypeNames.MammaMxUltrasoundFinding])
            {
                await _ultrasoundFindingPageManager.RemoveByReportIdAsync(reportId);
            }
        }

        public override async Task<Dictionary<string, bool>> GetPagesToBlock(TechnologyPage newModel)
        {
            if (newModel == null) throw new ArgumentNullException(nameof(newModel));

            var pagesToBlock = new Dictionary<string, bool>();

            if (newModel.Id == Guid.Empty)
            {
                pagesToBlock.Add(PageTypeNames.MammaMxMammographyParenchymaAnatomy, !newModel.IsMammography);
                pagesToBlock.Add(PageTypeNames.MammaMxMammographyFinding, !newModel.IsMammography);
                pagesToBlock.Add(PageTypeNames.MammaMxUltrasoundMammaryGlands, !newModel.IsUltrasound);
                pagesToBlock.Add(PageTypeNames.MammaMxUltrasoundFinding, !newModel.IsUltrasound);
            }
            else
            {
                var oldModel = await base.GetAsNoTrackingAsync(newModel.Id);

                if (oldModel.IsMammography != newModel.IsMammography)
                {
                    pagesToBlock.Add(PageTypeNames.MammaMxMammographyParenchymaAnatomy, !newModel.IsMammography);
                    pagesToBlock.Add(PageTypeNames.MammaMxMammographyFinding, !newModel.IsMammography);
                }

                if (oldModel.IsUltrasound != newModel.IsUltrasound)
                {
                    pagesToBlock.Add(PageTypeNames.MammaMxUltrasoundMammaryGlands, !newModel.IsUltrasound);
                    pagesToBlock.Add(PageTypeNames.MammaMxUltrasoundFinding, !newModel.IsUltrasound);
                }
            }

            return pagesToBlock;
        }
    }
}
