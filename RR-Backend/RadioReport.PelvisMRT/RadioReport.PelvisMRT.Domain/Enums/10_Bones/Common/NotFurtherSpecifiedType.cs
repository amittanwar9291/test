using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum NotFurtherSpecifiedType : byte
    {
        None = 0,

        [RadioReportId("pel_m_100411", InstanceName = nameof(BonesFinding.PelvicFractureNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100534", InstanceName = nameof(BonesFinding.FsfNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100411", InstanceName = nameof(BonesFinding.FpfNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100411", InstanceName = nameof(BonesFinding.AcetabularFractureNotFurtherSpecifiedType))]
        SuspicionOf = 1,

        [RadioReportId("pel_m_100412", InstanceName = nameof(BonesFinding.PelvicFractureNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100535", InstanceName = nameof(BonesFinding.FsfNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100412", InstanceName = nameof(BonesFinding.FpfNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100412", InstanceName = nameof(BonesFinding.AcetabularFractureNotFurtherSpecifiedType))]
        FractureOlderConsolidated = 2,

        [RadioReportId("pel_m_100413", InstanceName = nameof(BonesFinding.PelvicFractureNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100413", InstanceName = nameof(BonesFinding.AcetabularFractureNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100413", InstanceName = nameof(BonesFinding.FpfNotFurtherSpecifiedType))]
        [RadioReportId("pel_m_100536", InstanceName = nameof(BonesFinding.FsfNotFurtherSpecifiedType))]
        FractureOlderNotConsolidated = 3
    }
}
