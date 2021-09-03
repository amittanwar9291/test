using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080233", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        SigmoidDiverticulosis = 1,

        [RadioReportId("pel_m_080234", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        Diverticulitis = 2
    }
}
