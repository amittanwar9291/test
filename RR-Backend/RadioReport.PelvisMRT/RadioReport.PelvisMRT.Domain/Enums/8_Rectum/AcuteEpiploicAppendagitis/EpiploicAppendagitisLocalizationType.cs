using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum EpiploicAppendagitisLocalizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0802107", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        Right = 1,

        [RadioReportId("pel_m_0802108", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        Left = 2

    }
}
