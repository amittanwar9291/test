using RadioReport.Common.Logic.Attributes;

namespace  RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum GastrointestinalTractFindingType : byte
	{
		None = 0,
		GastricMass = 1,
		GastricUlcer = 2,
		GastricDiverticulum = 3,
		PostoperativeGastricImaging = 4,
		SegmentalBowelFindings = 5,
		IntestinalMass = 6,
		BowelDiverticula = 7,
		Appendicitis = 8,
		Appendagitis = 9,
		MechanicalIleus = 10,
		ParalyticIleus = 11,
		Hernia = 12
	}
}