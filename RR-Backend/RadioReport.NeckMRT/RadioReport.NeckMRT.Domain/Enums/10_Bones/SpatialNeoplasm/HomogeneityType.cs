using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum HomogeneityType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100354", InstanceName = nameof(BonesFinding.MainHomogeneityType))]
		[RadioReportId("nec_m_100280", InstanceName = nameof(BonesFinding.SubHomogeneityType))]
		Homogeneous = 1,

		[RadioReportId("nec_m_100355", InstanceName = nameof(BonesFinding.MainHomogeneityType))]
		[RadioReportId("nec_m_100281", InstanceName = nameof(BonesFinding.SubHomogeneityType))]
		Heterogeneous = 2

	}
}
