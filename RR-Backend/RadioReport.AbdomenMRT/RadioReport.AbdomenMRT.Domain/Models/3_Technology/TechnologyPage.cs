using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;
using CMReinforcedType = RadioReport.Common.Module.Logic.Enums.Technology.CMReinforcedType;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtTechnology;

        #region CM Side Effect
        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous => CMReinforcedType == CMReinforcedType.Yes;
        #endregion

        #region Sequence
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        // Oral tab
        [RadioReportId("abd_m_030510")]
        public bool IsEnteroclysis { get; set; }

        [RadioReportId("abd_m_030511")]
        public bool IsOralContrast { get; set; }

        [RadioReportId("abd_m_030512")]
        public bool IsMaskingOrLiquidMatrix { get; set; }

        // Other tab
        [RadioReportId("abd_m_030515")]
        public bool IsRectalContrast { get; set; }

        [RadioReportId("abd_m_030516")]
        public bool IsVaginalContrast { get; set; }

        [RadioReportId("abd_m_030517")]
        public bool IsUrinaryBladderContrast { get; set; }

        [RadioReportId("abd_m_030514")]
        public SpasmolysisType SpasmolysisType { get; set; }

        // Pulsation/respiration
        [RadioReportId("uni_x_030511")]
        public bool IsPulsationOrBreathing { get; set; }

        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }

        [RadioReportId("uni_y_030503")]
        public bool IsChemicalShift { get; set; }

        // Failed subtraction
        [RadioReportId("uni_x_030520")]
        public bool IsIncorrectSubtraction { get; set; }

        [RadioReportId("uni_x_030524")]
        public ImageQualityType ImageQualityType { get; set; }
        #endregion
    }
}
