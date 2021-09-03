using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    [Flags]
    public enum DirectionTypes : byte
    {
        
        None = 0,

        [RadioReportId("pel_m_070432", InstanceName = nameof(PelvicFloorFinding.LateralRectoceleDirectionType))]
        Right = 1,

        [RadioReportId("pel_m_070433", InstanceName = nameof(PelvicFloorFinding.LateralRectoceleDirectionType))]
        Left = 2

    }
}