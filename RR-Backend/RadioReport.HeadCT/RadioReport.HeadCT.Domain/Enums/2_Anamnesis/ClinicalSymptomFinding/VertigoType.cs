using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum VertigoType : byte
    {
        None = 0,
        
        [RadioReportId("hea_c_020209", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        NonSpecificVertigo = 1,

        [RadioReportId("hea_c_020210", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        RotaryVertigo = 2,

        [RadioReportId("hea_c_020211", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        StaggeringVertigo = 3,

        [RadioReportId("hea_c_020212", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        PositionalVertigo = 4,

        [RadioReportId("hea_c_020213", InstanceName = nameof(ClinicalSymptomType.Vertigo))]
        CentralVertigo = 5
    }
}