using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Constants;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050104", InstanceName = InstanceNames.MammographyFinding)]
        [RadioReportId("mam_mx_070104", InstanceName = InstanceNames.UltrasoundFinding)]
        [RadioReportId("mam_mx_080104", InstanceName = InstanceNames.LymphNodes)]
        False = 1,

        [RadioReportId("mam_mx_050105", InstanceName = InstanceNames.MammographyFinding)]
        [RadioReportId("mam_mx_070105", InstanceName = InstanceNames.UltrasoundFinding)]
        [RadioReportId("mam_mx_080105", InstanceName = InstanceNames.LymphNodes)]
        True = 2
    }
}