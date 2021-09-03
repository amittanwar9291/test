using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
    public enum DensityType : byte
    {
        None = 0,

        [RadioReportId("abd_c_050515", InstanceName = nameof(SpleenFindingType.Mass))]
        FatIsodens = 1,

        [RadioReportId("abd_c_050516", InstanceName = nameof(SpleenFindingType.Mass))]
        LiquidIsodens = 2,

        [RadioReportId("abd_c_050517", InstanceName = nameof(SpleenFindingType.Mass))]
        SoftTissueIsodens = 3

    }
}