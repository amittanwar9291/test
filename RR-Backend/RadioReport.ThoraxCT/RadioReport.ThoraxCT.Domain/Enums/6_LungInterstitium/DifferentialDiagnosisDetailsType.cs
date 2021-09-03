using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DifferentialDiagnosisDetailsType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603160", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604123", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605123", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        Sarcoidosis = 1,

        [RadioReportId("tho_c_0603164", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604127", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605127", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        Berylliosis = 2,

        [RadioReportId("tho_c_0603165", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604128", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605128", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        Lymphangioleiomyomatosis = 3,

        [RadioReportId("tho_c_0603166", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604129", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605129", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        PulmonaryLangerhansCellHistiocytosis = 4,

        [RadioReportId("tho_c_0603167", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604130", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605130", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        IdiopathicEosinophilicPneumonia = 5,

        [RadioReportId("tho_c_0603168", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604131", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605131", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        PulmonaryVasculitis = 6,

        [RadioReportId("tho_c_0603169", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604209", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605141", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        Infectious = 7,

        [RadioReportId("tho_c_0603171", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType1))]
        [RadioReportId("tho_c_0604211", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType2))]
        [RadioReportId("tho_c_0605143", InstanceName = nameof(LungInterstitiumPage.DifferentialDiagnosisDetailsType3))]
        Follicular = 8
    }
}