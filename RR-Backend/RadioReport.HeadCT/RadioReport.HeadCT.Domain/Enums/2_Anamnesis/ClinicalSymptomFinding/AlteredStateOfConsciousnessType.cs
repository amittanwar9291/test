using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum AlteredStateOfConsciousnessType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020228", InstanceName = nameof(ClinicalSymptomType.AlteredStateOfConsciousness))]
        Somnolence = 1,

        [RadioReportId("hea_c_020229", InstanceName = nameof(ClinicalSymptomType.AlteredStateOfConsciousness))]
        Sopor = 2,

        [RadioReportId("hea_c_020230", InstanceName = nameof(ClinicalSymptomType.AlteredStateOfConsciousness))]
        Coma = 3,

        [RadioReportId("hea_c_020231", InstanceName = nameof(ClinicalSymptomType.AlteredStateOfConsciousness))]
        Delirium = 4,

        [RadioReportId("hea_c_020232", InstanceName = nameof(ClinicalSymptomType.AlteredStateOfConsciousness))]
        Agitation = 5
    }
}