using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum FisherScaleType : byte
    {
        None = 0,

        [RadioReportId("hea_c_090579", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Grade0 = 1,

        [RadioReportId("hea_c_090580", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Grade1 = 2,

        [RadioReportId("hea_c_090581", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Grade2 = 3,

        [RadioReportId("hea_c_090582", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Grade3 = 4,

        [RadioReportId("hea_c_090583", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        Grade4 = 5
    }
}
