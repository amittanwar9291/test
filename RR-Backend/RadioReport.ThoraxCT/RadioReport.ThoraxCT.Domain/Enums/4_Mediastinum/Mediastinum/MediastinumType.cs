using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums.Mediastinum
{
    public enum MediastinumType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040203", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        MediastinalShift = 1,

        [RadioReportId("tho_c_040204", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        MediastinalWidening = 2,

        [RadioReportId("tho_c_040205", InstanceName = nameof(MediastinumFindingType.Mediastinum))]
        Pneumomediastinum = 3
    }
}