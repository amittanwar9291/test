using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Examination
{
	public enum DetailsType : byte
	{
		None = 0,

        [RadioReportId("hea_m_010540", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        Mass = 1,

        [RadioReportId("hea_m_010541", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        PituaryGlandTumor = 2,

        [RadioReportId("hea_m_010547", InstanceName = nameof(ExaminationFindingType.Seizure))]
        KnownEpilepsy = 3,

        [RadioReportId("hea_m_010548", InstanceName = nameof(ExaminationFindingType.Seizure))]
        FirstSeizure = 4,

        [RadioReportId("hea_m_010552", InstanceName = nameof(ExaminationFindingType.Seizure))]
        StatusEpilepticus = 5,

        [RadioReportId("hea_m_010572", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        FocalNeurologicDeficit = 6,

        [RadioReportId("hea_m_010573", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        ClinicalSymptomInNeedOfFurtherClarification = 7,

        [RadioReportId("hea_m_010576", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        ExclusionOfOrganicCorrelate = 8,

        [RadioReportId("hea_m_010574", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        Postoperative = 9,

        [RadioReportId("hea_m_010575", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        Postinterventional = 10

    }
}
