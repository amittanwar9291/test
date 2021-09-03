using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum TremorType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020270", InstanceName = nameof(ClinicalSymptomType.Tremor))]
        ActionTremor = 1,

        [RadioReportId("hea_c_020271", InstanceName = nameof(ClinicalSymptomType.Tremor))]
        RestTremor = 2
    }
}