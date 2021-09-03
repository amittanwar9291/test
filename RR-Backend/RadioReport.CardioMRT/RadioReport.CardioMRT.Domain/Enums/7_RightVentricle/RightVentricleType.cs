using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.RightVentricle
{
	public enum RightVentricleType: byte
	{
		None = 0,

		[RadioReportId("car_m_070204", InstanceName = nameof(RightVentriclePage.MyocardialEdemaType))]
		[RadioReportId("car_m_070207", InstanceName = nameof(RightVentriclePage.WallThickeningType))]
		[RadioReportId("car_m_070210", InstanceName = nameof(RightVentriclePage.WallThinningType))]
		[RadioReportId("car_m_070402", InstanceName = nameof(RightVentriclePage.LGEType))]
		Focal = 1,
		
		[RadioReportId("car_m_070205", InstanceName = nameof(RightVentriclePage.MyocardialEdemaType))]
		[RadioReportId("car_m_070208", InstanceName = nameof(RightVentriclePage.WallThickeningType))]
		[RadioReportId("car_m_070211", InstanceName = nameof(RightVentriclePage.WallThinningType))]
		[RadioReportId("car_m_070403", InstanceName = nameof(RightVentriclePage.LGEType))]
		Diffuse = 2
	}
}
