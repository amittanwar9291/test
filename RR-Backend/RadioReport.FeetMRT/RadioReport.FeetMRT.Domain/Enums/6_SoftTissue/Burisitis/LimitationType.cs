using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum LimitationType : byte
    {
        None = 0,

        [RadioReportId("anc_m_0603119", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        IllDefined = 1, 

        [RadioReportId("anc_m_0603120", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        Well = 2
    }
}