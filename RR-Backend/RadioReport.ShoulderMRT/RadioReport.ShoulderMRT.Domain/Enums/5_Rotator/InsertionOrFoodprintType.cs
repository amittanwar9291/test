using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum InsertionOrFootprintType : byte
    {
        None = 0,
        
        [RadioReportId("sho_m_0504215", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        LesionPASTA = 1,

        [RadioReportId("sho_m_0504217", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        ReversedPASTA = 2
    }
}