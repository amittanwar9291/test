using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum TranspositionOfTheGreatArteriesType : byte
    {
        None = 0,

        [RadioReportId("car_m_040346", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries))]
        LevoTransposition = 1,

        [RadioReportId("car_m_040347", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries))]
        DextroTransposition = 2
    }
}