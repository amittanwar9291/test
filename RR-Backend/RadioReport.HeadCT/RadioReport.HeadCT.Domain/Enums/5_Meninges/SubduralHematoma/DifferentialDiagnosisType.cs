using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Meninges
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("hea_c_050464", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        SubduralHygroma = 1,

        [RadioReportId("hea_c_0504249", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        EpiduralHematoma = 2
    }
}
