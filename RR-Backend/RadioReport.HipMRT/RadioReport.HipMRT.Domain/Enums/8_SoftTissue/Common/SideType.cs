using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080203")]
        Right = 1,

        [RadioReportId("hip_m_080204")]
        Left = 2
    }
}