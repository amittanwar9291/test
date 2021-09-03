using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum SinusVenosusType : byte
    {
        None = 0,

        [RadioReportId("car_m_040341", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        VenaCavaSuperiorType = 1,

        [RadioReportId("car_m_040342", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        VenaCavaInferiorType = 2
    }
}