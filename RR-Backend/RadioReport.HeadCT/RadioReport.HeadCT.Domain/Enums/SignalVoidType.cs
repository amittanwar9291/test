using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum SignalVoidType : byte
    {
        None = 0,

        [RadioReportId("hea_c_090532", InstanceName = InstanceNames.CerebrospinalFluidSpace, CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090480", InstanceName = InstanceNames.CerebrospinalFluidSpace, CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Calcification = 1,

        [RadioReportId("hea_c_090533", InstanceName = InstanceNames.CerebrospinalFluidSpace, CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090481", InstanceName = InstanceNames.CerebrospinalFluidSpace, CustomConditionName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Blood = 2
    }
}
