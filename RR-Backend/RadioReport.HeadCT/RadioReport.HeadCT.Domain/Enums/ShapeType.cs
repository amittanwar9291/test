using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadCT.Domain.Enums.Cortex;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("hea_c_050312", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_070320", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_0604226", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060267", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080549", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080555", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090487", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100212", InstanceName = InstanceNames.SellarRegion)]
        Round = 1,

        [RadioReportId("hea_c_050313", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_0604229", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_090488", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100214", InstanceName = InstanceNames.SellarRegion)]
        Lobulated = 2,

        [RadioReportId("hea_c_050314", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_090491", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        Nodular = 3,

        [RadioReportId("hea_c_050315", InstanceName = InstanceNames.Meninges)]
        [RadioReportId("hea_c_090492", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        Multinodular = 4,

        [RadioReportId("hea_c_070321", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_0604227", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060268", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080550", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080556", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_100213", InstanceName = InstanceNames.SellarRegion)]
        Oval = 5,

        [RadioReportId("hea_c_070322", InstanceName = InstanceNames.BasalNuclei)]
        SmallSpotted = 6,

        [RadioReportId("hea_c_070323", InstanceName = InstanceNames.BasalNuclei)]
        [RadioReportId("hea_c_0604230", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_080552", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080558", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        Triangular = 7,

        [RadioReportId("hea_c_070324", InstanceName = InstanceNames.BasalNuclei)]
        Laminar = 8,

        [RadioReportId("hea_c_0604228", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060269", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080551", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080557", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_090489", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100215", InstanceName = InstanceNames.SellarRegion)]
        Patchy = 9,

        [RadioReportId("hea_c_0604231", InstanceName = nameof(CortexFindingType.Focal))]
        Tubular = 10,

        [RadioReportId("hea_c_0604232", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060270", InstanceName = nameof(CortexFindingType.Diffuse))]
        [RadioReportId("hea_c_080553", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_c_080559", InstanceName = InstanceNames.BrainstemCranialNerves, CustomConditionName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        Areal = 11,

        [RadioReportId("hea_c_090490", InstanceName = InstanceNames.CerebrospinalFluidSpace)]
        [RadioReportId("hea_c_100216", InstanceName = InstanceNames.SellarRegion)]
        Flat = 12
    }
}
