using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
	public enum HematomaCharacterizationType : byte
	{
		None = 0,
        
		[RadioReportId("pel_m_0903242", InstanceName = nameof(BladderFindingType.Muscles))]
		Hyperacute = 1,
        
		[RadioReportId("pel_m_0903243", InstanceName = nameof(BladderFindingType.Muscles))]
		Acute = 2,
        
		[RadioReportId("pel_m_0903244", InstanceName = nameof(BladderFindingType.Muscles))]
		Subacute = 3,
        
		[RadioReportId("pel_m_0903245", InstanceName = nameof(BladderFindingType.Muscles))]
		ChronicOrganized = 4
	}
}
