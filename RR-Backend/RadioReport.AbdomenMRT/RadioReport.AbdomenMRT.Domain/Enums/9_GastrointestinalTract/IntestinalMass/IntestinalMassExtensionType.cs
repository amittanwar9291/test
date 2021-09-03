using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum IntestinalMassExtensionType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090458", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Diffuse = 1,

		[RadioReportId("abd_m_090459", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Continuous = 2,

		[RadioReportId("abd_m_090460", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Focal = 3,

		[RadioReportId("abd_m_090461", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Segmental = 4
	}
}