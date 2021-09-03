using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LocalizationLengthwiseType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0504228", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        MyotendinousJunction = 1,

        [RadioReportId("sho_m_0504229", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Proximal = 2,

        [RadioReportId("sho_m_0504230", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        InsertionOrFootprint = 3
    }
}
