using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070302", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		TwoVesselSupply = 1,

		[RadioReportId("ang_m_070303", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		ThreeVesselSupply = 2,

		[RadioReportId("ang_m_070304", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        EarlyBifurcationOfTheRenalArtery = 3,

		[RadioReportId("ang_m_070305", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        InfOrSupPoleArtery = 4,

        [RadioReportId("ang_m_070309", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        PelvicKidney = 5,

        [RadioReportId("ang_m_070311", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        DuplexKidney = 6,

        [RadioReportId("ang_m_070312", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        HorseshoeKidney = 7,

        [RadioReportId("ang_m_070313", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        MulticysticDysplasticKidney = 8,

        [RadioReportId("ang_m_070314", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        RenalAgenesis = 9
    }
}
