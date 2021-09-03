using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum UnipolarJointSurfaceType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060406", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        Femur = 1,

        [RadioReportId("kne_m_060407", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        Tibia = 2
    }
}