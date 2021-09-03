using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum AsymmetryType : byte
    {
        None = 0,

        [RadioReportId("hea_c_090557", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        RightEmphasized = 1,

        [RadioReportId("hea_c_090558", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        LeftEmphasized = 2
    }
}