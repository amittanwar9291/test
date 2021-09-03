using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum ExpansionIntoSpinalCanalType : byte
	{
		None = 0,

		[RadioReportId("spi_c_050502", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050404", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050502", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050404", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050502", InstanceName = nameof(DiscFindingType.Migration))]
        Slight = 1,

		[RadioReportId("spi_c_050503", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050405", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050503", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050405", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050503", InstanceName = nameof(DiscFindingType.Migration))]
        Moderate = 2,

		[RadioReportId("spi_c_050504", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050406", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050504", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050406", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050504", InstanceName = nameof(DiscFindingType.Migration))]
        Distinct = 3
	}
}
