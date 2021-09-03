using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Enums;
using RadioReport.MammaMX.Domain.Enums.UltrasoundMammaryGlands;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/UltrasoundMammaryGlands")]
    public class UltrasoundMammaryGlandsPage : PageModelBase<UltrasoundMammaryGlandsPage>
    {
        public override string PageTypeName => PageTypeNames.MammaMxUltrasoundMammaryGlands;

        public CutisType CutisType { get; set; }

        [RadioReportId("mam_mx_060107")]
        public BreastLocations CutisLocation { get; set; }

        [RadioReportId("mam_mx_060203")]
        public bool IsRightNipple { get; set; }

        [RadioReportId("mam_mx_060204")]
        public bool IsLeftNipple { get; set; }

        public CutisRetractionPresence CutisRetractionPresence { get;set;}

        [RadioReportId("mam_mx_060209")]
        public Locations RetractionLocation { get; set; }

        public SubcutaneousFatTissueType SubcutaneousFatTissueType { get; set; }
        
        [RadioReportId("mam_mx_060305")]
        public BreastLocations SubcutaneousFatTissueLocation { get; set; }

        public MPectoralisType MPectoralisType { get; set; }

        [RadioReportId("mam_mx_060405")]
        public BreastLocations MPectoralisLocation { get; set; }

        public ParenchymaDensityType ParenchymaDensityType { get; set; }
    }
}
