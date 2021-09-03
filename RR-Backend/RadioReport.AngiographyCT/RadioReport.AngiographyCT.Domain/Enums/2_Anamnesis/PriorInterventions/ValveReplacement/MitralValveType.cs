using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum MitralValveType: byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020340", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        SurgicalMitralValveReconstruction = 1,

        [RadioReportId("ang_c_020341", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        SurgicalMitralValveReplacement = 2,
        
        [RadioReportId("ang_c_020342", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        ReconstructionWithClipProcedure = 3
    }
}
