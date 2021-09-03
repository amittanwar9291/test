using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/Kidneys", nameof(KidneysFinding.NormVariantOrAnomalyImageFile), nameof(KidneysFinding.ObstructiveNephropathyChar1ImageFile),
        nameof(KidneysFinding.ObstructiveNephropathyChar2ImageFile), nameof(KidneysFinding.MassImageFile), nameof(KidneysFinding.DecreasedRenalVolumeImageFile), nameof(KidneysFinding.IncreasedRenalVolumeImageFile), nameof(KidneysFinding.VascularNephropathyImageFile))]
    public class KidneysPage : PageModelBase<KidneysPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtKidneys;

        [RadioReportId("abd_m_070103-l", InstanceName = nameof(InstanceNames.Kidneys), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<KidneysFinding> Findings { get; set; }
    }
}
