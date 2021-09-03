using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.SpineMRT.Technology.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        #region Sequence
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        [RadioReportId("uni_x_030511")]
        public bool IsPulsationOrBreathing { get; set; }

        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }
        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtTechnology;
    }
}
