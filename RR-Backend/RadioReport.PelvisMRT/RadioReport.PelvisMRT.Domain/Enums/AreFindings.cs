using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Constants;

namespace RadioReport.PelvisMRT.Domain.Enums
{
	public enum AreFindings : byte
	{
		None = 0,

        [RadioReportId("pel_m_040121", InstanceName = InstanceNames.Prostata)]
        [RadioReportId("pel_m_050104", InstanceName = InstanceNames.MaleGender)]
        [RadioReportId("pel_m_060104", InstanceName = InstanceNames.FemaleGender)]
        [RadioReportId("pel_m_080104", InstanceName = InstanceNames.Rectum)]
        [RadioReportId("pel_m_090104", InstanceName = InstanceNames.Bladder)]
        [RadioReportId("pel_m_100104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("pel_m_110104", InstanceName = InstanceNames.LymphNodes)]
        False = 1,

        [RadioReportId("pel_m_040122", InstanceName = InstanceNames.Prostata)]
        [RadioReportId("pel_m_050105", InstanceName = InstanceNames.MaleGender)]
        [RadioReportId("pel_m_060105", InstanceName = InstanceNames.FemaleGender)]
        [RadioReportId("pel_m_080106", InstanceName = InstanceNames.Rectum)]
        [RadioReportId("pel_m_090105", InstanceName = InstanceNames.Bladder)]
        [RadioReportId("pel_m_100105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("pel_m_110105", InstanceName = InstanceNames.LymphNodes)]
        True = 2
	}
}