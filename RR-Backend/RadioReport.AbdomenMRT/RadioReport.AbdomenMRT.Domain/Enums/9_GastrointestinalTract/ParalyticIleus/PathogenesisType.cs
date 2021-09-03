using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum PathogenesisType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0902148", InstanceName = nameof(GastrointestinalTractFindingType.ParalyticIleus))]
		Metabolic = 1,

		[RadioReportId("abd_m_0902149", InstanceName = nameof(GastrointestinalTractFindingType.ParalyticIleus))]
		Reflexive = 2,

		[RadioReportId("abd_m_0902150", InstanceName = nameof(GastrointestinalTractFindingType.ParalyticIleus))]
		Toxic = 3
	}
}