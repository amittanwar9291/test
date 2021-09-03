using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class SoftPartsFinding : SoftPartsFindingBase
    {
        [RadioReportId("kne_m_080240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        [RadioReportId("kne_m_080240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsTear { get; set; }

        [RadioReportId("kne_m_080245", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        [RadioReportId("kne_m_080345", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080271", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080285", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080295", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080295", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsRetraction { get; set; }

        [RadioReportId("kne_m_080296", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080296", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        [RadioReportId("kne_m_080286", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080274", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080346", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080246", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public byte? RetractionInMm { get; set; }

        [RadioReportId("kne_m_080250", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        [RadioReportId("kne_m_080350", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080277", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080290", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_0802100", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_0802100", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsBoneBruise { get; set; }

        [RadioReportId("kne_m_080336", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080336", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080336", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        [RadioReportId("kne_m_080336", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        [RadioReportId("kne_m_080420", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080364", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        public bool IsEnthesiopathy { get; set; }

        [RadioReportId("kne_m_080423", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsBoneMarrowEdemaUpperPatellarPole { get; set; }

        [RadioReportId("kne_m_080276", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080289", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080299", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080299", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsHaematoma { get; set; }

        [RadioReportId("kne_m_0803239", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        [RadioReportId("kne_m_080421", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080365", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080360", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080355", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        public bool IsThickeningEdema { get; set; }

        [RadioReportId("kne_m_080424", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_0803241", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        [RadioReportId("kne_m_080367", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080358", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        public bool IsMuscularAtrophy { get; set; }

        [RadioReportId("kne_m_080212", InstanceName = nameof(Enums.SoftPartsFindingType.SoftParts))]
        [RadioReportId("kne_m_080212", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public KneeCompartmentsLocations Location { get; set; }

        [RadioReportId("kne_m_0802255", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        [RadioReportId("kne_m_080509", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public SoftPartsDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("kne_m_0802257", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        [RadioReportId("kne_m_080511", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public SoftPartsDiagnosisType DifferentialDiagnosis02 { get; set; }

        [RadioReportId("kne_m_0802258", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        [RadioReportId("kne_m_080512", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaFocal))]
        public bool IsSecondary { get; set; }

        public TendonLocalizationType TendonLocalizationType { get; set; }

        #region 01 ArticularEffusion 
        public QuantityType QuantityType { get; set; }

        public QualityType QualityType { get; set; }

        [RadioReportId("kne_m_080208", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public bool IsSedimentation { get; set; }

        [RadioReportId("kne_m_080302", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public bool IsBakerCyst { get; set; }

        [RadioReportId("kne_m_080304", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public byte? ExpansivenessMaxDiameterInMm { get; set; }

        [RadioReportId("kne_m_080306", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public byte? ExpansivenessMaxLinearExpansionInMm { get; set; }

        [RadioReportId("kne_m_080308", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public bool IsRuptured { get; set; }

        [RadioReportId("kne_m_080309", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public bool IsSynovialCystProxTibiofibularJoint { get; set; }

        [RadioReportId("kne_m_080310", InstanceName = nameof(Enums.SoftPartsFindingType.ArticularEffusion))]
        public byte? SynovialCystProxTibiofibularJointMaxDiameterInMm { get; set; }
        #endregion

        #region 02 Synovia focal
        public DescriptionType DescriptionType { get; set; }

        public HingeType HingeType { get; set; }

        public SynoviaType SynoviaType { get; set; }

        [RadioReportId("kne_m_080501", InstanceName = nameof(DistributionPatternsType), IsExportable = false)]
        public TendonPatternsType DistributionPatternsType { get; set; }

        public FocalType FocalType { get; set; }

        #endregion

        #region 03 Synovia diffuse
        [RadioReportId("kne_m_0802139", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaDiffuse))]
        public bool IsHyperplasia { get; set; }

        [RadioReportId("kne_m_0802140", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaDiffuse))]
        public bool IsIncreasedContrastEnhancement { get; set; }

        [RadioReportId("kne_m_0802201", InstanceName = nameof(Enums.SoftPartsFindingType.SynoviaDiffuse))]
        public bool IsHigherT2wOrPDSignal { get; set; }

        #endregion

        #region 04 HoffaFatBody
        [RadioReportId("kne_m_080220", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsEdema { get; set; }

        [RadioReportId("kne_m_080220-l", InstanceName = nameof(EdemaType), IsExportable = false)]
        public TendonPatternsType EdemaType { get; set; }

        [RadioReportId("kne_m_080222", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsEdemaFocalDistal { get; set; }

        [RadioReportId("kne_m_080223", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsEdemaFocalDorsal { get; set; }

        [RadioReportId("kne_m_080224", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsEdemaFocalProximal { get; set; }

        [RadioReportId("kne_m_080225", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsEdemaFocalSuperolateral { get; set; }

        [RadioReportId("kne_m_080226", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsEdemaFocalMaltrackingOfThePatella { get; set; }

        [RadioReportId("kne_m_080321", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsFragmentation { get; set; }

        [RadioReportId("kne_m_080322", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsFibrosis { get; set; }

        [RadioReportId("kne_m_080323", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsLowSIInT1w { get; set; }

        [RadioReportId("kne_m_080324", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsLowSIInT2w { get; set; }

        [RadioReportId("kne_m_080325", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsHypertrophy { get; set; }

        [RadioReportId("kne_m_080326", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsCartilageIsointenserNodulus { get; set; }

        [RadioReportId("kne_m_080327", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsCartilageIsointenserNodulusGreaterThen1Lesion { get; set; }

        [RadioReportId("kne_m_080328", InstanceName = nameof(Enums.SoftPartsFindingType.HoffaFatBody))]
        public bool IsThickeningPlicaSynovialisInfrapatellaris { get; set; }
        #endregion

        #region 05 Bursitis

        [RadioReportId("kne_m_080230", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaSuprapatellar { get; set; }

        [RadioReportId("kne_m_080231", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaSubcutaneaPraepatellaris { get; set; }

        [RadioReportId("kne_m_080232", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaSubfascialisPraepatellaris { get; set; }

        [RadioReportId("kne_m_080233", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaInfrapatellarisProfunda { get; set; }

        [RadioReportId("kne_m_080234", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaAnserina { get; set; }

        [RadioReportId("kne_m_080235", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaWithinTheInnerBand { get; set; }

        [RadioReportId("kne_m_080236", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaSubtendineaMusculiSemimembranosi { get; set; }

        [RadioReportId("kne_m_080238", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaTractusIliotibialis { get; set; }

        [RadioReportId("kne_m_080239", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsBursaSubtendineaMusculiBicipitisFemorisInferior { get; set; }

        public BursitisMarginsType BursitisMarginsType { get; set; }

        [RadioReportId("kne_m_080333", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public byte? BursaDiameterInMm { get; set; }

        [RadioReportId("kne_m_0803300", InstanceName = nameof(Enums.SoftPartsFindingType.Bursitis))]
        public bool IsHaemorrhage { get; set; }
        #endregion

        #region 06 TendonsPatellarTendon

        [RadioReportId("kne_m_080201", IsExportable = false, InstanceName = nameof(TPTLocalizationType))]
        public TendonsPatellarTendonType TPTLocalizationType { get; set; }

        [RadioReportId("kne_m_080244", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsAvulsionTuberosityTibiae { get; set; }

        [RadioReportId("kne_m_080249", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsSurroundingHematoma { get; set; }

        [RadioReportId("kne_m_080251", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsPatellaAlta { get; set; }

        [RadioReportId("kne_m_080201", IsExportable = false, InstanceName = nameof(EnthesiopathyType))]
        public TendonsPatellarTendonType EnthesiopathyType { get; set; }

        [RadioReportId("kne_m_080338", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsSindingLarsenJohanssonSyndrome { get; set; }

        [RadioReportId("kne_m_080339", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsThickeningEdemaOfTheProximalLigamentPatellae { get; set; }

        [RadioReportId("kne_m_080341", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsDeep { get; set; }

        [RadioReportId("kne_m_080342", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsSuperficial { get; set; }

        [RadioReportId("kne_m_080343", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsEdemaOfTheInfrapatellarFattyBody { get; set; }

        [RadioReportId("kne_m_080344", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsBoneMarrowEdemaOfTheCaudalPatellapol { get; set; }

        public TPTEnthesiopathyDistalType EnthesiopathyDistalType { get; set; }

        [RadioReportId("kne_m_080414", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsMOsgoodSlatterThickeningEdemaOfTheDistalPatellarLigament { get; set; }

        [RadioReportId("kne_m_080415", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsMOsgoodSlatterBoneMarrowEdemaOfTuberosity { get; set; }

        [RadioReportId("kne_m_080416", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsBuritisInfrapatellarisProfunda { get; set; }

        [RadioReportId("kne_m_080417", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsEdemaOfTheVentralSoftTissues { get; set; }

        [RadioReportId("kne_m_080418", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsHoffaFatPad { get; set; }

        [RadioReportId("kne_m_080419", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsFragmentationOfTuberosity { get; set; }

        [RadioReportId("kne_m_080517", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsMOsgoodSlatterBursitisInfrapatellarisProfunda { get; set; }

        [RadioReportId("kne_m_080518", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsIrregularityOfTuberosityTibiae { get; set; }

        [RadioReportId("kne_m_080519", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsThickeningEdemaOfTheDistalLigamentPatellae { get; set; }

        [RadioReportId("kne_m_080521", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsThickeningEdemaOfTheDistalPatellarLigament { get; set; }

        [RadioReportId("kne_m_080522", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsBursitisInfrapatellarisProfunda { get; set; }

        [RadioReportId("kne_m_080523", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsBoneMarrowEdemaOfTuberosity { get; set; }

        [RadioReportId("kne_m_080524", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsIntratendinousCalcification { get; set; }

        [RadioReportId("kne_m_080525", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPatellarTendon))]
        public bool IsTractionSpur { get; set; }
        #endregion

        #region 07 TendonsQuadricepsTendon
        public TendonTearType TearType { get; set; }

        [RadioReportId("kne_m_080256", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsRectusFemoris { get; set; }

        [RadioReportId("kne_m_080257", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsVastusMedialis { get; set; }

        [RadioReportId("kne_m_080258", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsVastusLateralis { get; set; }

        [RadioReportId("kne_m_080259", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsVastusIntermedius { get; set; }

        [RadioReportId("kne_m_080264", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsAvulsionPatella { get; set; }

        [RadioReportId("kne_m_080349", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsHematomaSuprapatellar { get; set; }

        [RadioReportId("kne_m_080351", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsTendonsQuadricepsTendonHaemarthros { get; set; }

        [RadioReportId("kne_m_080352", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsPatellaBaja { get; set; }

        [RadioReportId("kne_m_080422", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsBursitisSuprapatellaris { get; set; }

        [RadioReportId("kne_m_080425", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsIntratendinalCalcification { get; set; }

        [RadioReportId("kne_m_080426", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsQuadricepsTendon))]
        public bool IsTendonsQuadricepsTendonTractionSpur { get; set; }
        #endregion

        #region 08 TendonsBicepsFemorisTendon
        [RadioReportId("kne_m_080270", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        public bool IsAvulsionFibulaHeads { get; set; }

        [RadioReportId("kne_m_080356", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        public bool IsBursitisSubtendineaMusculiBicipitisFemorisInferior { get; set; }
        #endregion

        #region 09 TendonsPopliteusTendon

        [RadioReportId("kne_m_080361", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        public bool IsBursitisSubtendineaMusculusPoplitei { get; set; }

        [RadioReportId("kne_m_080362", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        public bool IsTendonsPopliteusTendonMuscularAtrophy { get; set; }

        [RadioReportId("kne_m_080363", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPopliteusTendon))]
        public bool IsCyamella { get; set; }
        #endregion

        #region 10 TendonsTractusIliotibialis
        [RadioReportId("kne_m_080366", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        public bool IsTBursitisOfTheIliotibialTract { get; set; }

        [RadioReportId("kne_m_080368", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        public bool IsFibrovascularStimulus { get; set; }

        [RadioReportId("kne_m_080369", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsTractusIliotibialis))]
        public bool IsGanglionCyst { get; set; }
        #endregion

        #region 11 TendonsPesAnserinus

        [RadioReportId("kne_m_0802261", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsLayer { get; set; }

        [RadioReportId("kne_m_0802262", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsSuperficialPars { get; set; }

        [RadioReportId("kne_m_0802263", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsParsProfundus { get; set; }

        [RadioReportId("kne_m_0803240", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsTendonsPesAnserinusBursitisPesAnserinus { get; set; }

        [RadioReportId("kne_m_0803242", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsTendonsPesAnserinusMSemitendinosus { get; set; }

        [RadioReportId("kne_m_0803243", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsTendonsPesAnserinusMGracilis { get; set; }

        [RadioReportId("kne_m_0803244", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsTendonsPesAnserinusMSartorius { get; set; }

        [RadioReportId("kne_m_0803245", InstanceName = nameof(Enums.SoftPartsFindingType.TendonsPesAnserinus))]
        public bool IsTendonsPesAnserinusMusculusSemiMembranosus { get; set; }
        #endregion

        #region 12 Musculature
        public MusculatureLocations MusculatureLocation { get; set; }

        [RadioReportId("kne_m_0802219", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsIntramuscularHaematoma { get; set; }

        [RadioReportId("kne_m_0802221", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsIntramuscular { get; set; }

        [RadioReportId("kne_m_0802222", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsInterfacial { get; set; }

        [RadioReportId("kne_m_0802223", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsIntermuscular { get; set; }

        public IntramuscularHaematomaType IntramuscularHaematomaType { get; set; }

        [RadioReportId("kne_m_0804212", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsMuscleLesion { get; set; }

        public ClassificationMunichConsensusType ClassificationMunichConsensusType { get; set; }

        [RadioReportId("kne_m_0804217", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsCrossDiameterRuptureBelow5Mm { get; set; }

        [RadioReportId("kne_m_0804219", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsCrossDiameterRuptureOver5Mm { get; set; }

        [RadioReportId("kne_m_0804221", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public byte? TornMuscleOrTendonRetractionInMm { get; set; }

        [RadioReportId("kne_m_0804223", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsWavyAppearanceOfTheFibers { get; set; }

        [RadioReportId("kne_m_0805201", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsBonyAvulsionFracture { get; set; }

        public OsseousAvulsionType OsseousAvulsionType { get; set; }

        [RadioReportId("kne_m_0805207", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsIntracorticalOedema { get; set; }

        [RadioReportId("kne_m_0802228", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsFurtherFindingsMusculature { get; set; }

        public FurtherFindingsMusculatureType FurtherFindingsMusculatureType { get; set; }

        public MuscularAtrophyType MuscularAtrophyType { get; set; }

        [RadioReportId("kne_m_0802236", InstanceName = nameof(Enums.SoftPartsFindingType.Musculature))]
        public bool IsMuscleHerniation { get; set; }
        #endregion

        #region 13 VesselsNerves
        public VesselsNervesType VesselsNervesType { get; set; }

        [RadioReportId("kne_m_0802130", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public byte? APoliteaAneurysmaDiameterInMm { get; set; }

        [RadioReportId("kne_m_0802133", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsSuperficialLegVeins { get; set; }

        [RadioReportId("kne_m_0802134", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsDeepVeins { get; set; }

        [RadioReportId("kne_m_080375", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsSmoothMargins { get; set; }

        [RadioReportId("kne_m_080376", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsSpindleShaped { get; set; }

        [RadioReportId("kne_m_080377", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsSplitFatSign { get; set; }

        [RadioReportId("kne_m_080378", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsT1wIsointensToTheMusculature { get; set; }

        [RadioReportId("kne_m_080380", InstanceName = nameof(MusculatureCMEnchancementType), IsExportable = false)]
        public CMEnchancementType MusculatureCMEnchancementType { get; set; }

        [RadioReportId("kne_m_0803223", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public byte? KMEnchancementDiameterInMm { get; set; }

        public VesselsNervesLocalizationType VesselsNervesLocalizationType { get; set; }

        [RadioReportId("kne_m_0804224", InstanceName = nameof(VesselsNervesHomogeneityType), IsExportable = false)]
        public HomogeneityType VesselsNervesHomogeneityType { get; set; }

        [RadioReportId("kne_m_0804227", InstanceName = nameof(Enums.SoftPartsFindingType.VesselsNerves))]
        public bool IsMalignantAspect { get; set; }
        #endregion

        #region 14 SoftParts
        public SoftPartsInjuryType SoftPartsFindingType { get; set; }

        [RadioReportId("kne_m_0802137", InstanceName = nameof(Enums.SoftPartsFindingType.SoftParts))]
        public int? KneeRetractionInMm { get; set; }
        #endregion

        #region 15 SoftTissueTumor
        #region 1 tab
        public LocalizationAxialType LocalizationAxialType { get; set; }

        public LocalizationCraniocaudalRelationType LocalizationCraniocaudalRelationType { get; set; }

        [RadioReportId("kne_m_0803228", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public int? AxialMaxInMm { get; set; }

        [RadioReportId("kne_m_0803230", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public int? SecondPlaneAxialInMm { get; set; }

        [RadioReportId("kne_m_0803232", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public int? CraniocaudalInMm { get; set; }

        [RadioReportId("kne_m_0805213", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsSepts { get; set; }

        [RadioReportId("kne_m_0805214", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsNecroses { get; set; }

        #endregion
        #region 2 tab
        [RadioReportId("kne_m_0802248", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsNoMassEffect { get; set; }

        [RadioReportId("kne_m_0802249", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsAlongTendonSheath { get; set; }

        [RadioReportId("kne_m_0802250", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("kne_m_0802252", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsCutisThickening { get; set; }

        [RadioReportId("kne_m_0804241", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public bool IsCentrally { get; set; }
        #endregion
        #region diff diagnosis
        [RadioReportId("kne_m_0802260", InstanceName = nameof(Enums.SoftPartsFindingType.SoftTissueTumor))]
        public SoftPartsDiagnosisType DifferentialDiagnosis03 { get; set; }
        #endregion
        #endregion
    }
}
