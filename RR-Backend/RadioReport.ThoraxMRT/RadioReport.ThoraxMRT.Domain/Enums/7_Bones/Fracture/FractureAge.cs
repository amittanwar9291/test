using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum FractureAge : byte
    {
        None = 0,

        [RadioReportId("tho_m_070211", InstanceName = nameof(BonesFindingType.RibFracture))]
        [RadioReportId("tho_m_070280", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        Fresh = 1,

        [RadioReportId("tho_m_070212", InstanceName = nameof(BonesFindingType.RibFracture))]
        [RadioReportId("tho_m_070227", InstanceName = nameof(BonesFindingType.SpinalFracture))] 
        OlderConsolidated = 2
    }
}
