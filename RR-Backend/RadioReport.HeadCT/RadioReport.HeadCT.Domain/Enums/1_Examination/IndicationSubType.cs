using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Examination
{
    public enum IndicationSubType : byte
    {
        None = 0,

		[RadioReportId("hea_c_010502", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        [RadioReportId("hea_c_010555", InstanceName = nameof(ExaminationFindingType.Trauma))]
        [RadioReportId("hea_c_010586", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        [RadioReportId("hea_c_010590", InstanceName = nameof(ExaminationFindingType.Hypoxia))]
        [RadioReportId("hea_c_010525", InstanceName = nameof(ExaminationFindingType.Infection))]
        [RadioReportId("hea_c_010594", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        [RadioReportId("hea_c_010543", InstanceName = nameof(ExaminationFindingType.Seizure))]
        [RadioReportId("hea_c_010568", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        SuspicionOf = 1,

		[RadioReportId("hea_c_010503", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        [RadioReportId("hea_c_010556", InstanceName = nameof(ExaminationFindingType.Trauma))]
        [RadioReportId("hea_c_010587", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        [RadioReportId("hea_c_010591", InstanceName = nameof(ExaminationFindingType.Hypoxia))]
        [RadioReportId("hea_c_010526", InstanceName = nameof(ExaminationFindingType.Infection))]
        [RadioReportId("hea_c_010595", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        [RadioReportId("hea_c_010544", InstanceName = nameof(ExaminationFindingType.Seizure))]
        [RadioReportId("hea_c_010569", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        Exclusion = 2,

		[RadioReportId("hea_c_010504", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        [RadioReportId("hea_c_010557", InstanceName = nameof(ExaminationFindingType.Trauma))]
        [RadioReportId("hea_c_010588", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        [RadioReportId("hea_c_010592", InstanceName = nameof(ExaminationFindingType.Hypoxia))]
        [RadioReportId("hea_c_010527", InstanceName = nameof(ExaminationFindingType.Infection))]
        [RadioReportId("hea_c_0105100", InstanceName = nameof(ExaminationFindingType.Neurodegeneration))]
        [RadioReportId("hea_c_010597", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        [RadioReportId("hea_c_010545", InstanceName = nameof(ExaminationFindingType.Seizure))]
        [RadioReportId("hea_c_010570", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        FollowupExamination = 3,

        [RadioReportId("hea_c_010579", InstanceName = nameof(ExaminationFindingType.Trauma))]
        Chronic = 4,

        [RadioReportId("hea_c_010596", InstanceName = nameof(ExaminationFindingType.Neoplasia))]
        ExclusionOfMetastasis = 5,        

        [RadioReportId("hea_c_010599", InstanceName = nameof(ExaminationFindingType.Neurodegeneration))]
        InitialDiagnostic = 6,

        [RadioReportId("hea_c_0105102", InstanceName = nameof(ExaminationFindingType.Perioperative))]
        Preoperative = 7,

        [RadioReportId("hea_c_0105103", InstanceName = nameof(ExaminationFindingType.Perioperative))]
        Postoperative = 8,

        [RadioReportId("hea_c_0105104", InstanceName = nameof(ExaminationFindingType.Perioperative))]
        Postinterventional = 9
    }
}