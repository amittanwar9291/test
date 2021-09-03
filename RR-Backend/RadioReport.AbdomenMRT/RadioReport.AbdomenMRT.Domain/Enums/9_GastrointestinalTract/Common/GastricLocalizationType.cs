using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum GastricLocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090303", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090224", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090224", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		Cardia = 1,

		[RadioReportId("abd_m_090304", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090225", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090225", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		Fundus = 2,

		[RadioReportId("abd_m_090305", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090226", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090226", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		Corpus = 3,

		[RadioReportId("abd_m_090306", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090227", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090227", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		Antrum = 4,

		[RadioReportId("abd_m_090307", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090228", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090228", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		Pylorum = 5,

		[RadioReportId("abd_m_090308", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090229", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090229", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		GreaterCurvature = 6,

		[RadioReportId("abd_m_090309", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090230", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090230", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		LesserCurvature = 7,

		[RadioReportId("abd_m_090310", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090231", InstanceName = nameof(GastrointestinalTractFindingType.GastricUlcer))]
		[RadioReportId("abd_m_090231", InstanceName = nameof(GastrointestinalTractFindingType.GastricDiverticulum))]
		Diffuse = 8
	}
}