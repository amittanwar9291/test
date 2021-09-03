using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum MainVentricleType : byte
    {
        None = 0,

        [RadioReportId("car_m_040451", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart), CustomConditionName = nameof(OneChamberHeartSingleType.Functional))]
        [RadioReportId("car_m_040457", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart), CustomConditionName = nameof(OneChamberHeartSingleType.Anatomical))]
        Left = 1,

        [RadioReportId("car_m_040452", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart), CustomConditionName = nameof(OneChamberHeartSingleType.Functional))]
        [RadioReportId("car_m_040458", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart), CustomConditionName = nameof(OneChamberHeartSingleType.Anatomical))]
        Right = 2
    }
}