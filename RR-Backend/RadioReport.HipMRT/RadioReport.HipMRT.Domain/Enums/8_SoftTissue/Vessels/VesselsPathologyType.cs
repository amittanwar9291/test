using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum VesselsPathologyType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080325", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        Aneurysm = 1,

        [RadioReportId("hip_m_080326", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        Varicosis = 2
    }
}