using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum PleuraFormType : byte
    {
        None = 0,
        [RadioReportId("tho_m_060302", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Biconvex = 1,
        [RadioReportId("tho_m_060303", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Concave = 2
    }
}
