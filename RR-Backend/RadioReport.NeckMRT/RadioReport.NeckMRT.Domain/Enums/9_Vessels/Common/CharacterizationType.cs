using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum CharacterizationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_0904194", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090572", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090587", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		DissectingAneurysm = 1,

		[RadioReportId("nec_m_0904195", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090573", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090588", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		FalseAneurysm = 2,

		[RadioReportId("nec_m_0904196", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090574", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090589", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		TrueAneurysm = 3
	}
}