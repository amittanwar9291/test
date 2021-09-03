using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum AppendicitisInflammationStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0803130", InstanceName = nameof(RectumFindingType.Appendicitis))]
        UlceratingPhlegmonous = 1,

        [RadioReportId("pel_m_0803131", InstanceName = nameof(RectumFindingType.Appendicitis))]
        Gangrenous = 2,

        [RadioReportId("pel_m_0803132", InstanceName = nameof(RectumFindingType.Appendicitis))]
        Perforated = 3
    }
}
