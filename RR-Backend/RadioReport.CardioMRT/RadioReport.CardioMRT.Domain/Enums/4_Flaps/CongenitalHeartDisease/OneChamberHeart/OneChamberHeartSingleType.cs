using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum OneChamberHeartSingleType : byte
    {
        None = 0,

        [RadioReportId("car_m_040349", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        Functional = 1,

        [RadioReportId("car_m_040350", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        Anatomical = 2
    }
}