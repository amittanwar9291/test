using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class AnamnesisFinding : FindingBase
    {
        #region Common

        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_c_020303")]
        public AnamnesisFindingType FindingType { get; set; }

        #endregion

        #region NicotineAbuse

        [RadioReportId("tho_c_020403", InstanceName = nameof(AnamnesisFindingType.NicotineAbuse))]
        public int? PackYears { get; set; }

        #endregion

        #region StatusPostPartialLungResection

        [RadioReportId("tho_c_020409", InstanceName = nameof(AnamnesisFindingType.StatusPostPartialLungResection))]
        public bool IsAfterPartialLungResectionRight { get; set; }

        [RadioReportId("tho_c_020410", InstanceName = nameof(AnamnesisFindingType.StatusPostPartialLungResection))]
        public bool IsAfterPartialLungResectionLeft { get; set; }

        #endregion

        #region Stentgraft

        [RadioReportId("tho_c_020412", InstanceName = nameof(AnamnesisFindingType.Stentgraft))]
        public bool IsAorticValveTAVI { get; set; }

        [RadioReportId("tho_c_020413", InstanceName = nameof(AnamnesisFindingType.Stentgraft))]
        public bool IsCoronary { get; set; }

        [RadioReportId("tho_c_020414", InstanceName = nameof(AnamnesisFindingType.Stentgraft))]
        public bool IsThoracicAortaTEVAR { get; set; }

        #endregion
    }
}
