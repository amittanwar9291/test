using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum PatternType : byte
    {
        None = 0,

        [RadioReportId("hea_m_090564", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Focal = 1,

        [RadioReportId("hea_m_090565", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Diffuse = 2
    }
}
