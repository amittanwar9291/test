using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum ContrastEnhancementType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060213", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060331", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060439", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602407", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0603426", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060439", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605222", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602424", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0603426", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_060439", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603140", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604150", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_060213", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_060439", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603140", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604150", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603426", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603426", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0605268", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0603254", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.Endometriosis))]
        Strong = 1,

		[RadioReportId("pel_m_060214", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060332", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060440", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602408", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0603427", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060440", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605223", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602425", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0603427", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_060440", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603141", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604151", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_060214", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_060440", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603141", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604151", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603427", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603427", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0605269", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0603255", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.Endometriosis))]
        Low = 2,

		[RadioReportId("pel_m_060215", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060333", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060441", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602409", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060345", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0603428", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060441", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605224", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602426", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0603428", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_060441", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603142", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604152", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_060215", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_060441", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603142", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType2), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604152", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType3), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603428", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603428", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0605270", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0603256", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.Endometriosis))]
        No = 3,

        [RadioReportId("pel_m_060343", InstanceName = nameof(FemaleGenderFinding.ContrastEnhancementType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        Decreased = 4
    }
}
