using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum AorticValveType: byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020269", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        TAVI = 1,

        [RadioReportId("ang_c_020270", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        SurgicalAorticValveReconstruction = 2,
        
        [RadioReportId("ang_c_020271", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        SurgicalAorticValveReplacement = 3
    }
}
