using RadioReport.CardioMRT.Domain.Enums.PericardiumVessels;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.CardioMRT.Domain.Models
{
    public class PericardiumVesselsFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("car_m_090107")]
        public PericardiumVesselsFindingType FindingType { get; set; }
        
        [RadioReportId("car_m_090539-l", InstanceName = nameof(AtelePulmNoduleDiffDiagnosis), IsExportable = false)]
        public LungDiffDiagnosisType AtelePulmNoduleDiffDiagnosis { get; set; }

        [RadioReportId("car_m_090531", InstanceName = nameof(PericardiumVesselsFindingType.MediastinalVessels))]
        [RadioReportId("car_m_090545", InstanceName = nameof(PericardiumVesselsFindingType.Lung))]
        [RadioReportId("car_m_0902175", InstanceName = nameof(PericardiumVesselsFindingType.MediastinumMass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("car_m_090341", InstanceName = nameof(PericardiumVesselsFindingType.MediastinumMass))]
        [RadioReportId("car_m_090541", InstanceName = nameof(PericardiumVesselsFindingType.Lung))]
        public bool IsPleura { get; set; }

        [RadioReportId("car_m_090342", InstanceName = nameof(PericardiumVesselsFindingType.MediastinumMass))]
        [RadioReportId("car_m_090542", InstanceName = nameof(PericardiumVesselsFindingType.Lung))]
        public bool IsPericardium { get; set;}

        [RadioReportId("car_m_090343", InstanceName = nameof(PericardiumVesselsFindingType.MediastinumMass))]
        [RadioReportId("car_m_090543", InstanceName = nameof(PericardiumVesselsFindingType.Lung))]
        public bool IsBone { get; set; }

        [RadioReportId("car_m_090450", InstanceName = nameof(PericardiumVesselsFindingType.Lung))]
        [RadioReportId("car_m_090368", InstanceName = nameof(PericardiumVesselsFindingType.UpperAbdomen))]
        [RadioReportId("car_m_090335", InstanceName = nameof(PericardiumVesselsFindingType.MediastinumMass))]
        public int? MaximumDiameterAxialInMm { get; set; }

        [RadioReportId("car_m_0902163", InstanceName = nameof(PericardiumVesselsFindingType.Neck))]
        [RadioReportId("car_m_090374", InstanceName = nameof(PericardiumVesselsFindingType.OsseousLesion))]
        [RadioReportId("car_m_090417", InstanceName = nameof(PericardiumVesselsFindingType.MediastinalVessels))]
        public int? MaximumDiameterInMm { get; set; }

        #endregion

        #region Pericardium

        [RadioReportId("car_m_090202")]
        public bool IsPericardialEffusion { get; set; }

        [RadioReportId("car_m_090203")]
        public int? PericardialEffusionMaxWidth { get; set; }

        [RadioReportId("car_m_090205")]
        public bool IsPericarditisCalcification { get; set; }

        [RadioReportId("car_m_090206")]
        public bool IsPericarditisConstrictiva { get; set; }


        #endregion
        #region Mediastinal vessels 

        public MediastinalVesselsType MediastinalVesselsType { get; set; }

        public CoronaryAnomalyType CoronaryAnomalyType { get; set; }

        public DetailsOriginType DetailsOriginType { get; set; }

        [RadioReportId("car_m_090501-l", IsExportable = false, InstanceName = nameof(RCALeftOrLMARightCoronalSinus))]
        public RCAOrRCXLADOrLMA RCALeftOrLMARightCoronalSinus { get; set; }

        [RadioReportId("car_m_090506-l", IsExportable = false, InstanceName = nameof(DistalRCX))]
        public RCAOrRCXLADOrLMA DistalRCX { get; set; }

        [RadioReportId("car_m_090511-l", IsExportable = false, InstanceName = nameof(DistalLAD))]
        public RCAOrRCXLADOrLMA DistalLAD { get; set; }

        public DistalType DistalType { get; set; }

        [RadioReportId("car_m_090516")]
        public bool IsRCA { get; set; }

        [RadioReportId("car_m_090517")]
        public bool IsLMA { get; set; }

        [RadioReportId("car_m_090518")]
        public bool IsLAD { get; set; }

        [RadioReportId("car_m_090519")]
        public bool IsRCX { get; set; }

        [RadioReportId("car_m_090305")]
        public bool IsExtension { get; set; }

        public ExtensionType ExtensionType { get; set; }

        [RadioReportId("car_m_090309")]
        public bool IsAorticRoot { get; set; }

        [RadioReportId("car_m_090310")]
        public bool IsAscendingAorta { get; set; }

        [RadioReportId("car_m_090311")]
        public bool IsAorticArch { get; set; }

        [RadioReportId("car_m_090312")]
        public bool IsDescendingAorta { get; set; }

        [RadioReportId("car_m_090313")]
        public int? AortaMaxDiameterInMm { get; set; }

        [RadioReportId("car_m_090411")]
        public bool IsStenosis { get; set; }

        public StenosisType StenosisType { get; set; }

        [RadioReportId("car_m_090315")]
        public bool IsThrombus { get; set; }

        [RadioReportId("car_m_090317")]
        public bool IsCentral { get; set; }

        [RadioReportId("car_m_090318")]
        public bool IsRight { get; set; }

        [RadioReportId("car_m_090319")]
        public bool IsRightSegmental { get; set; }

        [RadioReportId("car_m_090320")]
        public bool IsLeft { get; set; }

        [RadioReportId("car_m_090321")]
        public bool IsLeftSegmental { get; set; }

        public PericardiumVesselsDiagnosisType PericardiumVesselsDiagnosisType { get; set; }

        public PulmonaryVariantsType PulmonaryVariantsType { get; set; }

        public PartialAnomalousType PartialAnomalousType { get; set; }

        public VenaCavaType VenaCavaType { get; set; }

        public SuperiorVariantsType SuperiorVariantsType { get; set; }

        public InferiorVariantsType InferiorVariantsType { get; set; }

        #endregion
        #region Mediastinum, lymphadenopathy

        [RadioReportId("car_m_090238")]
        public bool IsCerviSupraParast { get; set; }

        [RadioReportId("car_m_090239")]
        public bool IsCervicalRight { get; set; }

        [RadioReportId("car_m_090240")]
        public bool IsCervicalLeft { get; set; }

        [RadioReportId("car_m_090241")]
        public bool IsMediastinal { get; set; }

        [RadioReportId("car_m_090242")]
        public bool IsHilaryLobarSegmental { get; set; }

        [RadioReportId("car_m_090243")]
        public bool IsHilaryRight { get; set; }

        [RadioReportId("car_m_090244")]
        public bool IsHilaryLeft { get; set; }

        [RadioReportId("car_m_090245")]
        public bool IsAxilary { get; set; }

        [RadioReportId("car_m_090246")]
        public bool IsAxilaryRight { get; set; }

        [RadioReportId("car_m_090247")]
        public bool IsAxilaryLeft { get; set; }

        [RadioReportId("car_m_090347")]
        public bool IsEnlargedLymphNodes { get; set; }

        [RadioReportId("car_m_090348")]
        public int? EnlargedLymphNodeShortAxisDiameterInMm { get; set; }

        public EnlargedLymphNodesType EnlargedLymphNodesType { get; set; }

        #endregion
        #region Mediastinum, mass

        [RadioReportId("car_m_090251")]
        public bool IsAnteriorMediastinum { get; set; }

        [RadioReportId("car_m_090252")]
        public bool IsMiddleMediastinum { get; set; }

        [RadioReportId("car_m_090253")]
        public bool IsPosteriorMediastinum { get; set; }

        [RadioReportId("car_m_090254")]
        public bool IsUpperMediastinum { get; set; }

        [RadioReportId("car_m_090255")]
        public bool IsLowerMediastinum { get; set; }

        public PericardiumVesselsMarginType PericardiumVesselsMarginType { get; set; }

        [RadioReportId("car_m_090344l", InstanceName = nameof(HomogenityType), IsExportable = false)]
        public HomogenityType HomogenityType { get; set; }

        [RadioReportId("car_m_090423")]
        public SignalType SignalT1w { get; set; }

        [RadioReportId("car_m_090423_1")]
        public SignalType SignalT2w { get; set; }

        [RadioReportId("car_m_090425")]
        public bool IsGrease { get; set; }

        [RadioReportId("car_m_090426")]
        public bool IsInternalChangesCysts { get; set; }

        [RadioReportId("car_m_090427")]
        public bool IsCalcification { get; set; }

        [RadioReportId("car_m_090428")]
        public bool IsCapsule { get; set; }

        [RadioReportId("car_m_090429")]
        public bool IsNecroses { get; set; }

        public CMEnhancQuantiType CMEnhancQuantiType { get; set; }

        [RadioReportId("car_m_090524-1", InstanceName = "NoHomogenityType", IsExportable = false)]
        public HomogenityType NoHomogenityType { get; set; }

        //Differential diagnosis
        [RadioReportId("car_m_0902174")]
        public DifferentialDiagnosis DifferentialDiagnosis01 { get; set; }

        [RadioReportId("car_m_0902177")]
        public DifferentialDiagnosis DifferentialDiagnosis02 { get; set; }

        [RadioReportId("car_m_0902178")]
        public bool IsSubordinated { get; set; }

        #endregion
        #region Lung

        public LungPathologyType LungPathologyType { get; set; }

        [RadioReportId("car_m_090533-l", InstanceName = nameof(ConsolidationDiffDiagnosis), IsExportable = false)]
        public LungDiffDiagnosisType ConsolidationDiffDiagnosis { get; set; }

        [RadioReportId("car_m_090354")]
        public LungLocalizers LungLocalizer { get; set; }

        public DistributionType DistributionType { get; set; }

        public AtypicalType AtypicalType { get; set; }

        [RadioReportId("car_m_090355")]
        public bool IsLocalizationRight { get; set; }

        [RadioReportId("car_m_090355-l", IsExportable = false, InstanceName = nameof(PericardiumVesselsFinding.LocalizationRightType))]
        public LocalizationType LocalizationRightType { get; set; }

        [RadioReportId("car_m_090358")]
        public bool IsLocalizationLeft { get; set; }

        [RadioReportId("car_m_090358-l", IsExportable = false, InstanceName = nameof(PericardiumVesselsFinding.LocalizationLeftType))]
        public LocalizationType LocalizationLeftType { get; set; }

        public PeculiarityType PeculiarityType { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("car_m_090452")]
        public int? MassMaximumDiameterAxialInMm { get; set; }

        [RadioReportId("car_m_090544")]
        public bool IsMediastinum { get; set; }

        #endregion
        #region Upper abdomen 

        [RadioReportId("car_m_0902187")]
        public bool IsFocalLiverLesions { get; set; }

        [RadioReportId("car_m_0902189-l", IsExportable = false, InstanceName = nameof(FocalLiverLesionsType))]
        public OtherFocalType FocalLiverLesionsType { get; set; } 

        public BenignType BenignType { get; set; }

        [RadioReportId("car_m_0902194")]
        public bool IsLesionsMoreOneOfFocalLiver { get; set; }

        [RadioReportId("car_m_0902195")]
        public bool IsDiffuseLiverLesion { get; set; }

        public DiffuseLiverLesionType DiffuseLiverLesionType { get; set; }

        [RadioReportId("car_m_090361")]
        public bool IsCholecystolithiasis { get; set; }

        [RadioReportId("car_m_090362")]
        public bool IsSplenomegaly { get; set; }

        [RadioReportId("car_m_090363")]
        public bool IsHiatalHernia { get; set; }

        [RadioReportId("car_m_090364")]
        public bool IsMassAdrenalGland { get; set; }

        [RadioReportId("car_m_090366")]
        public bool IsMassAdrenalGlandRight { get; set; }

        [RadioReportId("car_m_090367")]
        public bool IsMassAdrenalGlandLeft { get; set; }

        [RadioReportId("car_m_090453")]
        public bool IsFocalLesionOfKidney {get;set;}

        [RadioReportId("car_m_090455")]
        public bool IsFocalLesionOfKidneyRight { get; set; }

        [RadioReportId("car_m_090456")]
        public bool IsFocalLesionOfKidneyLeft { get; set; }

        [RadioReportId("car_m_090458-l", IsExportable = false, InstanceName = nameof(FocalLesionOfKidneyType))]
        public OtherFocalType FocalLesionOfKidneyType { get; set; }

        [RadioReportId("car_m_090459")]
        public bool IsFocalLesionOfKidneyBenignCyst { get; set; }

        public UnknownType UnknownType { get; set; }

        [RadioReportId("car_m_090464")]
        public int? UnknownMaxDiameterInMm { get; set; }

        [RadioReportId("car_m_090466")]
        public bool IsLesionsMoreOneOfFocalLesionOfKidney { get; set; }

        [RadioReportId("car_m_090546")]
        public bool IsHydronephrosis { get; set; }

        [RadioReportId("car_m_090548")]
        public bool IsHydronephrosisRight { get; set; }

        [RadioReportId("car_m_090549")]
        public bool IsHydronephrosisLeft { get; set; }

        public GradingMaxType GradingMaxType { get; set; }

        [RadioReportId("car_m_090555")]
        public bool IsEnlargedAbdLymphNodes { get; set; }

        [RadioReportId("car_m_090556")]
        public int? EnlargedAbdLymphNodesMaxDiameterSADInMm { get; set; }

        public EnlargedAbdLymphNodesType EnlargedAbdLymphNodesType { get; set; }

        #endregion
        #region Throat

        [RadioReportId("car_m_0902160")]
        public bool IsStruma { get; set; }

        [RadioReportId("car_m_0902161")]
        public bool IsRetrosternalParts { get; set; }

        [RadioReportId("car_m_0902162")]
        public bool IsNode { get; set; }

        #endregion
        #region Osseous lesion

        public OssLesionLocalizationType OssLesionLocalizationType { get; set; }

        public UpperAbdomenSide UpperAbdomenSide { get; set; }

        [RadioReportId("car_m_090377")]
        public LocalizationDetailsType RibsLocalizationDetails { get; set; }

        [RadioReportId("car_m_090468-l", IsExportable = false, InstanceName = nameof(FocalClavicleType))]
        public OtherFocalType FocalClavicleType { get; set; }

        public OssLesionBenignType OssLesionBenignType { get; set; }

        [RadioReportId("car_m_090378")]
        public LocalizationDetailsType VertebralBodyLocalizationDetails { get; set; }

        #endregion

    }
}