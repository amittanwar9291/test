using RadioReport.Common.Logic.Attributes;
using System;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum OsteomyelitisDifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("han_m_0405121", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        EwingSarcoma = 1,

        [RadioReportId("han_m_0405122", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chondroblastoma = 2,
    }
}