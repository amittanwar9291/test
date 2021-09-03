using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Enums;
using RadioReport.MammaMX.Domain.Enums.MammographyParenchymaAnatomy;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/MammographyParenchymaAnatomy")]
    public class MammographyParenchymaAnatomyPage : PageModelBase<MammographyParenchymaAnatomyPage>
    {
        public override string PageTypeName => PageTypeNames.MammaMxMammographyParenchymaAnatomy;

        public VolumeType VolumeType { get; set; }

        [RadioReportId("mam_mx_040107")]
        public BreastLocations VolumeLocalization {get;set;}
        
        public SubcutaneousFattyTissueType SubcutaneousFattyTissueType { get; set; }

        [RadioReportId("mam_mx_040204")]
        public BreastLocations SubcutaneousAdiposeTissueLocalization { get; set; }

        [RadioReportId("mam_mx_040302", InstanceName = nameof(RightParenchymaDensityBreastCompositionType), IsExportable = false)]
        public ParenchymaDensityBreastCompositionType RightParenchymaDensityBreastCompositionType { get; set; }

        [RadioReportId("mam_mx_040401", InstanceName = nameof(LeftParenchymaDensityBreastCompositionType), IsExportable = false)]
        public ParenchymaDensityBreastCompositionType LeftParenchymaDensityBreastCompositionType { get; set; }

        public PectoralisMuscleType PectoralisMuscleType { get; set; }

        [RadioReportId("mam_mx_040505")]
        public BreastLocations PectoralisMuscleLocalization { get; set; }
    }
}

