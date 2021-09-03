using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum OtherFocalType : byte
	{
		None = 0,

		[RadioReportId("car_m_0902189", InstanceName = nameof(PericardiumVesselsFinding.FocalLiverLesionsType))]
		[RadioReportId("car_m_090458", InstanceName = nameof(PericardiumVesselsFinding.FocalLesionOfKidneyType))]
		[RadioReportId("car_m_090468", InstanceName = nameof(PericardiumVesselsFinding.FocalClavicleType))] //TODO: this rr_id is with multiple variables
		Benign = 1,

		[RadioReportId("car_m_0902192", InstanceName = nameof(PericardiumVesselsFinding.FocalLiverLesionsType))]
		[RadioReportId("car_m_090460", InstanceName = nameof(PericardiumVesselsFinding.FocalLesionOfKidneyType))]
		[RadioReportId("car_m_090472", InstanceName = nameof(PericardiumVesselsFinding.FocalClavicleType))]
		Malignant = 2,

		[RadioReportId("car_m_0902193", InstanceName = nameof(PericardiumVesselsFinding.FocalLiverLesionsType))]
		[RadioReportId("car_m_090461", InstanceName = nameof(PericardiumVesselsFinding.FocalLesionOfKidneyType))]
		[RadioReportId("car_m_090473", InstanceName = nameof(PericardiumVesselsFinding.FocalClavicleType))]
		Unknown = 3
	}
}
