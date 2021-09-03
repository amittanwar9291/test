using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.HeadMRT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using CMReinforcedType = RadioReport.Common.Module.Logic.Enums.Technology.CMReinforcedType;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        #region CMSideEffect
        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous => CMReinforcedType == CMReinforcedType.Yes;
        #endregion

        #region Sequence
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        [RadioReportId("hea_m_030501")]
        public bool IsFlowArtifacts { get; set; }

        [RadioReportId("hea_m_030502")]
        public bool IsTimingInadequate { get; set; }

        [RadioReportId("uni_x_030520")]
        public bool IsFailedSubtraction { get; set; }

        [RadioReportId("hea_m_030503")]
        public bool IsAliasing { get; set; }

        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }

        [RadioReportId("uni_x_030524")]
        public ImageQualityType ImageQualityType { get; set; }
        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtTechnology;
    }
}
