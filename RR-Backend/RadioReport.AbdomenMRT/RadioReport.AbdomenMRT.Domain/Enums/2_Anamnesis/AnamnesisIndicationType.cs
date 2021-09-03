using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Anamnesis
{
    public enum AnamnesisIndicationType : byte
	{
		None = 0,
		Mass = 1,
		Inflammation = 2,
		Concrement = 3,
		AnastomoticInsufficiency = 4,
		Trauma = 5,
		FollowUpAfterTherapy = 6
	}
}
