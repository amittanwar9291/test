using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum LesionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_070209", InstanceName = nameof(PelvicFloorFinding.PuborectalisLesionType))]
        [RadioReportId("pel_m_070315", InstanceName = nameof(PelvicFloorFinding.MIliococcygeusLesionType))]
        [RadioReportId("pel_m_070410", InstanceName = nameof(PelvicFloorFinding.MPubococygeusLesionType))]
        Thinning = 1,

        [RadioReportId("pel_m_070210", InstanceName = nameof(PelvicFloorFinding.PuborectalisLesionType))]
        [RadioReportId("pel_m_070316", InstanceName = nameof(PelvicFloorFinding.MIliococcygeusLesionType))]
        [RadioReportId("pel_m_070411", InstanceName = nameof(PelvicFloorFinding.MPubococygeusLesionType))]
        Tear = 2,

        [RadioReportId("pel_m_070211", InstanceName = nameof(PelvicFloorFinding.PuborectalisLesionType))]
        [RadioReportId("pel_m_070317", InstanceName = nameof(PelvicFloorFinding.MIliococcygeusLesionType))]
        [RadioReportId("pel_m_070412", InstanceName = nameof(PelvicFloorFinding.MPubococygeusLesionType))]
        Avulsion = 3

    }
}