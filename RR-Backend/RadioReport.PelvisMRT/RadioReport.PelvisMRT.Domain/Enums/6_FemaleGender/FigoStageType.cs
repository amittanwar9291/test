using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum FigoStageType : byte
	{
		None = 0,

        [RadioReportId("pel_m_0603124", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604129", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603175", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0604163", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        StageI = 1,

        [RadioReportId("pel_m_0603125", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604130", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603176", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0604164", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        StageII = 2,

        [RadioReportId("pel_m_0603126", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604131", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603177", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0604165", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        StageIII = 3,

        [RadioReportId("pel_m_0603127", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604132", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603178", InstanceName = nameof(FemaleGenderFinding.FigoStageType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0604166", InstanceName = nameof(FemaleGenderFinding.FigoStageType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        StageIV = 4
	}
}
