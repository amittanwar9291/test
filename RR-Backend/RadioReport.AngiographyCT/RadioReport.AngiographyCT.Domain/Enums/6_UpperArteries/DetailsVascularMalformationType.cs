using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.UpperArteries
{
	public enum DetailsVascularMalformationType : byte
	{
		None = 0,

        [RadioReportId("ang_c_060432")]
        ArteriovenousMalformation = 1,

        [RadioReportId("ang_c_060435")]
        Hemangioma = 2
	}
}
