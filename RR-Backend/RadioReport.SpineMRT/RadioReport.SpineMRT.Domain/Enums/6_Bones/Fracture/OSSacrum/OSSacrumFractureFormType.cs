using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum OsSacrumFractureFormType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060440", InstanceName = nameof(BonesFindingType.Fracture))]
        CompressionOsSacrum = 1,

        [RadioReportId("spi_m_060441", InstanceName = nameof(BonesFindingType.Fracture))]
        TransverseFractureNonDisplaced = 2,

        [RadioReportId("spi_m_060442", InstanceName = nameof(BonesFindingType.Fracture))]
        TransverseFractureDislocated = 3,

        [RadioReportId("spi_m_060444", InstanceName = nameof(BonesFindingType.Fracture))]
        IsolatedVerticalCentralFracture = 4,

        [RadioReportId("spi_m_060445", InstanceName = nameof(BonesFindingType.Fracture))]
        TransalarFractureLateral = 5,

        [RadioReportId("spi_m_060446", InstanceName = nameof(BonesFindingType.Fracture))]
        TransalarFractureWithParticipationOfTheForamina = 6,

        [RadioReportId("spi_m_060448", InstanceName = nameof(BonesFindingType.Fracture))]
        UndisplacedUShapedFracture = 7,

        [RadioReportId("spi_m_060449", InstanceName = nameof(BonesFindingType.Fracture))]
        Unilateral54BFractureWithDissociation = 8,

        [RadioReportId("spi_m_060450", InstanceName = nameof(BonesFindingType.Fracture))]
        Bilateral54BFractureWithoutTransverseFracture = 9,

        [RadioReportId("spi_m_060451", InstanceName = nameof(BonesFindingType.Fracture))]
        DisplacedFracture = 10
    }
}