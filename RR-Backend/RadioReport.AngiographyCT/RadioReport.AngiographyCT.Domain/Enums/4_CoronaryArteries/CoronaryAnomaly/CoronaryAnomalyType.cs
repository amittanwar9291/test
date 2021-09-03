using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum CoronaryAnomalyType : byte
	{
		None = 0,
		HighTakeOff = 1,
		AbsenceOfLcaSeparatedOstiaRivaRcx = 2,
		SingularCoronaryArtery = 3,
		OriginCoronaryArteryFromPulmonaryArtery = 4,
		RcaFromLeftCoronarySinus = 5,
		RcxRivaFromRightCoronarySinus = 6,
		LcaFromRightCoronarySinus = 7,
		RcxRivaFromNonCoronarySinus = 8,
		ArterioVenousCoronaryFistula = 9,
		CoronaryArcades = 10,
		MyocardialBridging = 11,
		EctasiaAneurysm = 12,
		DuplicationOfTheRiva = 13
	}
}