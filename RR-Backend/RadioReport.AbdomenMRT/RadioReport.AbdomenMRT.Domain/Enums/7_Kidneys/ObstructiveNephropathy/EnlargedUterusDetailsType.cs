using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum EnlargedUterusDetailsType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_0704102", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        DuringPregnancy = 1,
        
        [RadioReportId("abd_m_0704103", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        AfterPregnancy = 2
    }
}
