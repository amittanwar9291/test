using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.PelvisMRT.Domain.Enums;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class PreviousOperationFinding : FindingBase
    {
        #region Common
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_020311")]
        public PreviousOperationFindingType FindingType { get; set; }

        [RadioReportId("pel_m_020412")]
        public byte? Month { get; set; }

        [RadioReportId("pel_m_020413")]
        public int? Year { get; set; }

        [RadioReportId("pel_m_020416")]
        public bool IsRight { get; set; }

        [RadioReportId("pel_m_020418")]
        public bool IsLeft { get; set; }

        #endregion

        #region Vesiculectomy
        [RadioReportId("pel_m_020419", InstanceName = nameof(PreviousOperationFindingType.Vesiculectomy))]
        public bool IsLeftPartial { get; set; }

        [RadioReportId("pel_m_020417", InstanceName = nameof(PreviousOperationFindingType.Vesiculectomy))]
        public bool IsRightPartial { get; set; }
        #endregion

        #region Hysterectomy
        [RadioReportId("pel_m_020422", InstanceName = nameof(PreviousOperationFindingType.Hysterectomy))]
        public bool IsRadical { get; set; }
        #endregion

        #region Rectal resection
        public SugicalProceduresType SugicalProceduresType { get; set; }

        [RadioReportId("pel_m_020426", InstanceName = nameof(PreviousOperationFindingType.RectalResection))]
        public bool IsDeep { get; set; }

        [RadioReportId("pel_m_020429", InstanceName = nameof(PreviousOperationFindingType.RectalResection))]
        public bool IsAnusPraeter { get; set; }

        [RadioReportId("pel_m_020430", InstanceName = nameof(PreviousOperationFindingType.RectalResection))]
        public bool IsHartmannsRectalStump { get; set; }

        [RadioReportId("pel_m_020431", InstanceName = nameof(PreviousOperationFindingType.RectalResection))]
        public bool IsPouchReconstruction { get; set; }
        #endregion
    }
}
