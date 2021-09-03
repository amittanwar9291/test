using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum CoronaryArteriesFindingType : byte
	{
		None = 0,
		CoronaryArterialDominance = 1,
		CoronaryAnomaly = 2,
		Calcification = 3,
		StenosisOcclusion = 4,
		ExtracoronaryIntracardiacFindings = 5,
		FollowUpAfterBypass = 6,
		FollowUpAfterStent = 7
	}
}