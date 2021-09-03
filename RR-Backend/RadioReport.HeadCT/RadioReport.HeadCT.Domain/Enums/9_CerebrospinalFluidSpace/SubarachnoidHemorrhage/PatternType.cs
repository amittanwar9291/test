using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum PatternType : byte
    {
        None = 0,

        [RadioReportId("hea_c_090564", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Focal = 1,

        [RadioReportId("hea_c_090566", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Diffuse = 2
    }
}
