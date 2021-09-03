using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DislocationClassificationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040364", InstanceName = nameof(BonesFindingType.Dislocation))]
		Myerson = 1,

		[RadioReportId("anc_m_040365", InstanceName = nameof(BonesFindingType.Dislocation))]
		NunleyVertulloRuptureOfTheLisfrancLigament = 2

	}
}
