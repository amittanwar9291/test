using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class PriorInterventionsFinding: FindingBase, IRadioReportIdConditionEvaluator 
    {
        public override string InstanceName => PriorInterventionsFindingType.ToString();
        
        [RadioReportId("ang_c_020109")]
        public PriorInterventionsFindingType PriorInterventionsFindingType { get; set; }
        
        #region Prior interventions - Thrombectomy
        
        [RadioReportId("ang_c_020245", InstanceName = nameof(PriorInterventionsFindingType.Thrombectomy))]
        public bool IsMechanical { get; set; }
        
        [RadioReportId("ang_c_020246", InstanceName = nameof(PriorInterventionsFindingType.Thrombectomy))]
        public bool IsAspiration { get; set; }
        
        #endregion
        #region Prior interventions - Bypass
        
        [RadioReportId("ang_c_020248", InstanceName = nameof(PriorInterventionsFindingType.Bypass))]
        public bool IsCoronary { get; set; }
        
        [RadioReportId("ang_c_020250", InstanceName = nameof(PriorInterventionsFindingType.Bypass))]
        public bool IsCABG { get; set; }
        
        [RadioReportId("ang_c_020327", InstanceName = nameof(PriorInterventionsFindingType.Bypass))]
        public bool IsLowerLimb { get; set; }
        
        [RadioReportId("ang_c_020424", InstanceName = nameof(LowerLimbOriginType), IsExportable = false)]
        public LowerLimbType LowerLimbOriginType { get; set; }

        [RadioReportId("ang_c_020335-l", InstanceName = InstanceNames.Anamnesis + nameof(OriginCruralSideType), IsExportable = false)]
        public SideType OriginCruralSideType { get; set; }
        
        [RadioReportId("ang_c_020327", InstanceName = nameof(LowerLimbTargetVesselType), IsExportable = false)]
        public LowerLimbType LowerLimbTargetVesselType { get; set; }

        [RadioReportId("ang_c_020431-l", InstanceName = InstanceNames.Anamnesis + nameof(TargetVesselCruralSideType), IsExportable = false)]
        public SideType TargetVesselCruralSideType { get; set; }
        
        #endregion
        #region Prior interventions - Embolization
        
        [RadioReportId("ang_c_020253", InstanceName = nameof(PriorInterventionsFindingType.Embolization))]
        public bool IsCoiling { get; set; }
        
        [RadioReportId("ang_c_020254", InstanceName = nameof(PriorInterventionsFindingType.Embolization))]
        public bool IsPlug { get; set; }
        
        [RadioReportId("ang_c_020255", InstanceName = nameof(PriorInterventionsFindingType.Embolization))]
        public bool IsLiquidEmbolicAgents { get; set; }
        
        [RadioReportId("ang_c_020256", InstanceName = nameof(PriorInterventionsFindingType.Embolization))]
        public bool IsSclerosantAgent { get; set; }
        
        [RadioReportId("ang_c_020257", InstanceName = nameof(PriorInterventionsFindingType.Embolization))]
        public bool IsEmbolizationParticle { get; set; }
        
        #endregion
        #region Prior interventions - Partial lung resection

        [RadioReportId("ang_c_020260", InstanceName = nameof(PriorInterventionsFindingType.PartialLungResection))]
        public bool IsPartialLungResectionSideRight { get; set; }
        
        [RadioReportId("ang_c_020261", InstanceName = nameof(PriorInterventionsFindingType.PartialLungResection))]
        public bool IsPartialLungResectionSideLeft { get; set; }
        
        #endregion
        #region Prior interventions - Endovascular aortic repair
        
        [RadioReportId("ang_c_020264", InstanceName = nameof(PriorInterventionsFindingType.EndovascularAorticRepair))]
        public bool IsAbdominalEVAR { get; set; }
        
        [RadioReportId("ang_c_020265", InstanceName = nameof(PriorInterventionsFindingType.EndovascularAorticRepair))]
        public bool IsThoracicTEVAR { get; set; }
        
        #endregion
        #region Prior interventions - Valve replacement
        
        [RadioReportId("ang_c_020267", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        public bool IsAorticValve { get; set; }
        
        public AorticValveType AorticValveType { get; set; }

        [RadioReportId("ang_c_020338", InstanceName = nameof(PriorInterventionsFindingType.ValveReplacement))]
        public bool IsMitralValve { get; set; }
        
        public MitralValveType MitralValveType { get; set; }
        
        #endregion
        #region Prior interventions - Vitium closure
        
        [RadioReportId("ang_c_020273", InstanceName = nameof(PriorInterventionsFindingType.VitiumClosure))]
        public bool IsPatentForamenOvale { get; set; }
        
        #endregion
        #region Prior interventions - After transplantation
        
        public AfterTransplantationType AfterTransplantationType { get; set; }

        [RadioReportId("ang_c_020278", InstanceName = nameof(PriorInterventionsFindingType.AfterTransplantation))]
        public bool IsKidneySideRight { get; set; }
        
        [RadioReportId("ang_c_020279", InstanceName = nameof(PriorInterventionsFindingType.AfterTransplantation))]
        public bool IsKidneySideLeft { get; set; }
        
        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PriorInterventionsFindingType.Bypass) => PriorInterventionsFindingType.ToString() == customConditionId,
               _ => false
            };
    }
}
