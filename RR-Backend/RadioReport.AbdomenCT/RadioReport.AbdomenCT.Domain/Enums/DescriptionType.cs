using RadioReport.AbdomenCT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("abd_c_050111", InstanceName = nameof(InstanceNames.Spleen))]
        IDescribe = 1,

        [RadioReportId("abd_c_050112", InstanceName = nameof(InstanceNames.Spleen))]
        IKnow = 2
    }
}