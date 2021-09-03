using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.MedicalHistory.VascularDiagnostics
{
    public enum PathologyType : byte
    {
        None = 0,
        
        [RadioReportId("abd_c_020446", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Occlusion = 1,
        
        [RadioReportId("abd_c_020451", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Anastomosis = 2,
        
        [RadioReportId("abd_c_020452", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Dissection = 3,
        
        [RadioReportId("abd_c_020453", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Ischemia = 4,
        
        [RadioReportId("abd_c_020454", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Aneurysm = 5,
        
        [RadioReportId("abd_c_020455", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        PAU = 6,
        
        [RadioReportId("abd_c_020456", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Aortitis = 7,
        
        [RadioReportId("abd_c_020457", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        Vasculitis = 8
    }
}
