using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum JointSurfaceType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060405", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        Unipolar = 1,

        [RadioReportId("kne_m_060408", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        Bipolar = 2
    }
}