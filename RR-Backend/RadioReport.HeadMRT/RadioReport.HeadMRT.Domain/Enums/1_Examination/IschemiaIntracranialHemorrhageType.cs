using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Examination
{
	public enum IschemiaIntracranialHemorrhageType : byte
	{
		None = 0,


        [RadioReportId("hea_m_010502", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        [RadioReportId("hea_m_010502", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        [RadioReportId("hea_m_010525", InstanceName = nameof(ExaminationFindingType.Infection))]
        [RadioReportId("hea_m_010525", InstanceName = nameof(ExaminationFindingType.Neurodegeneration))]
        [RadioReportId("hea_m_010525", InstanceName = nameof(ExaminationFindingType.CongenitalAnomaly))]
        [RadioReportId("hea_m_010525", InstanceName = nameof(ExaminationFindingType.Intoxication))]
        [RadioReportId("hea_m_010525", InstanceName = nameof(ExaminationFindingType.EndocrineMetabolicEncephalopathy))]
        [RadioReportId("hea_m_010529", InstanceName = nameof(ExaminationFindingType.Inflammation))]
        [RadioReportId("hea_m_010529", InstanceName = nameof(ExaminationFindingType.AutoimmuneDisease))]
        [RadioReportId("hea_m_010529", InstanceName = nameof(ExaminationFindingType.Demyelination))]
        [RadioReportId("hea_m_010536", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        [RadioReportId("hea_m_010543", InstanceName = nameof(ExaminationFindingType.Seizure))]
        [RadioReportId("hea_m_010555", InstanceName = nameof(ExaminationFindingType.Trauma))]
        [RadioReportId("hea_m_010568", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        
        Suspected = 1,

        [RadioReportId("hea_m_010503", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        [RadioReportId("hea_m_010503", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        [RadioReportId("hea_m_010526", InstanceName = nameof(ExaminationFindingType.Infection))]
        [RadioReportId("hea_m_010526", InstanceName = nameof(ExaminationFindingType.Neurodegeneration))]
        [RadioReportId("hea_m_010526", InstanceName = nameof(ExaminationFindingType.CongenitalAnomaly))]
        [RadioReportId("hea_m_010526", InstanceName = nameof(ExaminationFindingType.Intoxication))]
        [RadioReportId("hea_m_010526", InstanceName = nameof(ExaminationFindingType.EndocrineMetabolicEncephalopathy))]
        [RadioReportId("hea_m_010530", InstanceName = nameof(ExaminationFindingType.Inflammation))]
        [RadioReportId("hea_m_010530", InstanceName = nameof(ExaminationFindingType.AutoimmuneDisease))]
        [RadioReportId("hea_m_010530", InstanceName = nameof(ExaminationFindingType.Demyelination))]
        [RadioReportId("hea_m_010537", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        [RadioReportId("hea_m_010544", InstanceName = nameof(ExaminationFindingType.Seizure))]
        [RadioReportId("hea_m_010556", InstanceName = nameof(ExaminationFindingType.Trauma))]
        [RadioReportId("hea_m_010569", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        Exclusion = 2,

        [RadioReportId("hea_m_010504", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        [RadioReportId("hea_m_010504", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        [RadioReportId("hea_m_010527", InstanceName = nameof(ExaminationFindingType.Infection))]
        [RadioReportId("hea_m_010527", InstanceName = nameof(ExaminationFindingType.Neurodegeneration))]
        [RadioReportId("hea_m_010527", InstanceName = nameof(ExaminationFindingType.CongenitalAnomaly))]
        [RadioReportId("hea_m_010527", InstanceName = nameof(ExaminationFindingType.Intoxication))]
        [RadioReportId("hea_m_010527", InstanceName = nameof(ExaminationFindingType.EndocrineMetabolicEncephalopathy))]
        [RadioReportId("hea_m_010531", InstanceName = nameof(ExaminationFindingType.Inflammation))]
        [RadioReportId("hea_m_010531", InstanceName = nameof(ExaminationFindingType.AutoimmuneDisease))]
        [RadioReportId("hea_m_010531", InstanceName = nameof(ExaminationFindingType.Demyelination))]
        [RadioReportId("hea_m_010538", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        [RadioReportId("hea_m_010545", InstanceName = nameof(ExaminationFindingType.Seizure))]
        [RadioReportId("hea_m_010557", InstanceName = nameof(ExaminationFindingType.Trauma))]
        [RadioReportId("hea_m_010570", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        FollowUpExamination = 3

    }
}
