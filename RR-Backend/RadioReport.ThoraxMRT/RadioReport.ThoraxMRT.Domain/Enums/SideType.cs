using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("tho_m_050427", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        [RadioReportId("tho_m_070203", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        [RadioReportId("tho_m_070206", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        [RadioReportId("tho_m_070235", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070235", InstanceName = nameof(BonesFindingType.ScapularMass))]
        Right = 1,

        [RadioReportId("tho_m_050428", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        [RadioReportId("tho_m_070204", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        [RadioReportId("tho_m_070207", InstanceName = nameof(BonesFindingType.ScapularFracture))]
        [RadioReportId("tho_m_070236", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070236", InstanceName = nameof(BonesFindingType.ScapularMass))]
        Left = 2
    }
}
