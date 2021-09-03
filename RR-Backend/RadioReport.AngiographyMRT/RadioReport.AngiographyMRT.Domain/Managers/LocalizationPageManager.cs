using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RadioReport.AngiographyMRT.Domain.Enums.Localization;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class LocalizationPageManager : PageManagerBase<LocalizationPage, ILocalizationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyMrtLocalization;

        private readonly IPageManager<AbdomenPage> _abdomenPageManager;

        private readonly IPageManager<AortaPage> _aortaPageManager;

        private readonly IPageManager<SupraaorticVesselsPage> _supraaorticVesselsPageManager;

        private readonly IPageManager<UpperArteriesPage> _upperArteriesPageManager;

        private readonly IPageManager<PelvisLegArteriesPage> _pelvisLegArteriesPageManager;

        public LocalizationPageManager(ILocalizationPageRepository repository,
            IReportManager reportManager, IReportService reportService, IConfiguration configuration,
            IPageManager<AbdomenPage> abdomenPageManager, IPageManager<AortaPage> aortaPageManager,
            IPageManager<SupraaorticVesselsPage> supraaorticVesselsPageManager, IPageManager<UpperArteriesPage> upperArteriesPageManager,
            IPageManager<PelvisLegArteriesPage> pelvisLegArteriesPageManager, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext,
            ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
            _abdomenPageManager = abdomenPageManager;
            _aortaPageManager = aortaPageManager;
            _supraaorticVesselsPageManager = supraaorticVesselsPageManager;
            _upperArteriesPageManager = upperArteriesPageManager;
            _pelvisLegArteriesPageManager = pelvisLegArteriesPageManager;
        }

        protected override async Task RemoveBlockedPages(Guid reportId, Dictionary<string, bool> pagesToBlock)
        {
            if (pagesToBlock == null) throw new ArgumentNullException(nameof(pagesToBlock));

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyMrtAbdomen) && pagesToBlock[PageTypeNames.AngiographyMrtAbdomen])
            {
                await _abdomenPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyMrtAorta) && pagesToBlock[PageTypeNames.AngiographyMrtAorta])
            {
                await _aortaPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyMrtSupraaorticVessels) && pagesToBlock[PageTypeNames.AngiographyMrtSupraaorticVessels])
            {
                await _supraaorticVesselsPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyMrtUpperArteries) && pagesToBlock[PageTypeNames.AngiographyMrtUpperArteries])
            {
                await _upperArteriesPageManager.RemoveByReportIdAsync(reportId);
            }

            if (pagesToBlock.ContainsKey(PageTypeNames.AngiographyMrtPelvisLegArteries) && pagesToBlock[PageTypeNames.AngiographyMrtPelvisLegArteries])
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
                pagesToBlock.Add(PageTypeNames.AngiographyMrtAbdomen, !newModel.Localization.HasFlag(Locations.Abdomen));
                pagesToBlock.Add(PageTypeNames.AngiographyMrtAorta, !newModel.Localization.HasFlag(Locations.Aorta));
                pagesToBlock.Add(PageTypeNames.AngiographyMrtSupraaorticVessels, !newModel.Localization.HasFlag(Locations.SupraaorticVessels));
                pagesToBlock.Add(PageTypeNames.AngiographyMrtUpperArteries,
                    !newModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) &&
                    !newModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb));
                pagesToBlock.Add(PageTypeNames.AngiographyMrtPelvisLegArteries, !newModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs));
            }
            else
            {
                var oldModel = await base.GetAsNoTrackingAsync(newModel.Id);

                if (oldModel.Localization.HasFlag(Locations.Abdomen) != newModel.Localization.HasFlag(Locations.Abdomen))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyMrtAbdomen, !newModel.Localization.HasFlag(Locations.Abdomen));
                }

                if (oldModel.Localization.HasFlag(Locations.Aorta) != newModel.Localization.HasFlag(Locations.Aorta))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyMrtAorta, !newModel.Localization.HasFlag(Locations.Aorta));
                }

                if (oldModel.Localization.HasFlag(Locations.SupraaorticVessels) != newModel.Localization.HasFlag(Locations.SupraaorticVessels))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyMrtSupraaorticVessels, !newModel.Localization.HasFlag(Locations.SupraaorticVessels));
                }

                if (oldModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) !=
                    newModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) ||
                    oldModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb) != newModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyMrtUpperArteries,
                        !newModel.Localization.HasFlag(Locations.ArteriesOfTheRightUpperLimb) &&
                        !newModel.Localization.HasFlag(Locations.ArteriesOfTheLeftUpperLimb));
                }

                if (oldModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs) !=
                    newModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs))
                {
                    pagesToBlock.Add(PageTypeNames.AngiographyMrtPelvisLegArteries, !newModel.Localization.HasFlag(Locations.ArteriesOfPelvisAndLowerLimbs));
                }
            }

            return pagesToBlock;
        }
    }
}
