using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum VesselsFindingType : byte
	{
		None = 0,
		CommonCarotidArtery = 1,
		InternalCarotidArtery = 2,
		ExternalCarotidArtery = 3,
		VertebralArtery = 4,
		CircleOfWillisCerebralArteries = 5,
		BrachiocephalicTrunk = 6,
		SubclavianArtery = 7,
		AxillaryArtery = 8,
		CerebralVeinsDuralSinuses = 9,
		Veins = 10
	}
}