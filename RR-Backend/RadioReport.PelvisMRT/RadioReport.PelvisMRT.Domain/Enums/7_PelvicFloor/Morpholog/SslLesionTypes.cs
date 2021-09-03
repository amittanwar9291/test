using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    [Flags]
    public enum SslLesionTypes : byte
    {
        
        None = 0,

        [RadioReportId("pel_m_070505", InstanceName = nameof(PelvicFloorFinding.SslLesionOuterSphincterMuscleType))]
        [RadioReportId("pel_m_070510", InstanceName = nameof(PelvicFloorFinding.SslLesionInnerSphincterMuscleType))]
        Strain = 1,

        [RadioReportId("pel_m_070506", InstanceName = nameof(PelvicFloorFinding.SslLesionOuterSphincterMuscleType))]
        [RadioReportId("pel_m_070511", InstanceName = nameof(PelvicFloorFinding.SslLesionInnerSphincterMuscleType))]
        Rupture = 2

    }
}