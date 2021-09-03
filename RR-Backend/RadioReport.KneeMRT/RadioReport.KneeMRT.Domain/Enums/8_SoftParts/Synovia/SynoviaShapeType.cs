using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum SynoviaShapeType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080402", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Multilobulated = 1,

        [RadioReportId("kne_m_080403", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        SynovialNodulus = 2,

        [RadioReportId("kne_m_080405", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        SynovialProliferations = 3
    }
}
