using RadioReport.AngiographyMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("ang_m_040104", InstanceName = InstanceNames.SupraaorticVessels)]
        [RadioReportId("ang_m_050104", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_m_060104", InstanceName = InstanceNames.Aorta)]
        [RadioReportId("ang_m_070104", InstanceName = InstanceNames.Abdomen)]
        [RadioReportId("ang_m_080104", InstanceName = InstanceNames.PelvisLegArteries)]
        False = 1,

        [RadioReportId("ang_m_040105", InstanceName = InstanceNames.SupraaorticVessels)]
        [RadioReportId("ang_m_050105", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_m_060105", InstanceName = InstanceNames.Aorta)]
        [RadioReportId("ang_m_070105", InstanceName = InstanceNames.Abdomen)]
        [RadioReportId("ang_m_080105", InstanceName = InstanceNames.PelvisLegArteries)]
        True = 2
    }
}