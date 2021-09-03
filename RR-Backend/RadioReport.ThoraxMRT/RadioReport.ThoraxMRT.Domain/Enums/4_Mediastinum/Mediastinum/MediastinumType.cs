using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums.Mediastinum
{
    public enum MediastinumType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040203", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        MediastinalShift = 1,

        [RadioReportId("tho_m_040204", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        Pneumomediastinum = 2
    }
}