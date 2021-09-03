using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum MechanicalLocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0903132", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		InTheSurroundingArea = 1,

		[RadioReportId("abd_m_0903133", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		Generalized = 2,
	}
}