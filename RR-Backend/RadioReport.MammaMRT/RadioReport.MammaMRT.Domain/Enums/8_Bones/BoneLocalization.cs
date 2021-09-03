
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum BoneLocalization : byte
    {
        None = 0,

        [RadioReportId("mam_m_080203", InstanceName = nameof(BonesFindingType.ProxHumerus))]
        [RadioReportId("mam_m_080203", InstanceName = nameof(BonesFindingType.Rib))]
        [RadioReportId("mam_m_080203", InstanceName = nameof(BonesFindingType.Clavicle))]
        Right = 1,

        [RadioReportId("mam_m_080204", InstanceName = nameof(BonesFindingType.ProxHumerus))]
        [RadioReportId("mam_m_080204", InstanceName = nameof(BonesFindingType.Rib))]
        [RadioReportId("mam_m_080204", InstanceName = nameof(BonesFindingType.Clavicle))]
        Left = 2
    }
}
