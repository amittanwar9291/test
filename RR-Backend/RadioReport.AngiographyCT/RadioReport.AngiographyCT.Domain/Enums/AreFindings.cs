using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,
        [RadioReportId("ang_c_040104", InstanceName = InstanceNames.CoronaryArteries)]
        [RadioReportId("ang_c_050104", InstanceName = InstanceNames.SupraaorticVessels)]
        [RadioReportId("ang_c_090104", InstanceName = InstanceNames.PelvisLegArteries)]
        [RadioReportId("ang_c_060104", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_070104", InstanceName = InstanceNames.Aorta)]
        [RadioReportId("ang_c_080104", InstanceName = InstanceNames.Abdomen)]
        [RadioReportId("ang_c_100104", InstanceName = InstanceNames.SoftTissue)]
        False = 1,
        [RadioReportId("ang_c_040105", InstanceName = InstanceNames.CoronaryArteries)]
        [RadioReportId("ang_c_050105", InstanceName = InstanceNames.SupraaorticVessels)]
        [RadioReportId("ang_c_090105", InstanceName = InstanceNames.PelvisLegArteries)]
        [RadioReportId("ang_c_060105", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_070105", InstanceName = InstanceNames.Aorta)]
        [RadioReportId("ang_c_080105", InstanceName = InstanceNames.Abdomen)]
        [RadioReportId("ang_c_100105", InstanceName = InstanceNames.SoftTissue)]
        True = 2
    }
}