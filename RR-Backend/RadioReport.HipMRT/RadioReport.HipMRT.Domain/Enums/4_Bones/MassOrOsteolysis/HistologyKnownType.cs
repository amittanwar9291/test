using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040250", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Benign = 1,

		[RadioReportId("hip_m_040251", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Malignant = 2

	}
}
