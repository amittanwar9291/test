using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.MedicalHistory.Common
{
    public enum DetailsType : byte
    {
        None = 0,

        [RadioReportId("abd_c_020378", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020384", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020393", InstanceName  = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020314", InstanceName  = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_0203100", InstanceName = nameof(MedicalHistoryIndicationType.Cyst))]
        [RadioReportId("abd_c_020323", InstanceName  = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020372", InstanceName  = nameof(MedicalHistoryIndicationType.FistulaFormation))]
        [RadioReportId("abd_c_020372", InstanceName  = nameof(MedicalHistoryIndicationType.Ileus))]
        [RadioReportId("abd_c_0203108", InstanceName = nameof(MedicalHistoryIndicationType.Concretion))]
        [RadioReportId("abd_c_020365", InstanceName  = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020341", InstanceName  = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020360", InstanceName  = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        SuspicionOf = 1,

        [RadioReportId("abd_c_020379", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020385", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020394", InstanceName  = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020315", InstanceName  = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_0203101", InstanceName = nameof(MedicalHistoryIndicationType.Cyst))]
        [RadioReportId("abd_c_020324", InstanceName  = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020373", InstanceName  = nameof(MedicalHistoryIndicationType.FistulaFormation))]
        [RadioReportId("abd_c_020373", InstanceName  = nameof(MedicalHistoryIndicationType.Ileus))]
        [RadioReportId("abd_c_0203109", InstanceName = nameof(MedicalHistoryIndicationType.Concretion))]
        [RadioReportId("abd_c_020366", InstanceName  = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020342", InstanceName  = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020361", InstanceName  = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Exclusion = 2,

        [RadioReportId("abd_c_020380", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020386", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020395", InstanceName  = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020316", InstanceName  = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_0203102", InstanceName = nameof(MedicalHistoryIndicationType.Cyst))]
        [RadioReportId("abd_c_020325", InstanceName  = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020374", InstanceName  = nameof(MedicalHistoryIndicationType.FistulaFormation))]
        [RadioReportId("abd_c_020374", InstanceName  = nameof(MedicalHistoryIndicationType.Ileus))]
        [RadioReportId("abd_c_0203110", InstanceName = nameof(MedicalHistoryIndicationType.Concretion))]
        [RadioReportId("abd_c_020367", InstanceName  = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020343", InstanceName  = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020362", InstanceName  = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        FollowUp = 3
    }
}
