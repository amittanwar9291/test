using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
	public enum MuscleAtrophyType : byte
	{
		None = 0,
        
		[RadioReportId("pel_m_0904211", InstanceName = nameof(BladderFindingType.Muscles))]
		Complete = 1,
        
		[RadioReportId("pel_m_0904212", InstanceName = nameof(BladderFindingType.Muscles))]
        Partial = 2
	}
}
