using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0803337", InstanceName = nameof(SoftTissuesFinding.RightPathologyType))]
        [RadioReportId("spi_c_0803341", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType))]
        [RadioReportId("spi_c_080346", InstanceName = nameof(SoftTissuesFinding.PathologyType))]
        Occlusion = 1,

        [RadioReportId("spi_c_0803338", InstanceName = nameof(SoftTissuesFinding.RightPathologyType))]
        [RadioReportId("spi_c_0803342", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType))]
        Hypoplasia = 2,

        [RadioReportId("spi_c_080336", InstanceName = nameof(SoftTissuesFinding.PathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.ThoracicAorta))]
        [RadioReportId("spi_c_080336", InstanceName = nameof(SoftTissuesFinding.PathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.AbdominalAorta))]
        [RadioReportId("spi_c_080336", InstanceName = nameof(SoftTissuesFinding.RightPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803347", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803355", InstanceName = nameof(SoftTissuesFinding.RightPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        [RadioReportId("spi_c_0803362", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        Elongation = 3,

        [RadioReportId("spi_c_080333", InstanceName = nameof(SoftTissuesFinding.PathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.ThoracicAorta))]
        [RadioReportId("spi_c_080333", InstanceName = nameof(SoftTissuesFinding.PathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.AbdominalAorta))]
        [RadioReportId("spi_c_080333", InstanceName = nameof(SoftTissuesFinding.RightPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803348", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803356", InstanceName = nameof(SoftTissuesFinding.RightPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        [RadioReportId("spi_c_0803363", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        Aneurysm = 4,

        [RadioReportId("spi_c_080347", InstanceName = nameof(SoftTissuesFinding.PathologyType))]
        LeftInferiorVenaCava = 5,

        [RadioReportId("spi_c_080348", InstanceName = nameof(SoftTissuesFinding.PathologyType))]
        DuplicatedInferiorVenaCava = 6,

        [RadioReportId("spi_c_0803370", InstanceName = nameof(SoftTissuesFinding.RightPathologyType))]
        [RadioReportId("spi_c_0803374", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType))]
        Congestion = 7,

        [RadioReportId("spi_c_0803371", InstanceName = nameof(SoftTissuesFinding.RightPathologyType))]
        [RadioReportId("spi_c_0803375", InstanceName = nameof(SoftTissuesFinding.LeftPathologyType))]
        UreterDuplexOrFissus = 8
    }
}
