using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Common.Module.Logic.Enums.Technology
{
    public enum SequencesType : byte
    {
        None = 0,

        [RadioReportId("uni_x_030107")]
        Auto = 1,

        [RadioReportId("uni_x_030108")]
        CenterStandard = 2,

        [RadioReportId("uni_x_030109")]
        Individual = 3
    }
}
