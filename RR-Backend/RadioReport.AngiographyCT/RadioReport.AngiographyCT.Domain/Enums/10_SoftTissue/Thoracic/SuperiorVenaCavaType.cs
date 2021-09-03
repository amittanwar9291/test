using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum SuperiorVenaCavaType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100447", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PersistentLeftSuperiorVenaCava = 1,

        [RadioReportId("ang_c_100448", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        MirrorImageOfVenaCavaSuperior = 2,

        [RadioReportId("ang_c_100449", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        RetroaorticBrachiocephalicVeinLeft = 3,
    }
}