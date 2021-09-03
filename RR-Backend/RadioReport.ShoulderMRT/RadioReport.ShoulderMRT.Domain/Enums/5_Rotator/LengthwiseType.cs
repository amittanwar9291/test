using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LengthwiseType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0504211", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        MyotendinousJunction = 1,

        [RadioReportId("sho_m_0504212", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Proximal = 2,

        [RadioReportId("sho_m_0504213", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        InsertionOrFootprint = 3
    }
}
