using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum OsteochondralLesionClassificationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040371", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		CartilageIntactStableLesion = 1,

		[RadioReportId("anc_m_040373", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		CartilageDefectLesionUnstable = 2,

		[RadioReportId("anc_m_040379", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		DonorSiteFluidFilled = 3
    }
}
