using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Cortex
{
    public enum CorticalThinningType : byte
    {
        None = 0,

        [RadioReportId("hea_c_060428", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0602220", InstanceName = nameof(CortexFindingType.Diffuse))]
        Generalized = 1,

        [RadioReportId("hea_c_060429", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0602221", InstanceName = nameof(CortexFindingType.Diffuse))]
        Regional = 2
    }
}
