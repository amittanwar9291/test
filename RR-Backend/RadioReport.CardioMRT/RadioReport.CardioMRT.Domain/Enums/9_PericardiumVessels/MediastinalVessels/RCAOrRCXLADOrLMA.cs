using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum RCAOrRCXLADOrLMA : byte
	{
		None = 0,

		[RadioReportId("car_m_090501", InstanceName = nameof(PericardiumVesselsFinding.RCALeftOrLMARightCoronalSinus))]
		[RadioReportId("car_m_090506", InstanceName = nameof(PericardiumVesselsFinding.DistalRCX))]
		[RadioReportId("car_m_090511", InstanceName = nameof(PericardiumVesselsFinding.DistalLAD))]
		Prepulmonary = 1,

		[RadioReportId("car_m_090502", InstanceName = nameof(PericardiumVesselsFinding.RCALeftOrLMARightCoronalSinus))]
		[RadioReportId("car_m_090507", InstanceName = nameof(PericardiumVesselsFinding.DistalRCX))]
		[RadioReportId("car_m_090512", InstanceName = nameof(PericardiumVesselsFinding.DistalLAD))]
		Interarteriel = 2,

		[RadioReportId("car_m_090503", InstanceName = nameof(PericardiumVesselsFinding.RCALeftOrLMARightCoronalSinus))]
		[RadioReportId("car_m_090508", InstanceName = nameof(PericardiumVesselsFinding.DistalRCX))]
		[RadioReportId("car_m_090513", InstanceName = nameof(PericardiumVesselsFinding.DistalLAD))]
		Retroaortal = 3,

		[RadioReportId("car_m_090504", InstanceName = nameof(PericardiumVesselsFinding.RCALeftOrLMARightCoronalSinus))]
		[RadioReportId("car_m_090509", InstanceName = nameof(PericardiumVesselsFinding.DistalRCX))]
		[RadioReportId("car_m_090514", InstanceName = nameof(PericardiumVesselsFinding.DistalLAD))]
		Septal = 4
	}
}
