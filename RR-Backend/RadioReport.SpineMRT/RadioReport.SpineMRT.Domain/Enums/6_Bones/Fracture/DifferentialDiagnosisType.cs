using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060519", InstanceName = nameof(BonesFindingType.Fracture))]
        HeightLoss = 1,

        [RadioReportId("spi_m_060520", InstanceName = nameof(BonesFindingType.Fracture))]
        MorbusScheuermann = 2,

        [RadioReportId("spi_m_060521", InstanceName = nameof(BonesFindingType.Fracture))]
        VertebraRemodelling = 3,

        [RadioReportId("spi_m_060522", InstanceName = nameof(BonesFindingType.Fracture))]
        StructuralDisturbance = 4,

        [RadioReportId("spi_m_060524", InstanceName = nameof(BonesFindingType.Fracture))]
        BoneMarrowBait = 5
    }
}
