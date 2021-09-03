using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        #region CM Reinforced
        [RadioReportId("uni_x_030218")]
        public bool IsAutomatedCAInjection { get; set; }

        // Computerized analysis of dynamic contrast enhanced MRI
        [RadioReportId("uni_x_030217")]
        public bool IsComputerAidedAnalysisOfCADynamics { get; set; }
        #endregion

        #region Sequence
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        // Pulsation/respiration
        [RadioReportId("uni_x_030511")]
        public bool IsPulsationOrBreathing { get; set; }

        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }

        // Failed subtraction
        [RadioReportId("uni_x_030520")]
        public bool IsIncorrectSubtraction { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtTechnology;
        #endregion
    }
}
