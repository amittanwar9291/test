using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.UpperArteries
{
	public enum HemodialysisShuntType : byte
	{
		None = 0,

		[RadioReportId("ang_c_060438", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060438", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060438", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
		BresciaCiminoFistula = 1,

		[RadioReportId("ang_c_060440", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060440", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060440", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        FistulaInTheTabatiereRegion = 2,

		[RadioReportId("ang_c_060442", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060442", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060442", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        BrachiocephalicAVFistula = 3,

		[RadioReportId("ang_c_060443", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060443", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060443", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        BrachiobasilicAVFistula = 4
	}
}
