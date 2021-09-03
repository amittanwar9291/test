using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum ValuationOfFractureType : byte
    {
        None = 0,
        
        [RadioReportId("spi_m_060430", InstanceName = nameof(BonesFindingType.Fracture))]
        CompressionInjury = 1,

        [RadioReportId("spi_m_060431", InstanceName = nameof(BonesFindingType.Fracture))]
        TensionBandInjury = 2,

        [RadioReportId("spi_m_060432", InstanceName = nameof(BonesFindingType.Fracture))]
        DisplacementTranslationalInjury = 3,

        [RadioReportId("spi_m_060434", InstanceName = nameof(BonesFindingType.Fracture))]
        MildFractureGrade1 = 4,

        [RadioReportId("spi_m_060435", InstanceName = nameof(BonesFindingType.Fracture))]
        ModerateFractureGrade2 = 5,

        [RadioReportId("spi_m_060436", InstanceName = nameof(BonesFindingType.Fracture))]
        SevereFractureGrade3 = 6
    }
}