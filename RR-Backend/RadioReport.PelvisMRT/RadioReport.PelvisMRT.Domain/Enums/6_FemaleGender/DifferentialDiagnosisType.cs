using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum DifferentialDiagnosisType : byte
	{
		None = 0,

        [RadioReportId("pel_m_060319", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060424", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        HemorrhagicCyst = 1,

        [RadioReportId("pel_m_060321", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060426", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        OvarianFollicle = 2,

        [RadioReportId("pel_m_060324", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060428", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        PolycysticOvaries = 3,

        [RadioReportId("pel_m_060325", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060429", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType2), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        CorpusLuteumCyst = 4,

        [RadioReportId("pel_m_060445", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        Oophoritis = 5,

        [RadioReportId("pel_m_060447", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        Mass = 6,

        [RadioReportId("pel_m_060448", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        OvarianTorsion = 7,

        [RadioReportId("pel_m_060449", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        PeritonealInclusionCyst = 8,

        [RadioReportId("pel_m_0604477", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Cellulitis = 9,

        [RadioReportId("pel_m_0604478", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Skenitis = 10,

        [RadioReportId("pel_m_0604481", InstanceName = nameof(FemaleGenderFinding.DifferentialDiagnosisType1), CustomConditionName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        LabialThrombophlebitis = 11
    }
}

