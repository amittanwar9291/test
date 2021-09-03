using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum StenosisType : byte
	{
		None = 0,
		NoStenosis = 1,
		MinimalStenosis = 2,
		MinorStenosis = 3,
		ModerateStenosis = 4,
		SevereStenosis = 5,
		Occlusion = 6
	}
}