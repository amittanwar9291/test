using RadioReport.AbdomenCT.Domain.Constants;
using RadioReport.AbdomenCT.Domain.Enums.Spleen;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("abd_c_050402", InstanceName = nameof(SpleenFinding.HomogeneityType))]
        Homogeneous = 1,

        [RadioReportId("abd_c_050403", InstanceName = nameof(SpleenFinding.HomogeneityType))]
        Heterogeneous = 2
    }
}