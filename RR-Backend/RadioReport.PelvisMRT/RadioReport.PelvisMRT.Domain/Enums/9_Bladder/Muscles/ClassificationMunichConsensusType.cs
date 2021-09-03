using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
	public enum ClassificationMunichConsensusType : byte
	{
		None = 0,
        
		[RadioReportId("pel_m_0904203", InstanceName = nameof(BladderFindingType.Muscles))]
        MuscularEdema = 1,
        
		[RadioReportId("pel_m_0904204", InstanceName = nameof(BladderFindingType.Muscles))]
        MuscleFibreRupture = 2,
        
		[RadioReportId("pel_m_0904205", InstanceName = nameof(BladderFindingType.Muscles))]
        MuscleBundleTear = 3,
        
		[RadioReportId("pel_m_0904206", InstanceName = nameof(BladderFindingType.Muscles))]
        MuscleTendonRupture = 4
	}
}
