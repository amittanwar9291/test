using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum ShrinkingType : byte
    {
        None = 0,

        [RadioReportId("hea_c_090554", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        Circumscribed = 1,

        [RadioReportId("hea_c_090555", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        Generalized = 2
    }
}