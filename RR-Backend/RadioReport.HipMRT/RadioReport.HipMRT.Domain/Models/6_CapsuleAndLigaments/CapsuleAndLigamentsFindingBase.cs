using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments;

namespace RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments
{
    public class CapsuleAndLigamentsFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("hip_m_060106")]
        public CapsuleAndLigamentsFindingType FindingType { get; set; }

        #endregion
        #region SynoviaMass
        
        [RadioReportId("hip_m_060214", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public SynoviaDifferentialDiagnosis SynoviaDifferentialDiagnosis { get; set; }
        
        [RadioReportId("hip_m_060222", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsArticularEffusion { get; set; }
        
        [RadioReportId("hip_m_060223", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsHaemarthrosis { get; set; }

        [RadioReportId("hip_m_060229", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsBonyErosionsSynovialInsertion { get; set; }

        [RadioReportId("hip_m_060230", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsPerifocalSoftTissueEdema { get; set; }
        
        [RadioReportId("hip_m_060231", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsPeriarticularCalcification { get; set; }
        
        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }
        
        public ShapeType ShapeType { get; set; }
        
        [RadioReportId("hip_m_060413",InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public SignalTypeExtended T1wSignal { get; set; }
        
        [RadioReportId("hip_m_060416",InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public SignalTypeExtended T2wSignal { get; set; }
        
        [RadioReportId("hip_m_060502", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hip_m_060503", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsSusceptibilityArtifacts { get; set; }

        [RadioReportId("hip_m_060504", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsBloomingArtifact { get; set; }

        [RadioReportId("hip_m_060505", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsSynovialnodulus { get; set; }

        [RadioReportId("hip_m_060507", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsSynovialProliferations { get; set; }
 
        #endregion

    }
}
