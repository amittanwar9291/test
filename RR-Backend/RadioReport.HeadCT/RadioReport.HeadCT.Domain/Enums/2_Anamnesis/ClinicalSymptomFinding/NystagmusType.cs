using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Anamnesis
{
    public enum NystagmusType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0202104", InstanceName = nameof(ClinicalSymptomType.Nystagmus))]
        Acquired = 1,

        [RadioReportId("hea_c_0202105", InstanceName = nameof(ClinicalSymptomType.Nystagmus))]
        Congenital = 2
    }
}