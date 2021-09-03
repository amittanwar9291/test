using RadioReport.AbdomenCT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums
{
    public enum AreFindingsExtended : byte
    {
        None = 0,

        [RadioReportId("abd_c_050104", InstanceName = nameof(InstanceNames.Spleen))]
        False = 1,

        [RadioReportId("abd_c_050113", InstanceName = nameof(InstanceNames.Spleen))]
        NoDetails = 2,

        [RadioReportId("abd_c_050105", InstanceName = nameof(InstanceNames.Spleen))]
        True = 3
    }
}
