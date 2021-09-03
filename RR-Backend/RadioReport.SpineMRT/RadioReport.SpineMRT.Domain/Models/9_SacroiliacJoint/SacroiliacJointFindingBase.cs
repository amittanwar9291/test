using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.Common.Logic.Models;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SacroiliacJointFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_m_090107")]
        public SacroiliacJointFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_m_090303")]
        public SacroiliacJointDiagnosisType IKnowDifferentialDiagnosis01 { get; set; }

        #endregion

        #region Degeneration

        [RadioReportId("spi_m_090305", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsBoneBridges { get; set; }

        [RadioReportId("spi_m_090307", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsAnkylosis { get; set; }

        [RadioReportId("spi_m_090311", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsOsteophytes { get; set; }

        public JointSurfaceSubType JointSurfaceSubType { get; set; }

        [RadioReportId("spi_m_090313", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsErosions { get; set; }

        [RadioReportId("spi_m_090314", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsSurfaceNarrowing { get; set; }

        [RadioReportId("spi_m_090315", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsVacuumPhenomenon { get; set; }

        [RadioReportId("spi_m_090402", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsSubchondralCysts { get; set; }

        [RadioReportId("spi_m_090403", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsSubchondralSclerosis { get; set; }

        public SclerosisType SclerosisType { get; set; }

        [RadioReportId("spi_m_090406", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        public bool IsFatDeposition { get; set; }

        #endregion

        #region Inflammation

        [RadioReportId("spi_m_090317", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsEnthesitis { get; set; }

        public SacroiliacJointEntheitisType EntheitisType { get; set; }

        [RadioReportId("spi_m_090320", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsSynovitis { get; set; }

        [RadioReportId("spi_m_090321", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsCmEnhancement { get; set; }

        [RadioReportId("spi_m_090322", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsJointSpaceWidening { get; set; }

        [RadioReportId("spi_m_090323", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsJointEffusion { get; set; }

        [RadioReportId("spi_m_090408", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsBoneMarrow { get; set; }

        [RadioReportId("spi_m_090416", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsAbscess { get; set; }

        [RadioReportId("spi_m_090417", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsSoftTissue { get; set; }

        #endregion
    }
}
