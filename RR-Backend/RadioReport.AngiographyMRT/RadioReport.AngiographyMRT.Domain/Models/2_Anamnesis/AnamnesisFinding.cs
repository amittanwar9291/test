using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.AngiographyMRT.Domain.Enums.Anamnesis;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class AnamnesisFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_m_020105")]
        public AnamnesisFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("ang_m_020222")]
        public bool IsSuspiciousFor { get; set; }

        #endregion

        #region PeripheralArteryDiseasePAD

        public StadiumAccordingToFontaineType StadiumAccordingToFontaineType { get; set; }

        #endregion

        #region Aneurysm

        [RadioReportId("ang_m_020208", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsIntracranial { get; set; }

        [RadioReportId("ang_m_020209", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsCervical { get; set; }

        [RadioReportId("ang_m_020225", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsCervicalRight { get; set; }

        [RadioReportId("ang_m_020226", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsCervicalLeft { get; set; }

        [RadioReportId("ang_m_020227", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsUpperLimb { get; set; }

        [RadioReportId("ang_m_020228", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsUpperLimbRight { get; set; }

        [RadioReportId("ang_m_020229", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsUpperLimbLeft { get; set; }

        [RadioReportId("ang_m_020230", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsChest { get; set; }

        [RadioReportId("ang_m_020231", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsAbdomen { get; set; }

        [RadioReportId("ang_m_020232", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsLowerLimb { get; set; }

        [RadioReportId("ang_m_020233", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsLowerLimbRight { get; set; }

        [RadioReportId("ang_m_020234", InstanceName = nameof(AnamnesisFindingType.Aneurysm))]
        public bool IsLowerLimbLeft { get; set; }

        #endregion

        #region RiskFactors

        [RadioReportId("ang_m_020213", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsArterialHypertension { get; set; }

        [RadioReportId("ang_m_020214", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsDiabetesMellitus { get; set; }

        [RadioReportId("ang_m_020215", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsSmoking { get; set; }

        [RadioReportId("ang_m_020216", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsHyperlipidemia { get; set; }

        [RadioReportId("ang_m_020217", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsCollagenosis { get; set; }

        [RadioReportId("ang_m_020218", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsBicuspidAorticValve { get; set; }

        [RadioReportId("ang_m_020219", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsKnownLiverCirrhosis { get; set; }

        [RadioReportId("ang_m_020220", InstanceName = nameof(AnamnesisFindingType.RiskFactors))]
        public bool IsCocaine { get; set; }

        #endregion
    }
}
