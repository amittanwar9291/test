using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum JointSurfaceSubType : byte
    {
        None = 0,
        
        [RadioReportId("spi_m_090308", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        Totally = 1,

        [RadioReportId("spi_m_090309", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        Partial = 2,

        [RadioReportId("spi_m_090310", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        Periarticular = 3
    }
}
