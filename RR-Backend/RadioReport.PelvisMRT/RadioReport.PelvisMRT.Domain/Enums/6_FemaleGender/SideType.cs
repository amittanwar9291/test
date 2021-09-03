using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum SideType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060514", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060238", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060261", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060238", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604464", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602190", InstanceName = nameof(FemaleGenderFinding.LabiaMajoraSideType))]
        [RadioReportId("pel_m_0602193", InstanceName = nameof(FemaleGenderFinding.LabiaMinoraSideType))]
        Right = 1,

		[RadioReportId("pel_m_060515", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060239", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060260", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060239", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604465", InstanceName = nameof(FemaleGenderFinding.SideType), CustomConditionName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602191", InstanceName = nameof(FemaleGenderFinding.LabiaMajoraSideType))]
        [RadioReportId("pel_m_0602194", InstanceName = nameof(FemaleGenderFinding.LabiaMinoraSideType))]
        Left = 2
	}
}
