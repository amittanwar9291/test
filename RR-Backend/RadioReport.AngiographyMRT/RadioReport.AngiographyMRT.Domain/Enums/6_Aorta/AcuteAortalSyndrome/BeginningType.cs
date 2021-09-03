using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
    public enum BeginningType : byte
    {
        None = 0,

        [RadioReportId("ang_m_060425", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        AortaAscendens = 1,

        [RadioReportId("ang_m_060426", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        DistalToTheOriginOfLeftSubclavianArtery = 2
    }
}
