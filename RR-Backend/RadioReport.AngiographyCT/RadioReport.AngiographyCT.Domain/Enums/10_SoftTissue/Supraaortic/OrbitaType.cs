using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum OrbitaType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100406", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Intraconal = 1,

        [RadioReportId("ang_c_100407", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Extraconal = 2,
    }
}