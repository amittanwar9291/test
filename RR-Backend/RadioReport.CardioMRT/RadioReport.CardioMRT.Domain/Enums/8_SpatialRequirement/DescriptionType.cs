using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("car_m_080107")]
        IDescribe = 1,

        [RadioReportId("car_m_080108")]
        IKnow = 2
    }
}
