using RadioReport.Common.Logic.Attributes;
using System;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum OsteomyelitisStageType : byte
    {
        None = 0,

        [RadioReportId("han_m_0402105", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Acute = 1,

        [RadioReportId("han_m_0402106", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chronic = 2,
    }
}