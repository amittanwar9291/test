using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Constants;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040109", InstanceName = InstanceNames.Bones)]
        [RadioReportId("kne_m_080111", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        IDescribe = 1,

        [RadioReportId("kne_m_040110", InstanceName = InstanceNames.Bones)]
        [RadioReportId("kne_m_080112", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        IKnow = 2
    }
}
