using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.MedicalHistory.Common
{
    public enum LocalizationType : byte
    {
        None = 0,
     
        [RadioReportId("abd_c_020416")]
        Lobe = 1,
        
        [RadioReportId("abd_c_020417")]
        LiverSegments = 2
    }
}
