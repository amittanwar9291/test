using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormA1SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100538", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		FractureSpinaIliacaAnteriorSuperior = 1,

		[RadioReportId("pel_m_100539", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		FractureSpinaIliacaAnteriorInferior = 2,

		[RadioReportId("pel_m_100540", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		FractureIschialTuberosity = 3
	}
}
