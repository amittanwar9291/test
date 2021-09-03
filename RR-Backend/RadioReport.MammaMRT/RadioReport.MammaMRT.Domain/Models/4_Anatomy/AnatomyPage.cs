using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/Anatomy")]
    public class AnatomyPage : PageModelBase<AnatomyPage>
    {
        [RadioReportId("mam_m_040103")]
        public Volume Volume { get; set; }

        [RadioReportId("mam_m_040107")]
        public BreastLocations VolumeLocation { get; set; }

        public CutisThickness CutisThickness { get; set; }

        [RadioReportId("mam_m_040204")]
        public BreastLocations CutisThicknessLocation { get; set; }

        public CutisRetraction CutisRetraction { get; set; }

        [RadioReportId("mam_m_040304")]
        public BreastLocations CutisRetractionLocation { get; set; }

        public SubcutaneousTissueType SubcutaneousTissueType { get; set; }

        [RadioReportId("mam_m_040404")]
        public BreastLocations SubcutaneousFatSpaceLocation { get; set; }

        public PectoralisMuscle PectoralisMuscle { get; set; }

        [RadioReportId("mam_m_040505")]
        public BreastLocations PectoralisMuscleLocation { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtAnatomy;
    }
}
