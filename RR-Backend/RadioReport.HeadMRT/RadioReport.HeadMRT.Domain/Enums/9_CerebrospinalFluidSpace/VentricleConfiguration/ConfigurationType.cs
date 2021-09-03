using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum ConfigurationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_090552", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        Widening = 1,

        [RadioReportId("hea_m_090553", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        Shrinking = 2,

        [RadioReportId("hea_m_090556", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        Asymmetry = 3
    }
}