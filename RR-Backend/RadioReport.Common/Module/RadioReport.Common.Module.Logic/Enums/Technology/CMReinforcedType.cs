using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Common.Module.Logic.Enums.Technology
{
    public enum CMReinforcedType : byte
    {
        None = 0,

        [RadioReportId("uni_x_030104")]
        Yes = 1,

        [RadioReportId("uni_x_030110")]
        No = 2
    }
}
