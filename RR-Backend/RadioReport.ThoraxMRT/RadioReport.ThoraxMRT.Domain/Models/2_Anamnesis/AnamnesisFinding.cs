using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class AnamnesisFinding : FindingBase
    {
        public override string InstanceName => AnamnesisFindingType.ToString();

        [RadioReportId("tho_m_020303")]
        public AnamnesisFindingType AnamnesisFindingType { get; set; }

        #region NicotineAbuse

        [RadioReportId("tho_m_020403", InstanceName = nameof(AnamnesisFindingType.NicotineAbuse))]
        public int? CigarettePacksPerDay { get; set; }

        #endregion

        #region Stent

        [RadioReportId("tho_m_020408", InstanceName = nameof(AnamnesisFindingType.Stent))]
        public bool IsAorticValveTavi { get; set; }

        [RadioReportId("tho_m_020409", InstanceName = nameof(AnamnesisFindingType.Stent))]
        public bool IsCoronary { get; set; }

        [RadioReportId("tho_m_020410", InstanceName = nameof(AnamnesisFindingType.Stent))]
        public bool IsThoracicAortaTevar { get; set; }

        #endregion

        #region TrachealTubeMalposition

        public AnamnesisSideType SideType { get; set; }

        #endregion

        #region HistoryOfPartialLungResection

        [RadioReportId("tho_m_020417", InstanceName = nameof(AnamnesisFindingType.HistoryOfPartialLungResection))]
        public bool IsAfterPartialLungResectionRight { get; set; }

        [RadioReportId("tho_m_020418", InstanceName = nameof(AnamnesisFindingType.HistoryOfPartialLungResection))]
        public bool IsAfterPartialLungResectionLeft { get; set; }

        #endregion
    }
}
