using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum LocalizationSubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_0602168", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        FornixVaginaeParsAnterior = 1,

		[RadioReportId("pel_m_0602169", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        FornixVaginaeParsPosterior = 2,

        [RadioReportId("pel_m_0602171", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        MiddleThirdFrontWall = 3,

        [RadioReportId("pel_m_0602172", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        MiddleThirdBackWall = 4,

        [RadioReportId("pel_m_0602174", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        Introitus = 5,

        [RadioReportId("pel_m_0602175", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        LowerThirdFrontWall = 6,

        [RadioReportId("pel_m_0602176", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        LowerThirdBackWall = 7
    }
}
