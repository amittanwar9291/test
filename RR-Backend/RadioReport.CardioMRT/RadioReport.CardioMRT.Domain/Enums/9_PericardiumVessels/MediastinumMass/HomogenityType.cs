using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum HomogenityType : byte
	{
		None = 0,

		[RadioReportId("car_m_090345", InstanceName = nameof(PericardiumVesselsFinding.HomogenityType))]
		[RadioReportId("car_m_090525", InstanceName = nameof(PericardiumVesselsFinding.NoHomogenityType))]
		Homogeneous = 1,

		[RadioReportId("car_m_090346", InstanceName = nameof(PericardiumVesselsFinding.HomogenityType))]
		[RadioReportId("car_m_090526", InstanceName = nameof(PericardiumVesselsFinding.NoHomogenityType))]
		Heterogeneous = 2
	}
}
