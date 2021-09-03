using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum PhaseType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060530", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0602106", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        EarlyArterial = 1,

        [RadioReportId("abd_m_060531", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0602107", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        PortalVenous = 2,

        [RadioReportId("abd_m_060532", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0602108", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        LatePhase = 3
    }
}