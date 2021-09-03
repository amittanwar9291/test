using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum LungDiffDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("car_m_090533", InstanceName = nameof(PericardiumVesselsFinding.ConsolidationDiffDiagnosis))]
		[RadioReportId("car_m_090539", InstanceName = nameof(PericardiumVesselsFinding.AtelePulmNoduleDiffDiagnosis))]
		Atelectasis = 1,

		[RadioReportId("car_m_090534", InstanceName = nameof(PericardiumVesselsFinding.ConsolidationDiffDiagnosis))]
		Dystelectasis = 2,

		[RadioReportId("car_m_090535", InstanceName = nameof(PericardiumVesselsFinding.ConsolidationDiffDiagnosis))]
		[RadioReportId("car_m_090538", InstanceName = nameof(PericardiumVesselsFinding.AtelePulmNoduleDiffDiagnosis))]
		Mass = 3,

		[RadioReportId("car_m_090537")]
		Consolidation = 4
	}
}
