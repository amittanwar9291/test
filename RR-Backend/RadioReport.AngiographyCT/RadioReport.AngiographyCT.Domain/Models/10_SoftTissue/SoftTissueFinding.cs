using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.SoftTissue;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class SoftTissueFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_100106")]
        public SoftTissueFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("ang_c_100423", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100319", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType.PleuralEffusion))]
        [RadioReportId("ang_c_100348", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType.PneumonicConsolidation))]
        [RadioReportId("ang_c_100392", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public bool IsRight { get; set; }

        [RadioReportId("ang_c_100424", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100320", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType.PleuralEffusion))]
        [RadioReportId("ang_c_100349", InstanceName = nameof(SoftTissueFindingType.Thoracic),
            CustomConditionName = nameof(ThoracicType.PneumonicConsolidation))]
        [RadioReportId("ang_c_1003132", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public bool IsLeft { get; set; }

        [RadioReportId("ang_c_100428", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100428", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100524", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        [RadioReportId("ang_c_100428", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("ang_c_100431", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100431", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100527", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        [RadioReportId("ang_c_100431", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        public int? SecondPlane { get; set; }

        [RadioReportId("ang_c_100434", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100434", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100530", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        [RadioReportId("ang_c_100434", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("ang_c_100511", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100519", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100519", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        [RadioReportId("ang_c_100519", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        public DignityType DignityType { get; set; }

        [RadioReportId("ang_c_100512", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100520", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100520", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        [RadioReportId("ang_c_100520", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        public bool IsAbscess { get; set; }

        [RadioReportId("ang_c_100444", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100217", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("ang_c_100453", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100453", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public RibLocations RibLocations { get; set; }

        [RadioReportId("ang_c_100438", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        [RadioReportId("ang_c_100451", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        [RadioReportId("ang_c_100461", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public SpineLocations SpineLocations { get; set; }

        [RadioReportId("ang_c_100338-l", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
        public SideType SideType { get; set; }

        #endregion

        #region Supraaortic

        public SupraaorticLocalizationType SupraaorticLocalizationType { get; set; }

        public SupraaorticHeadPathologyType SupraaorticHeadPathologyType { get; set; }

        [RadioReportId("ang_c_100401", InstanceName = nameof(SoftTissueFindingType.Supraaortic),
            CustomConditionName = nameof(SupraaorticHeadPathologyType.Fracture))]
        [RadioReportId("ang_c_100404", InstanceName = nameof(SoftTissueFindingType.Supraaortic),
            CustomConditionName = nameof(SupraaorticHeadPathologyType.Mass))]
        public bool IsCalvariaBone { get; set; }

        [RadioReportId("ang_c_100402", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsFacialSkull { get; set; }

        [RadioReportId("ang_c_100403", InstanceName = nameof(SoftTissueFindingType.Supraaortic),
            CustomConditionName = nameof(SupraaorticHeadPathologyType.Fracture))]
        [RadioReportId("ang_c_100405", InstanceName = nameof(SoftTissueFindingType.Supraaortic),
            CustomConditionName = nameof(SupraaorticHeadPathologyType.Mass))]
        public bool IsOrbita { get; set; }

        [RadioReportId("ang_c_100408", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsIntracranial { get; set; }

        public OrbitaType OrbitaType { get; set; }

        public IntracranialType IntracranialType { get; set; }

        [RadioReportId("ang_c_100412", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsSAH { get; set; }

        [RadioReportId("ang_c_100413", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsSDH { get; set; }

        [RadioReportId("ang_c_100414", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsEDH { get; set; }

        [RadioReportId("ang_c_100415", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsParenchymalHemorrhage { get; set; }

        [RadioReportId("ang_c_100417", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsMidlineShift { get; set; }

        [RadioReportId("ang_c_100418", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsImpairedVentilation { get; set; }

        [RadioReportId("ang_c_100419", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsInflammation { get; set; }

        [RadioReportId("ang_c_100420", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsGasFluidLevel { get; set; }

        [RadioReportId("ang_c_100421", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsCircular { get; set; }

        public NeckSoftTissuePathologyType NeckSoftTissuePathologyType { get; set; }

        [RadioReportId("ang_c_100425", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsMedian { get; set; }

        public NeckSoftTissueMassLocalizationType NeckSoftTissueMassLocalization { get; set; }

        [RadioReportId("ang_c_100436", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        public bool IsWithRetrosternalParts { get; set; }

        #endregion

        #region Thoracic

        public ThoracicType ThoracicType { get; set; }

        [RadioReportId("ang_c_100314", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public int? MaxWidth { get; set; }

        [RadioReportId("ang_c_100317", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool PericardialCalcificationsDetails { get; set; }

        [RadioReportId("ang_c_100322", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsPulmonaryArteryEmbolismCentral { get; set; }

        [RadioReportId("ang_c_100323", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsPulmonaryArteryEmbolismCentralRight { get; set; }

        [RadioReportId("ang_c_100324", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsPulmonaryArteryEmbolismCentralLeft { get; set; }

        [RadioReportId("ang_c_100325", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsPulmonaryArteryEmbolismSegmentalRight { get; set; }

        [RadioReportId("ang_c_100326", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsPulmonaryArteryEmbolismSegmentalLeft { get; set; }

        [RadioReportId("ang_c_100328", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsRidingThrombus { get; set; }

        [RadioReportId("ang_c_100440", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public int? DiameterCentralPulmonaryArtery { get; set; }

        [RadioReportId("ang_c_100443", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public ThoracicDiagnosisType ThoracicDiagnosisType { get; set; }

        [RadioReportId("ang_c_100330", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsNormVariantVesselsPulmonaryVeins { get; set; }

        public NormVariantVesselsVariantsType NormVariantVesselsVariantsType { get; set; }

        public PartialAnomalousPulmonaryVenousConnectionType PartialAnomalousPulmonaryVenousConnectionType { get; set; }

        [RadioReportId("ang_c_100445", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsSuperiorVenaCava { get; set; }

        public SuperiorVenaCavaType SuperiorVenaCavaType { get; set; }

        [RadioReportId("ang_c_100514", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsInferiorVenaCava { get; set; }

        public InferiorVenaCavaType InferiorVenaCavaType { get; set; }

        [RadioReportId("ang_c_100341", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsMediastinalShiftToTheOppositeSide { get; set; }

        [RadioReportId("ang_c_100346", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        public bool IsCompleteAtelectasis { get; set; }

        public ThoracicLocalizationType ThoracicLocalizationType { get; set; }

        #endregion

        #region Abdominal

        [RadioReportId("ang_c_100216", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public AbdominalType AbdominalType { get; set; }

        public AbdominalLocalizationType AbdominalLocalizationType { get; set; }

        [RadioReportId("ang_c_100389", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        public bool IsAscitesHemoperitoneum { get; set; }

        [RadioReportId("ang_c_100390", InstanceName = nameof(SoftTissueFindingType.Abdominal))]

        public bool IsAscitesSignificant { get; set; }

        public FractureLocalizationType FractureLocalizationType { get; set; }

        [RadioReportId("ang_c_100462", InstanceName = nameof(SoftTissueFindingType.Abdominal),
            CustomConditionName = nameof(FractureLocalizationType.Spine))]
        [RadioReportId("ang_c_100464", InstanceName = nameof(SoftTissueFindingType.Abdominal),
            CustomConditionName = nameof(FractureLocalizationType.Ribs))]
        public bool IsStatusPost { get; set; }

        #endregion

        #region Extremities

        public ExtremitiesType ExtremitiesType { get; set; }

        [RadioReportId("ang_c_100398", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        public ExtremitiesMassLocalizationType ExtremitiesMassLocalizationType { get; set; }

        public CompartmentType CompartmentType { get; set; }

        public ExtremitiesFractureLocalizationType ExtremitiesFractureLocalizationType { get; set; }

        #endregion

        #region Lymphadenopathy

        [RadioReportId("ang_c_100221", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsCervical { get; set; }

        [RadioReportId("ang_c_100223", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsCervicalRight { get; set; }

        [RadioReportId("ang_c_100224", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsCervicalLeft { get; set; }

        [RadioReportId("ang_c_100225", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsThoracic { get; set; }

        [RadioReportId("ang_c_100226", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsMediastinal { get; set; }

        [RadioReportId("ang_c_100228", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsThoracicMediastinalRight { get; set; }

        [RadioReportId("ang_c_100229", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsThoracicMediastinalLeft { get; set; }

        [RadioReportId("ang_c_100230", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsPerihilar { get; set; }

        [RadioReportId("ang_c_100232", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsThoracicPerihilarRight { get; set; }

        [RadioReportId("ang_c_100233", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsThoracicPerihilarLeft { get; set; }

        [RadioReportId("ang_c_1003118", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsAxillary { get; set; }

        [RadioReportId("ang_c_1003120", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsAxillaryRight { get; set; }

        [RadioReportId("ang_c_1003121", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsAxillaryLeft { get; set; }

        [RadioReportId("ang_c_1003122", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsAbdominal { get; set; }

        [RadioReportId("ang_c_1003123", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsRetroperitoneal { get; set; }

        [RadioReportId("ang_c_1003124", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsIliac { get; set; }

        [RadioReportId("ang_c_1003126", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsIliacRight { get; set; }

        [RadioReportId("ang_c_1003127", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsIliacLeft { get; set; }

        [RadioReportId("ang_c_1003128", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsInguinal { get; set; }

        [RadioReportId("ang_c_1003130", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsInguinalRight { get; set; }

        [RadioReportId("ang_c_1003131", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsInguinalLeft { get; set; }

        [RadioReportId("ang_c_100469", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public int? MaxDiameterSAD { get; set; }

        public MorphologyType MorphologyType { get; set; }

        [RadioReportId("ang_c_100475", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsPreservedFattyHilum { get; set; }

        [RadioReportId("ang_c_100477", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsConfluent { get; set; }

        [RadioReportId("ang_c_100533", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsIncreasedInNumber { get; set; }

        [RadioReportId("ang_c_100534", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        public bool IsSuspect { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(SupraaorticHeadPathologyType.Fracture) =>
                    SupraaorticHeadPathologyType == SupraaorticHeadPathologyType.Fracture,

                nameof(SupraaorticHeadPathologyType.Mass) =>
                    SupraaorticHeadPathologyType == SupraaorticHeadPathologyType.Mass,

                nameof(ThoracicType.Pneumothorax) =>
                    ThoracicType == ThoracicType.Pneumothorax,

                nameof(ThoracicType.Atelectasis) =>
                    ThoracicType == ThoracicType.Atelectasis,

                nameof(SoftTissueFindingType.Thoracic) + nameof(ThoracicType.Mass) =>
                    FindingType == SoftTissueFindingType.Thoracic && ThoracicType == ThoracicType.Mass,

                nameof(SoftTissueFindingType.Thoracic) + nameof(ThoracicType.Fracture) =>
                    FindingType == SoftTissueFindingType.Thoracic && ThoracicType == ThoracicType.Fracture,

                nameof(ThoracicType) + nameof(ThoracicType.Mass) =>
                    ThoracicType == ThoracicType.Mass,

                nameof(ThoracicType) + nameof(ThoracicType.Fracture) =>
                    ThoracicType == ThoracicType.Fracture,

                "AdrenalGlandsKidneysOvaries" =>
                    AbdominalLocalizationType == AbdominalLocalizationType.AdrenalGlands
                || AbdominalLocalizationType == AbdominalLocalizationType.Kidneys
                || AbdominalLocalizationType == AbdominalLocalizationType.Ovaries,

                nameof(AbdominalLocalizationType.Retroperitoneum) =>
                    AbdominalLocalizationType == AbdominalLocalizationType.Retroperitoneum,

                nameof(FractureLocalizationType.Spine) =>
                    FractureLocalizationType == FractureLocalizationType.Spine,

                nameof(FractureLocalizationType.Ribs) =>
                    FractureLocalizationType == FractureLocalizationType.Ribs,

                nameof(SoftTissueFindingType.Extremities) + nameof(ExtremitiesType.Mass) =>
                    FindingType == SoftTissueFindingType.Extremities && ExtremitiesType == ExtremitiesType.Mass,

                nameof(SoftTissueFindingType.Extremities) + nameof(ExtremitiesType.Fracture) =>
                    FindingType == SoftTissueFindingType.Extremities && ExtremitiesType == ExtremitiesType.Fracture,

                nameof(ThoracicType.PleuralEffusion) => 
                    ThoracicType == ThoracicType.PleuralEffusion,

                nameof(ThoracicType.PneumonicConsolidation) =>
                    ThoracicType == ThoracicType.PneumonicConsolidation,

                nameof(ExtremitiesMassLocalizationType.Pelvis) =>
                    ExtremitiesMassLocalizationType == ExtremitiesMassLocalizationType.Pelvis,

                "not" + nameof(ExtremitiesMassLocalizationType.Pelvis) =>
                    ExtremitiesMassLocalizationType != ExtremitiesMassLocalizationType.Pelvis && ExtremitiesMassLocalizationType != ExtremitiesMassLocalizationType.None,

                _ => false
            };
    }
}