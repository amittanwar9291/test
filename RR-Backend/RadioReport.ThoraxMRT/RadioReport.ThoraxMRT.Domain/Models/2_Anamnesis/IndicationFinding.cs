using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class IndicationFinding : FindingBase
    {
        public override string InstanceName => IndicationFindingType.ToString();

        [RadioReportId("tho_m_020105")]
        public IndicationType IndicationFindingType { get; set; }

        #region common

        public DetailsType DetailsType { get; set; }

        #endregion

        #region Mass

        public ChestWallType ChestWallType { get; set; }

        #endregion

        #region Arthralgia

        [RadioReportId("tho_m_020213", InstanceName = nameof(IndicationType.Arthralgia))]
        public bool IsSternoclavicularJoint { get; set; }

        [RadioReportId("tho_m_020215", InstanceName = nameof(IndicationType.Arthralgia))]
        public bool IsRight { get; set; }

        [RadioReportId("tho_m_020216", InstanceName = nameof(IndicationType.Arthralgia))]
        public bool IsLeft { get; set; }

        #endregion

    }
}
