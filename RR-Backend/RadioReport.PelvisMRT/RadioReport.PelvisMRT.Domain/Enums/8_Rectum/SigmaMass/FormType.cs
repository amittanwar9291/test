using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080440", InstanceName = nameof(RectumFindingType.SigmaMass))]
        Nodular = 1,
        
        [RadioReportId("pel_m_080441", InstanceName = nameof(RectumFindingType.SigmaMass))]
        Multinodular = 2
    }
}
