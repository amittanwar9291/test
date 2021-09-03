using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090111", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        IDescribe = 1,

        [RadioReportId("pel_m_090112", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        IKnow = 2
    }
}
