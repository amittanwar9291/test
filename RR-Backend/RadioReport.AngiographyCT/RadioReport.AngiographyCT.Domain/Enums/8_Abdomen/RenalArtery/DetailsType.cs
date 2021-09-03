using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("ang_c_080302", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		TwoVesselSupply = 1,

		[RadioReportId("ang_c_080303", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		ThreeVesselSupply = 2,

		[RadioReportId("ang_c_080304", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        EarlyBifurcationOfTheRenalArtery = 3,

		[RadioReportId("ang_c_080305", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        InfOrSupPoleArtery = 4,

        [RadioReportId("ang_c_080309", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        PelvicKidney = 5,

        [RadioReportId("ang_c_080311", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        DuplexKidney = 6,

        [RadioReportId("ang_c_080312", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        HorseshoeKidney = 7,

        [RadioReportId("ang_c_080313", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        MulticysticDysplasticKidney = 8,

        [RadioReportId("ang_c_080314", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        RenalAgenesis = 9
    }
}
