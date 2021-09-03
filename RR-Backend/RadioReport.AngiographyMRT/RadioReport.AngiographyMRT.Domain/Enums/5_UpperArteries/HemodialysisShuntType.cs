using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.UpperArteries
{
	public enum HemodialysisShuntType : byte
	{
		None = 0,

		[RadioReportId("ang_m_050438", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050438", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050438", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
		BresciaCiminoFistula = 1,

		[RadioReportId("ang_m_050440", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050440", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050440", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        FistulaInTheTabatiereRegion = 2,

		[RadioReportId("ang_m_050442", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050442", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050442", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        BrachiocephalicAVFistula = 3,

		[RadioReportId("ang_m_050443", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050443", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050443", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        BrachiobasilicAVFistula = 4
	}
}
