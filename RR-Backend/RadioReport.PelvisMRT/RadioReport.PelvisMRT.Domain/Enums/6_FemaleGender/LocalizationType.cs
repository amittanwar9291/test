using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_0602134", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
		AnteriorCervicalLip = 1,

		[RadioReportId("pel_m_0602135", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
		PosteriorCervicalLip = 2,

        [RadioReportId("pel_m_0602167", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        UpperThird = 3,

        [RadioReportId("pel_m_0602170", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        MiddleThird = 4,

        [RadioReportId("pel_m_0602173", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        LowerThird = 5,

        [RadioReportId("pel_m_0602188", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602188", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Central = 6,

        [RadioReportId("pel_m_0602189", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602189", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        LabiaMajora = 7,

        [RadioReportId("pel_m_0602192", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602192", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        LabiaMinora = 8,

        [RadioReportId("pel_m_0602195", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602195", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Clitoris = 9,

        [RadioReportId("pel_m_0602196", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602196", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Perineum = 10,

        [RadioReportId("pel_m_0602197", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602197", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Paraurethral = 11,

        [RadioReportId("pel_m_0602213", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        Generalized = 12
    }
}
