using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments;

namespace RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments
{
    public class CapsuleAndLigamentsFinding : CapsuleAndLigamentsFindingBase
    {
        #region Common

        public SideType SideType { get; set; }

        #endregion
        #region LigamentousLesion

        public LocalizationType LocalizationType { get; set; }

        public DistinctionType DistinctionType { get; set; }

        [RadioReportId("hip_m_060404", InstanceName = nameof(CapsuleAndLigamentsFindingType.LigamentousLesion))]
        public bool IsThickening { get; set; }

        [RadioReportId("hip_m_060405", InstanceName = nameof(CapsuleAndLigamentsFindingType.LigamentousLesion))]
        public bool IsT2wSignalElevation { get; set; }

        #endregion
        #region SynoviaDiffusePathology
        
        [RadioReportId("hip_m_060207", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaDiffusePathology))]
        public bool IsRightSide { get; set; }

        [RadioReportId("hip_m_060208", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaDiffusePathology))]
        public bool IsLeftSide { get; set; }

        [RadioReportId("hip_m_060210", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaDiffusePathology))]
        public bool IsHyperplasia { get; set; }

        [RadioReportId("hip_m_060211", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaDiffusePathology))]
        public bool IsPronouncedContrastEnhancement { get; set; }

        #endregion
        #region SynoviaMass

        public DescriptionType DescriptionType { get; set; }

        public GrowthPatternsType GrowthPatternsType { get; set; }
        
        [RadioReportId("hip_m_060224", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsLooseBody { get; set; }
        
        [RadioReportId("hip_m_060225", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsAbove1Lesion { get; set; }
        
        [RadioReportId("hip_m_060227", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public int? LooseBodyMaxDiameterInMm { get; set; }
        
        [RadioReportId("hip_m_060311", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public int? ExtensionSizeInMm { get; set; }
        
        [RadioReportId("hip_m_060314", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public int? Extension2ndPlaneInMm { get; set; }
        
        [RadioReportId("hip_m_060317", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public int? Extension3rdPlaneInMm { get; set; }
        
        public MarginType MarginType { get; set; }
        
        [RadioReportId("hip_m_060322-1", InstanceName = nameof(CharacterizationIIHomogeneityType), IsExportable = false)]
        public SynoviaHomogeneityType CharacterizationIIHomogeneityType { get; set; } 
        
        [RadioReportId("hip_m_060325-1", InstanceName = nameof(PronouncedHomogeneityType), IsExportable = false)]
        public SynoviaHomogeneityType PronouncedHomogeneityType { get; set; }
        
        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
        
        [RadioReportId("hip_m_060419", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public SynoviaDifferentialDiagnosis DifferentialDiagnosis1 { get; set; }
        
        [RadioReportId("hip_m_060420", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsSuspected { get; set; }
        
        [RadioReportId("hip_m_060422", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public SynoviaDifferentialDiagnosis DifferentialDiagnosis2 { get; set; }
        
        [RadioReportId("hip_m_060423", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsSubordinated { get; set; }
        
        [RadioReportId("hip_m_060424", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsAbove1LesionSameEntity { get; set; }
        
        [RadioReportId("hip_m_060506", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        public bool IsAbove1LesionSamePathology { get; set; }
 
        #endregion

    }
}
