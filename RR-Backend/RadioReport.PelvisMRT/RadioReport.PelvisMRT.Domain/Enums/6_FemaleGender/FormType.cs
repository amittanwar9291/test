using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("pel_m_0603447", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Oval = 1,

		[RadioReportId("pel_m_0603448", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Round = 2,

		[RadioReportId("pel_m_0603449", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Irregular = 3,

        [RadioReportId("pel_m_0604201", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0604220", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        Ulcerated = 4,

        [RadioReportId("pel_m_0604202", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        Fungiform = 5,

        [RadioReportId("pel_m_0604203", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        CircularStenosing = 6,

        [RadioReportId("pel_m_0604475", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0604221", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        Lobulated = 7,

        [RadioReportId("pel_m_0604222", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        Septed = 8,

        [RadioReportId("pel_m_0604214", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        HorseshoeShape = 9
    }
}
