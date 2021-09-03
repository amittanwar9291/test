using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SacroiliacJointFinding : SacroiliacJointFindingBase
    {
        #region Common

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("spi_m_090203")]
        public PelvisLocations PelvisLocation { get; set; }

        [RadioReportId("spi_m_090503")]
        public SacroiliacJointDiagnosisType IDescribeDifferentialDiagnosis01 { get; set; }

        [RadioReportId("spi_m_090505")]
        public SacroiliacJointDiagnosisType DifferentialDiagnosis02 { get; set; }

        [RadioReportId("spi_m_090506")]
        public bool IsSecondary { get; set; }

        #endregion

        #region Inflammation

        [RadioReportId("spi_m_090409", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public bool IsSPARCCScore { get; set; }

        [RadioReportId("spi_m_0904100-1-l", InstanceName = nameof(Score1), IsExportable = false)]
        public Score Score1 { get; set; }

        [RadioReportId("spi_m_0904100-2-l", InstanceName = nameof(Score2), IsExportable = false)]
        public Score Score2 { get; set; }

        [RadioReportId("spi_m_0904100-3-l", InstanceName = nameof(Score3), IsExportable = false)]
        public Score Score3 { get; set; }

        [RadioReportId("spi_m_0904100-4-l", InstanceName = nameof(Score4), IsExportable = false)]
        public Score Score4 { get; set; }

        [RadioReportId("spi_m_0904100-5-l", InstanceName = nameof(Score5), IsExportable = false)]
        public Score Score5 { get; set; }

        [RadioReportId("spi_m_0904100-6-l", InstanceName = nameof(Score6), IsExportable = false)]
        public Score Score6 { get; set; }

        [RadioReportId("spi_m_0904102", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public int? SPARCCScore { get; set; }

        [RadioReportId("spi_m_0904202", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        public int? MaximumExpansion { get; set; }

        #endregion
    }
}
