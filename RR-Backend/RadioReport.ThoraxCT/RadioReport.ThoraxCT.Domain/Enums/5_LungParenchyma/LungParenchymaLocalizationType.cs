using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LungParenchymaLocalizationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_050204", InstanceName = nameof(LungParenchymaFinding.MainCharacteristicsLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050204", InstanceName = nameof(LungParenchymaFinding.MainCharacteristicsLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050204", InstanceName = nameof(LungParenchymaFinding.MainCharacteristicsLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
		[RadioReportId("tho_c_050322", InstanceName = nameof(LungParenchymaFinding.DifferentialDiagnosisLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050322", InstanceName = nameof(LungParenchymaFinding.DifferentialDiagnosisLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050322", InstanceName = nameof(LungParenchymaFinding.DifferentialDiagnosisLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Consolidation))]
		AtSegmentLevel = 1,

        [RadioReportId("tho_c_050205", InstanceName = nameof(LungParenchymaFinding.MainCharacteristicsLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050205", InstanceName = nameof(LungParenchymaFinding.MainCharacteristicsLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050205", InstanceName = nameof(LungParenchymaFinding.MainCharacteristicsLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        [RadioReportId("tho_c_050323", InstanceName = nameof(LungParenchymaFinding.DifferentialDiagnosisLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050323", InstanceName = nameof(LungParenchymaFinding.DifferentialDiagnosisLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050323", InstanceName = nameof(LungParenchymaFinding.DifferentialDiagnosisLocalizationType), CustomConditionName = nameof(LungParenchymaFindingType.Consolidation))]
        AtLobeLevel = 2
	}
}
