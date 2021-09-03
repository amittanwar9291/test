using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using RadioReport.AngiographyCT.Domain.Enums.Localization;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class LocalizationPageManager : PageManagerBase<LocalizationPage, ILocalizationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtLocalization;

        private readonly IPageManager<CoronaryArteriesPage> _coronaryArteriesPageManager;

        private readonly IPageManager<SupraaorticVesselsPage> _supraaorticVesselsPageManager;

        private readonly IPageManager<UpperArteriesPage> _upperArteriesPageManager;

        private readonly IPageManager<AortaPage> _aortaPageManager;

        private readonly IPageManager<AbdomenPage> _abdomenPageManager;

        private readonly IPageManager<PelvisLegArteriesPage> _pelvisLegArteriesPageManager;

        public LocalizationPageManager(ILocalizationPageRepository repository, IReportManager reportManager, 
            IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext, 
            IPageManager<CoronaryArteriesPage> coronaryArteriesPageManager, IPageManager<SupraaorticVesselsPage> supraaorticVesselsPageManager,
            IPageManager<UpperArteriesPage> upperArteriesPageManager, IPageManager<AortaPage> aortaPageManager,
            IPageManager<AbdomenPage> abdomenPageManager, IPageManager<PelvisLegArteriesPage> pelvisLegArteriesPageManager) 
            : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
            _coronaryArteriesPageManager = coronaryArteriesPageManager;
            _supraaorticVesselsPageManager = supraaorticVesselsPageManager;
            _upperArteriesPageManager = upperArteriesPageManager;
            _aortaPageManager = aortaPageManager;
            _abdomenPageManager = abdomenPageManager;
            _pelvisLegArteriesPageManager = pelvisLegArteriesPageManager;
        }

        protected override async Task RemoveBlockedPages(Guid reportId, Dictionary<string, bool> pagesToBlock)
        {
            if (pagesToBlock == null) throw new ArgumentNullException(nameof(pagesToBlock));

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyCtCoronaryArteries) && pagesToBlock[PageTypeNames.AngiographyCtCoronaryArteries])
            {
                await _coronaryArteriesPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyCtSupraaorticVessels) && pagesToBlock[PageTypeNames.AngiographyCtSupraaorticVessels])
            {
                await _supraaorticVesselsPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyCtUpperArteries) && pagesToBlock[PageTypeNames.AngiographyCtUpperArteries])
            {
                await _upperArteriesPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyCtAorta) && pagesToBlock[PageTypeNames.AngiographyCtAorta])
            {
                await _aortaPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyCtAbdomen) && pagesToBlock[PageTypeNames.AngiographyCtAbdomen])
            {
                await _abdomenPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyCtPelvisLegArteries) && pagesToBlock[PageTypeNames.AngiographyCtPelvisLegArteries])
            {
                await _pelvisLegArteriesPageManager.RemoveByReportIdAsync(reportId);
            }
        }

        public override async Task<Dictionary<string, bool>> GetPagesToBlock(LocalizationPage newModel)
        {
            if (newModel == null) throw new ArgumentNullException(nameof(newModel));

            var pagesToBlock = new Dictionary<string, bool>();

            if (newModel.Id == Guid.Empty)
            {
                pagesToBlock.Add(PageTypeNames.AngiographyCtCoronaryArteries, !newModel.Localization.HasFlag(Locations.CoronaryArteries));
                pagesToBlock.Add(PageTypeNames.AngiographyCtSupraaorticVessels, !newModel.Localization.HasFlag(Locations.SupraaorticVessels));
                pagesToBlock.Add(PageTypeNames.AngiographyCtUpperArteries, 
                    !newModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) && !newModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb));
                pagesToBlock.Add(PageTypeNames.AngiographyCtAorta, !newModel.Localization.HasFlag(Locations.Aorta));
                pagesToBlock.Add(PageTypeNames.AngiographyCtAbdomen, !newModel.Localization.HasFlag(Locations.Abdomen));
                pagesToBlock.Add(PageTypeNames.AngiographyCtPelvisLegArteries, !newModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs));
            }
            else
            {
                var oldModel = await base.GetAsNoTrackingAsync(newModel.Id);

                if (oldModel.Localization.HasFlag(Locations.CoronaryArteries) != newModel.Localization.HasFlag(Locations.CoronaryArteries))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyCtCoronaryArteries, !newModel.Localization.HasFlag(Locations.CoronaryArteries));
                }

                if (oldModel.Localization.HasFlag(Locations.SupraaorticVessels) != newModel.Localization.HasFlag(Locations.SupraaorticVessels))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyCtSupraaorticVessels, !newModel.Localization.HasFlag(Locations.SupraaorticVessels));
                }

                if (oldModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) != newModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) ||
                    oldModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb) != newModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyCtUpperArteries,
                        !newModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) && !newModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb));
                }

                if (oldModel.Localization.HasFlag(Locations.Aorta) != newModel.Localization.HasFlag(Locations.Aorta))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyCtAorta, !newModel.Localization.HasFlag(Locations.Aorta));
                }

                if (oldModel.Localization.HasFlag(Locations.Abdomen) != newModel.Localization.HasFlag(Locations.Abdomen))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyCtAbdomen, !newModel.Localization.HasFlag(Locations.Abdomen));
                }

                if (oldModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs) != newModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyCtPelvisLegArteries, !newModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs));
                }
            }

            return pagesToBlock;
        }
    }
}
