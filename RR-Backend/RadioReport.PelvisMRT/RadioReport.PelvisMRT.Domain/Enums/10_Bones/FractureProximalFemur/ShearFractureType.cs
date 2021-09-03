using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum ShearFractureType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100520", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		AvulsionFractureLigamentumCapitisFemoris = 1,

		[RadioReportId("pel_m_100521", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		BonyAvulsionCaudalFractureFoveaCapitisFemoris = 2,

		[RadioReportId("pel_m_100522", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		BonyAvulsionCranialFractureFoveaCapitisFemoris = 3
	}
}
