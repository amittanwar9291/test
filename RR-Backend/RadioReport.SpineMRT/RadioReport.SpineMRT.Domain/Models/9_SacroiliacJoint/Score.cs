using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class Score : ModelBase
    {
        [RadioReportId("spi_m_0904109-1", InstanceName = nameof(SacroiliacJointFinding.Score1))]
        [RadioReportId("spi_m_0904109-2", InstanceName = nameof(SacroiliacJointFinding.Score2))]
        [RadioReportId("spi_m_0904109-3", InstanceName = nameof(SacroiliacJointFinding.Score3))]
        [RadioReportId("spi_m_0904109-4", InstanceName = nameof(SacroiliacJointFinding.Score4))]
        [RadioReportId("spi_m_0904109-5", InstanceName = nameof(SacroiliacJointFinding.Score5))]
        [RadioReportId("spi_m_0904109-6", InstanceName = nameof(SacroiliacJointFinding.Score6))]
        public ScoreLocations ScoreLocation { get; set; }

        [RadioReportId("spi_m_0904112-1", InstanceName = nameof(SacroiliacJointFinding.Score1))]
        [RadioReportId("spi_m_0904112-2", InstanceName = nameof(SacroiliacJointFinding.Score2))]
        [RadioReportId("spi_m_0904112-3", InstanceName = nameof(SacroiliacJointFinding.Score3))]
        [RadioReportId("spi_m_0904112-4", InstanceName = nameof(SacroiliacJointFinding.Score4))]
        [RadioReportId("spi_m_0904112-5", InstanceName = nameof(SacroiliacJointFinding.Score5))]
        [RadioReportId("spi_m_0904112-6", InstanceName = nameof(SacroiliacJointFinding.Score6))]
        public bool IsManifestationRight { get; set; }

        [RadioReportId("spi_m_0904113-1", InstanceName = nameof(SacroiliacJointFinding.Score1))]
        [RadioReportId("spi_m_0904113-2", InstanceName = nameof(SacroiliacJointFinding.Score2))]
        [RadioReportId("spi_m_0904113-3", InstanceName = nameof(SacroiliacJointFinding.Score3))]
        [RadioReportId("spi_m_0904113-4", InstanceName = nameof(SacroiliacJointFinding.Score4))]
        [RadioReportId("spi_m_0904113-5", InstanceName = nameof(SacroiliacJointFinding.Score5))]
        [RadioReportId("spi_m_0904113-6", InstanceName = nameof(SacroiliacJointFinding.Score6))]
        public bool IsManifestationLeft { get; set; }

        [RadioReportId("spi_m_0904116-1", InstanceName = nameof(SacroiliacJointFinding.Score1))]
        [RadioReportId("spi_m_0904116-2", InstanceName = nameof(SacroiliacJointFinding.Score2))]
        [RadioReportId("spi_m_0904116-3", InstanceName = nameof(SacroiliacJointFinding.Score3))]
        [RadioReportId("spi_m_0904116-4", InstanceName = nameof(SacroiliacJointFinding.Score4))]
        [RadioReportId("spi_m_0904116-5", InstanceName = nameof(SacroiliacJointFinding.Score5))]
        [RadioReportId("spi_m_0904116-6", InstanceName = nameof(SacroiliacJointFinding.Score6))]
        public bool IsSTIRRight { get; set; }

        [RadioReportId("spi_m_0904117-1", InstanceName = nameof(SacroiliacJointFinding.Score1))]
        [RadioReportId("spi_m_0904117-2", InstanceName = nameof(SacroiliacJointFinding.Score2))]
        [RadioReportId("spi_m_0904117-3", InstanceName = nameof(SacroiliacJointFinding.Score3))]
        [RadioReportId("spi_m_0904117-4", InstanceName = nameof(SacroiliacJointFinding.Score4))]
        [RadioReportId("spi_m_0904117-5", InstanceName = nameof(SacroiliacJointFinding.Score5))]
        [RadioReportId("spi_m_0904117-6", InstanceName = nameof(SacroiliacJointFinding.Score6))]
        public bool IsSTIRLeft { get; set; }
    }
}
