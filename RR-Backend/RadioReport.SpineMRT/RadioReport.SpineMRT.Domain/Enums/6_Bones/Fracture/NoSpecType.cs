using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum NoSpecType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060408", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.C0))]
        [RadioReportId("spi_m_060415", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.C1))]
        [RadioReportId("spi_m_060570", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.C2))]
        [RadioReportId("spi_m_060438", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = ">=" + nameof(SpineLocations.C3))]
        [RadioReportId("spi_m_060453", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.OsSacrum))]
        [RadioReportId("spi_m_0604205", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.OsCoccygis))]
        SuspicionOf = 1,

        [RadioReportId("spi_m_060409", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.C0))]
        [RadioReportId("spi_m_060416", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.C1))]
        [RadioReportId("spi_m_060571", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.C2))]
        [RadioReportId("spi_m_060437", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = ">=" + nameof(SpineLocations.C3))]
        [RadioReportId("spi_m_060452", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.OsSacrum))]
        [RadioReportId("spi_m_0604204", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SpineLocations.OsCoccygis))]
        AppearanceOfAnOlderFracture = 2
    }
}
