using RadioReport.AbdomenCT.Domain.Enums.MedicalHistory;
using RadioReport.AbdomenCT.Domain.Enums.MedicalHistory.Common;
using RadioReport.AbdomenCT.Domain.Enums.MedicalHistory.Concretion;
using RadioReport.AbdomenCT.Domain.Enums.MedicalHistory.VascularDiagnostics;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AbdomenCT.Domain.Models
{
    public class MedicalHistoryIndication : FindingBase
    {
        public override string InstanceName => IndicationType.ToString();

        [RadioReportId("abd_c_020215")]
        public MedicalHistoryIndicationType IndicationType { get; set; }

        #region Common
        
        public DetailsType DetailsType { get; set; }
        
        [RadioReportId("abd_c_020382", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020388", InstanceName  = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020397", InstanceName  = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020318", InstanceName  = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_0203104", InstanceName = nameof(MedicalHistoryIndicationType.Cyst))]
        [RadioReportId("abd_c_020327", InstanceName  = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020369", InstanceName  = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020345", InstanceName  = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020358", InstanceName  = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public OrganRegionType OrganRegionType { get; set; }
        
        public LocalizationType LocalizationType { get; set; }
        
        [RadioReportId("abd_c_020419")]
        public bool IsRightLobeOfLiver {get;set;}
        
        [RadioReportId("abd_c_020420")]
        public bool IsLeftLobeOfLiver {get;set;}
        
        [RadioReportId("abd_c_020421")]
        public bool IsCaudateLobe {get;set;}
        
        [RadioReportId("abd_c_020422")]
        public bool IsQuadrateLobe {get;set;}
        
        [RadioReportId("abd_c_020424")]
        public LiverSegmentsLocalizationType LiverSegmentsLocalizationType { get; set; }
        
        [RadioReportId("abd_c_020428", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020428", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020472", InstanceName = nameof(MedicalHistoryIndicationType.Cyst))]
        [RadioReportId("abd_c_020428", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020478", InstanceName = nameof(MedicalHistoryIndicationType.Concretion))]
        [RadioReportId("abd_c_020428", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020428", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020428", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsRight { get; set; }

        [RadioReportId("abd_c_020429", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020429", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020473", InstanceName = nameof(MedicalHistoryIndicationType.Cyst))]
        [RadioReportId("abd_c_020429", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020479", InstanceName = nameof(MedicalHistoryIndicationType.Concretion))]
        [RadioReportId("abd_c_020429", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020429", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020429", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsLeft { get; set; }
        
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020482", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020431", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsEsophagus {get;set;} 
        
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020462", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020432", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsStomach {get;set;}
        
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020463", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020433", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsDuodenum {get;set;}
        
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020464", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020434", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsJejunum {get;set;}
        
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020465", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020435", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsIleum {get;set;}
        
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020466", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020476", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsAppendix {get;set;}
        
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020467", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020436", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsColon {get;set;}
        
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020468", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020437", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsSigma {get;set;}
        
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020469", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020438", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsRectum {get;set;}
        
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalGas))]
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.FreeIntraabdominalFluid))]
        [RadioReportId("abd_c_020470", InstanceName = nameof(MedicalHistoryIndicationType.Perforation))]
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.Mass))]
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.AnastomoticInsufficiency))]
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.Trauma))]
        [RadioReportId("abd_c_020439", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsAnus {get;set;}
        
        #endregion
        #region Inflammation
       
        [RadioReportId("abd_c_020320", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        public bool IsAbscess {get;set;}

        [RadioReportId("abd_c_020321", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        public bool IsFistulaFormation {get;set;}

        [RadioReportId("abd_c_020375", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]   
        public bool IsDiverticulitis {get;set;}

        [RadioReportId("abd_c_020376", InstanceName = nameof(MedicalHistoryIndicationType.Inflammation))]
        public bool IsAppendicitis {get;set;}
        
        #endregion
        #region Concretion
        
        [RadioReportId("abd_c_0203112", InstanceName = nameof(MedicalHistoryIndicationType.Concretion))]
        public ConcretionOrganRegionType ConcretionOrganRegionType { get; set; }
        
        #endregion
        #region VascularDiagnostics
        
        public PathologyType PathologyType { get; set; }
        
        [RadioReportId("abd_c_020448", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        public bool IsOcclusionAorta {get;set;}
        
        [RadioReportId("abd_c_020449", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        public bool IsOcclusionVisceralVessel {get;set;}
        
        [RadioReportId("abd_c_020450", InstanceName = nameof(MedicalHistoryIndicationType.VascularDiagnostics))]
        public bool IsOcclusionPelvicAndLegArteries {get;set;}
        
        #endregion
        #region FollowUpAfterTherapy

        [RadioReportId("abd_c_020348", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public byte? MonthOfFollowUpAfterTherapy { get; set; }

        [RadioReportId("abd_c_020349", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public int? YearOfFollowUpAfterTherapy { get; set; }
        
        [RadioReportId("abd_c_020350", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsPostoperative {get;set;} 
        
        [RadioReportId("abd_c_0203113", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsPostinterventional {get;set;}
        
        [RadioReportId("abd_c_020351", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsResection {get;set;}
        
        [RadioReportId("abd_c_020352", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsPartialResection {get;set;}
        
        [RadioReportId("abd_c_020353", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsChemotherapy {get;set;}
        
        [RadioReportId("abd_c_020354", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsRadio {get;set;}
        
        [RadioReportId("abd_c_020355", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsBiopsy {get;set;}        
        
        [RadioReportId("abd_c_020356", InstanceName = nameof(MedicalHistoryIndicationType.FollowUpAfterTherapy))]
        public bool IsStenting {get;set;}
        
        #endregion
    }
}
