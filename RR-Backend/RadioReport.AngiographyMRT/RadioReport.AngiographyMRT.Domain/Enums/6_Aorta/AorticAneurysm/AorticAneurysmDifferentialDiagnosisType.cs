using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
    public enum AorticAneurysmDifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("ang_m_060501", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        BicuspidAorticValve = 1,

        [RadioReportId("ang_m_060502", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        MarfanSyndrome = 2
    }
}
