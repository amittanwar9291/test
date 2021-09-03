using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HipMRT.Domain.Models
{
    public class SoftTissueFinding : SoftTissueFindingBase
    {
        #region Common
        public SideType SideType { get; set; }
        
        [RadioReportId("hip_m_080403", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        [RadioReportId("hip_m_080503", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        [RadioReportId("hip_m_080511", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080514", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080230", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSuspected { get; set; }
                
        [RadioReportId("hip_m_080209", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080341", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080347", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsVentral { get; set; }
        
        [RadioReportId("hip_m_080210", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080342", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080348", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsMedial { get; set; }
        
        [RadioReportId("hip_m_080211", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080343", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080349", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsLateral { get; set; }
        
        [RadioReportId("hip_m_080212", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080344", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080350", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsDorsal { get; set; }

        [RadioReportId("hip_m_080206", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080338", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        public bool IsPelvis { get; set; }
        
        [RadioReportId("hip_m_080207", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080339", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        public bool IsThigh { get; set; }

        [RadioReportId("hip_m_080317", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        [RadioReportId("hip_m_080330", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080434", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080445", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public int? SizeInMm { get; set; }
        
        [RadioReportId("hip_m_080320", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        [RadioReportId("hip_m_080333", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080437", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080448", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public int? SecondPlaneInMm { get; set; }
        
        [RadioReportId("hip_m_080323", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        [RadioReportId("hip_m_080336", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080440", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080451", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public int? ThirdPlaneInMm { get; set; }

        #endregion

        #region ArticularEffusion

        public QuantityType QuantityType { get; set; }

        [RadioReportId("hip_m_080306", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsHemorrhagic { get; set; }
        
        [RadioReportId("hip_m_080307", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsSedimentation { get; set; }
        
        [RadioReportId("hip_m_080308", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsEmpyema { get; set; }

        #endregion

        #region MorelLavalleeLesion

        public LocalizationThighType LocalizationThighType { get; set; }
        
        public ClassificationType ClassificationType { get; set; }

        #endregion

        #region Vessels

        public VesselsPathologyType VesselsPathologyType { get; set; }

        public VesselsLocalizationType VesselsLocalizationType { get; set; }
        
        [RadioReportId("hip_m_080418", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        public int? MaxAxialDiameterInMm { get; set; }
        
        [RadioReportId("hip_m_080421", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        public int? CraniocaudalExtensionInMm { get; set; }
        
        [RadioReportId("hip_m_080422", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        public bool IsIliacVeins { get; set; }
        
        [RadioReportId("hip_m_080423", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        public bool IsSuperficialLegVeins { get; set; }
        
        [RadioReportId("hip_m_080424", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        public bool IsDeepLegVeins { get; set; }

        #endregion

        #region Hematoma

        public CharacterizationHaematomaType CharacterizationHaematomaType { get; set; }

        #endregion

        #region SoftTissueMass

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hip_m_080216", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsHistologyKnown { get; set; }
        
        public HistologyKnownType HistologyKnownType { get; set; }
        
        [RadioReportId("hip_m_080224", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSepta { get; set; }
        
        [RadioReportId("hip_m_080225", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsNecrosis { get; set; }
        
        [RadioReportId("hip_m_080226", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hip_m_080352", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsAlongTheTendonSheath { get; set; }
        
        [RadioReportId("hip_m_080353", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsInfiltration { get; set; }
        
        [RadioReportId("hip_m_080362", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsBones { get; set; }
        
        [RadioReportId("hip_m_080363", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSkin { get; set; }
        
        [RadioReportId("hip_m_080364", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsMuscle { get; set; }
        
        [RadioReportId("hip_m_080365", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsFascia { get; set; }
        
        [RadioReportId("hip_m_080366", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsVessel { get; set; }
        
        [RadioReportId("hip_m_080367", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsNerves { get; set; }
        
        [RadioReportId("hip_m_080355", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCutisThickening { get; set; }

        [RadioReportId("hip_m_080229", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }
        
        [RadioReportId("hip_m_080232", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }
        
        [RadioReportId("hip_m_080233", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSubordinated { get; set; }

        [RadioReportId("hip_m_080235", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("hip_m_080357", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsMoreThanOneLesionSameEntity { get; set; }

        #endregion

        #region OtherPathologies

        public PathologyType PathologyType { get; set; }

        [RadioReportId("hip_m_080459", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        public bool IsInguinal { get; set; }
        
        [RadioReportId("hip_m_080462", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        public int? InguinalMaxShortAxisDiameterInMm { get; set; }
        
        [RadioReportId("hip_m_080464", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        public DifferentialDiagnosisType InguinalDifferentialDiagnosisType { get; set; }
        
        [RadioReportId("hip_m_080533", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        public bool IsIliacal { get; set; }
        
        [RadioReportId("hip_m_080536", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        public int? IliacalMaxShortAxisDiameterInMm { get; set; }
        
        [RadioReportId("hip_m_080538", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        public DifferentialDiagnosisType IliacalDifferentialDiagnosisType { get; set; }

        #endregion
    }
}
