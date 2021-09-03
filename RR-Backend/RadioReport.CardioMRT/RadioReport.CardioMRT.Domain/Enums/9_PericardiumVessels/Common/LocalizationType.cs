using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("car_m_090356", InstanceName = nameof(PericardiumVesselsFinding.LocalizationRightType))]
		[RadioReportId("car_m_090359", InstanceName = nameof(PericardiumVesselsFinding.LocalizationLeftType))]
		Low = 1,

		[RadioReportId("car_m_090357", InstanceName = nameof(PericardiumVesselsFinding.LocalizationRightType))]
		[RadioReportId("car_m_090360", InstanceName = nameof(PericardiumVesselsFinding.LocalizationLeftType))]
		Distinct = 2
	}
}
