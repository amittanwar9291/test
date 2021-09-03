using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum PhaseType : byte
    {
        None = 0,

        [RadioReportId("pel_m_070224", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensioToPlcPhaseType))]
        [RadioReportId("pel_m_070330", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensionInReferenceToMlpPhaseType))]
        [RadioReportId("pel_m_0702109", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocaudalExtensionToPclPhaseType))]
        [RadioReportId("pel_m_0703111", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocaudalExtensionToMplPhaseType))]
        [RadioReportId("pel_m_070265", InstanceName = nameof(PelvicFloorFinding.EnterocelePhaseType))]
        [RadioReportId("pel_m_070340", InstanceName = nameof(PelvicFloorFinding.PeritoneocelePhaseType))]
        [RadioReportId("pel_m_070425", InstanceName = nameof(PelvicFloorFinding.SigmoidocelePhaseType))]
        [RadioReportId("pel_m_0702114", InstanceName = nameof(PelvicFloorFinding.AnteriorRectocelePhaseType))]
        Rest = 1,

        [RadioReportId("pel_m_070225", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensioToPlcPhaseType))]
        [RadioReportId("pel_m_070331", InstanceName = nameof(PelvicFloorFinding.CraniocaudalExtensionInReferenceToMlpPhaseType))]
        [RadioReportId("pel_m_0702110", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocaudalExtensionToPclPhaseType))]
        [RadioReportId("pel_m_0703112", InstanceName = nameof(PelvicFloorFinding.MiddleCraniocaudalExtensionToMplPhaseType))]
        [RadioReportId("pel_m_070266", InstanceName = nameof(PelvicFloorFinding.EnterocelePhaseType))]
        [RadioReportId("pel_m_070341", InstanceName = nameof(PelvicFloorFinding.PeritoneocelePhaseType))]
        [RadioReportId("pel_m_070426", InstanceName = nameof(PelvicFloorFinding.SigmoidocelePhaseType))]
        [RadioReportId("pel_m_0702115", InstanceName = nameof(PelvicFloorFinding.AnteriorRectocelePhaseType))]
        Defecation = 2

    }
}