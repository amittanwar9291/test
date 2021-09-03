using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum VariantType : byte
    {
        None = 0,

        [RadioReportId("car_m_040418", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        QuadricuspidValve = 1,

        [RadioReportId("car_m_040419", InstanceName = nameof(HeartValveFindingType.AorticValve))]
        BicuspidValve = 2
    }
}