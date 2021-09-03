using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050245", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane))]
        [RadioReportId("spi_m_050270", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(PathologyType.RheumatoidArthritis) + nameof(PathologyType.RheumatoidDisease))]
        [RadioReportId("spi_m_0503502", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType2), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane))]
        [RadioReportId("spi_m_0503508", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType2), CustomConditionName = nameof(PathologyType.RheumatoidArthritis) + nameof(PathologyType.RheumatoidDisease))]
        PsoriaticArthritis = 1,

        [RadioReportId("spi_m_050246", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType1))]
        [RadioReportId("spi_m_0503503", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType2))]
        ReactiveArthritis = 2,

        [RadioReportId("spi_m_050247", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType1))]
        [RadioReportId("spi_m_0503504", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType2))]
        UndifferentiatedSpondylarthropathy = 3,

        [RadioReportId("spi_m_050248", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType1))]
        [RadioReportId("spi_m_0503505", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType2))]
        RheumatoidArthritis = 4,

        [RadioReportId("spi_m_050251", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType1))]
        [RadioReportId("spi_m_0503507", InstanceName = nameof(DiscFinding.DifferentialDiagnosisType2))]
        AnkylosingSpondylitis = 5
    }
}
