using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum RenalInfarctionCharacterizationType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070585", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        AcuteInfarction = 1,
        
        [RadioReportId("abd_m_070586", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        ChronicInfarct = 2
    }
}
