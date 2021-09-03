using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum LowerLimbType: byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020329", InstanceName = nameof(PriorInterventionsFinding.LowerLimbOriginType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020425", InstanceName = nameof(PriorInterventionsFinding.LowerLimbTargetVesselType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        Axillary = 1,

        [RadioReportId("ang_c_020330", InstanceName = nameof(PriorInterventionsFinding.LowerLimbOriginType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020426", InstanceName = nameof(PriorInterventionsFinding.LowerLimbTargetVesselType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        Aortic = 2,
        
        [RadioReportId("ang_c_020331", InstanceName = nameof(PriorInterventionsFinding.LowerLimbOriginType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020427", InstanceName = nameof(PriorInterventionsFinding.LowerLimbTargetVesselType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        Iliac = 3,
        
        [RadioReportId("ang_c_020332", InstanceName = nameof(PriorInterventionsFinding.LowerLimbOriginType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020428", InstanceName = nameof(PriorInterventionsFinding.LowerLimbTargetVesselType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        Femoral = 4,
        
        [RadioReportId("ang_c_020333", InstanceName = nameof(PriorInterventionsFinding.LowerLimbOriginType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020429", InstanceName = nameof(PriorInterventionsFinding.LowerLimbTargetVesselType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        Popliteal = 5,
        
        [RadioReportId("ang_c_020334", InstanceName = nameof(PriorInterventionsFinding.LowerLimbOriginType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020430", InstanceName = nameof(PriorInterventionsFinding.LowerLimbTargetVesselType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        Crural = 6
    }
}
