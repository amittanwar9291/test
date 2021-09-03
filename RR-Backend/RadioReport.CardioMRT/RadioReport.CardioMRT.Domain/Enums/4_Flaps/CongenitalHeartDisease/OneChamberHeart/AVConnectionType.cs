using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum AVConnectionType : byte
    {
		None = 0,

        [RadioReportId("car_m_040460", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        DoubleInletDILV = 1,

        [RadioReportId("car_m_040461", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        SingleInlet = 2,

        [RadioReportId("car_m_040462", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        CommonInlet = 3,

        [RadioReportId("car_m_040463", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        DoubleInletDIRV = 4
	}
}