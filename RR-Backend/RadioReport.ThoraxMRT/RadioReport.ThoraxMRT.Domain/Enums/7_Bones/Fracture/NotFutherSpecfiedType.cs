using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum  NotFutherSpecfiedType : byte
    {
        None = 0,

        [RadioReportId("tho_m_070407", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        [RadioReportId("tho_m_070415", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        [RadioReportId("tho_m_070515", InstanceName = nameof(BonesFindingType.RibFracture))]
        [RadioReportId("tho_m_070337", InstanceName = nameof(BonesFindingType.SternalFracture))]
        [RadioReportId("tho_m_070518", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        FractureOlderConsolidated = 1,

        [RadioReportId("tho_m_070408", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        [RadioReportId("tho_m_070416", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        [RadioReportId("tho_m_070516", InstanceName = nameof(BonesFindingType.RibFracture))]
        [RadioReportId("tho_m_070338", InstanceName = nameof(BonesFindingType.SternalFracture))]
        [RadioReportId("tho_m_070519", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        Suspected = 2
    }
}
