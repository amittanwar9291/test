using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum PerforationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0804126", InstanceName = nameof(RectumFinding.SigmoidDiverticularDiseasePerforationType))]
        [RadioReportId("pel_m_080261", InstanceName = nameof(RectumFinding.SigmaMassPerforationType))]
        CoveredPerforation = 1,

        [RadioReportId("pel_m_0804127", InstanceName = nameof(RectumFinding.SigmoidDiverticularDiseasePerforationType))]
        [RadioReportId("pel_m_080262", InstanceName = nameof(RectumFinding.SigmaMassPerforationType))]
        FreePerforation = 2
    }
}
