using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090508", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090282", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Round = 1,

		[RadioReportId("abd_m_090509", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		Oval = 2,

		[RadioReportId("abd_m_090510", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		Multilobulated = 3,

		[RadioReportId("abd_m_090511", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		Irregular = 4,

		[RadioReportId("abd_m_090283", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Lobulated = 5,

		[RadioReportId("abd_m_090284", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		BroadBased = 6,

		[RadioReportId("abd_m_090285", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Pedunculated = 7
	}
}