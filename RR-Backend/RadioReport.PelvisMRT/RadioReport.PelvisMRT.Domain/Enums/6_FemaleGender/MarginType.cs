using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060360", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060457", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060307", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0602437", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603151", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602437", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604195", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0604195", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0603151", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0603151", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        Circumscribed = 1,

		[RadioReportId("pel_m_060361", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060458", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060306", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0602438", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603152", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602438", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604196", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0604196", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0603152", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0603152", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        NonCircumscribed = 2
	}
}
