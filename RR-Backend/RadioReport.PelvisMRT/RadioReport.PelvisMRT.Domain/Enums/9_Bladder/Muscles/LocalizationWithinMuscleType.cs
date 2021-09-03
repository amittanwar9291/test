using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
	public enum LocalizationWithinMuscleType : byte
	{
		None = 0,
        
		[RadioReportId("pel_m_0903233", InstanceName = nameof(BladderFindingType.Muscles))]
		ProximalEnthesis = 1,
        
		[RadioReportId("pel_m_0903234", InstanceName = nameof(BladderFindingType.Muscles))]
        ProximalMusculotendinousTransition = 2,
        
		[RadioReportId("pel_m_0903235", InstanceName = nameof(BladderFindingType.Muscles))]
        ProximalThird = 3,
        
		[RadioReportId("pel_m_0903236", InstanceName = nameof(BladderFindingType.Muscles))]
        MiddleThird = 4,
        
		[RadioReportId("pel_m_0903237", InstanceName = nameof(BladderFindingType.Muscles))]
        DistalThird = 5,
        
		[RadioReportId("pel_m_0903238", InstanceName = nameof(BladderFindingType.Muscles))]
		DistalMusculotendinousTransitionInsertion = 6,
        
		[RadioReportId("pel_m_0903239", InstanceName = nameof(BladderFindingType.Muscles))]
        DistalEnthesis = 7
	}
}
