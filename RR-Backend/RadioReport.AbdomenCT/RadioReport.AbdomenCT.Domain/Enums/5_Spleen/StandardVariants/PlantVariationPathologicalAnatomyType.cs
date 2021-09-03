using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
	public enum PlantVariationPathologicalAnatomyType : byte
	{
		None = 0,

		[RadioReportId("abd_c_050203", InstanceName = nameof(SpleenFindingType.StandardVariants))]
		Asplenia = 1,

		[RadioReportId("abd_c_050204", InstanceName = nameof(SpleenFindingType.StandardVariants))]
		Polysplenia = 2,

		[RadioReportId("abd_c_050205", InstanceName = nameof(SpleenFindingType.StandardVariants))]
		Splenosis = 3,

		[RadioReportId("abd_c_050240", InstanceName = nameof(SpleenFindingType.StandardVariants))]
		SubsidiarySpleen = 4
	}
}
