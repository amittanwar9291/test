using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
    public enum PathologyType : byte
	{
		None = 0,

        [RadioReportId("ang_m_060347", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        AorticDissection = 1,

        [RadioReportId("ang_m_060348", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        IntramuralAorticHematomaIMH = 2,

        [RadioReportId("ang_m_060349", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        PenetratingArterioscleroticAorticUlcerPAU = 3
    }
}
