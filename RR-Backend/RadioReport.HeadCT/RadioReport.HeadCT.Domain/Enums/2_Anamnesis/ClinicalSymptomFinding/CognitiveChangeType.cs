using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum CognitiveChangeType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020223", InstanceName = nameof(ClinicalSymptomType.CognitiveChanges))]
        ImpairedConcentration = 1,

        [RadioReportId("hea_c_020224", InstanceName = nameof(ClinicalSymptomType.CognitiveChanges))]
        LossOfShortTermMemory = 2,

        [RadioReportId("hea_c_020225", InstanceName = nameof(ClinicalSymptomType.CognitiveChanges))]
        LossOfLongTermMemory = 3,

        [RadioReportId("hea_c_020226", InstanceName = nameof(ClinicalSymptomType.CognitiveChanges))]
        MemoryImpairment = 4
    }
}