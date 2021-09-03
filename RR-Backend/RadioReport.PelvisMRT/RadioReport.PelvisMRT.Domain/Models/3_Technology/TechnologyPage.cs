using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.PelvisMRT.Domain.Enums.Technology;
using CMReinforcedType = RadioReport.Common.Module.Logic.Enums.Technology.CMReinforcedType;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        #region CM Side Effect
        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous => CMReinforcedType == CMReinforcedType.Yes;
        #endregion

        #region Sequence
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        public PositionType PositionType { get; set; }

        [RadioReportId("pel_m_030502")]
        public bool IsSpasmolysis { get; set; }

        public SpasmolysisType SpasmolysisType { get; set; }

        [RadioReportId("pel_m_030510")]
        public bool IsOralContrast { get; set; }

        [RadioReportId("pel_m_030505")]
        public bool IsVaginalContrast { get; set; }

        [RadioReportId("pel_m_030506")]
        public bool IsRectalContrast { get; set; }

        [RadioReportId("uni_x_030511")]
        public bool IsPulsationOrBreathing { get; set; }

        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }

        [RadioReportId("uni_y_030503")]
        public bool IsChemicalShift { get; set; }

        [RadioReportId("uni_x_030520")]
        public bool IsIncorrectSubtraction { get; set; }
        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtTechnology;
    }
}
