using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.FeetMRT.Technology.Domain.Models.Technology;

namespace RadioReport.FeetMRT.Domain.Models.Technology {
    [GeneratedControllerPageModel("FeetMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        #region CM Reinforced
        [RadioReportId("uni_y_030202")]
        public bool IsIntravenous { get; set; }

        [RadioReportId("uni_y_030203")]
        public bool IsIndirectArthrography { get; set; }

        [RadioReportId("uni_y_030204")]
        public bool IsIntraarticular { get; set; }

        [RadioReportId("uni_y_030207")]
        public int? DilutionAmount { get; set; }
        #endregion

        #region Sequence
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        [RadioReportId("uni_y_030501")]
        public bool IsMagicAngleArtifact { get; set; }

        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }
        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.FeetMrtTechnology;
    }
}
