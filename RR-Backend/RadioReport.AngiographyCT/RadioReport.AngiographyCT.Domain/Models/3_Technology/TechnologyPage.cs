using RadioReport.AngiographyCT.Domain.Enums.Technology;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/Technology")]
    public class TechnologyPage : TechnologyCTPageBase<CMSideEffect, Acquisition, Reconstruction, TechnologyPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtTechnology;

        #region CMReinforced
        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous => CMReinforcedType == CMReinforcedType.Yes;
        #endregion

        #region Sequences
        [RadioReportId("ang_c_030502")]
        public bool IsBetaBlocker { get; set; }

        [RadioReportId("ang_c_030503")]
        public bool IsNitroglycerin { get; set; }
        
        [RadioReportId("uni_x_030524")]
        public ImageQualityType ImageQualityType { get; set; }
        #endregion
    }
}
