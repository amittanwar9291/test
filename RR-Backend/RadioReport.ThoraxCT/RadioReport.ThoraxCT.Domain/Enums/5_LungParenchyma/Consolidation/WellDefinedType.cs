using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum WellDefinedType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0505216", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        VolumeLoss = 1,

        [RadioReportId("tho_c_0505217", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        ConstantVolume = 2,

        [RadioReportId("tho_c_0505218", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        VolumeIncrease = 3
    }
}
