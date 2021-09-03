using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons;

namespace RadioReport.FeetMRT.Domain.Models
{
    public class LigamentsAndTendonsFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("anc_m_050106")]
        public LigamentsAndTendonsFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("anc_m_050503", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        [RadioReportId("anc_m_050509", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050523", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050526", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050482", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050539", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050548", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsSoftTissueHematoma { get; set; }

        public RuptureType RuptureType { get; set; }
        
        #endregion

        #region Ligamenta

        public LigamentaType LigamentaType { get; set; }

        public LigamentaLocalizationType LigamentaLocalizationType { get; set; }

        [RadioReportId("anc_m_050401", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsAnteriorTibiofibularLigament { get; set; }

        [RadioReportId("anc_m_050402", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsPosteriorTibiofibularLigament { get; set; }

        [RadioReportId("anc_m_050403", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsTertiusFracture { get; set; }

        [RadioReportId("anc_m_050404", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsInterosseousTibiofibularLigament { get; set; }

        [RadioReportId("anc_m_050405", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsAnteriorTalofibularLigament { get; set; }

        [RadioReportId("anc_m_050408", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsCalcaneofibularLigament { get; set; }

        [RadioReportId("anc_m_050409", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsPosteriorTalofibularLigament { get; set; }

        [RadioReportId("anc_m_050411", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsTibionavicularLigament { get; set; }

        [RadioReportId("anc_m_050412", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsAvulsionFractureOfTheMedialMalleolus { get; set; }

        [RadioReportId("anc_m_050413", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsTibiocalcanealLigament { get; set; }

        [RadioReportId("anc_m_050414", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsParsTibiocalcaneareBonyAvulsionOnMalleolusMedialis { get; set; }

        [RadioReportId("anc_m_050416", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsAnteriorTibiotalarLigament { get; set; }

        [RadioReportId("anc_m_050417", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsPosteriorTibiotalarLigament { get; set; }
        
        public AgeOfTheLesionType AgeOfTheLesionType { get; set; }

        [RadioReportId("anc_m_050505", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsScarTissue { get; set; }

        [RadioReportId("anc_m_050306", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsInferoplantarLongitudinalLigament { get; set; }

        [RadioReportId("anc_m_050307", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsMedioplantarObliqueLigament { get; set; }

        [RadioReportId("anc_m_050308", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsSuperomedialCalcaneonavicularLigament { get; set; }

        public PartialRuptureType PartialRuptureType { get; set; }

        [RadioReportId("anc_m_050422", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsIncreasedT2Signal { get; set; }

        [RadioReportId("anc_m_050424", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsWithRetraction { get; set; }

        [RadioReportId("anc_m_050310", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsTalocalcanealLigamentRupture { get; set; }

        [RadioReportId("anc_m_050311", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsCervicalLigamentRupture { get; set; }

        [RadioReportId("anc_m_050312", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsTalocalcanealInterosseouseLigamentRupture { get; set; }

        [RadioReportId("anc_m_050313", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsTarsalSinusFatEdema { get; set; }

        [RadioReportId("anc_m_050314", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsGanglion { get; set; }

        [RadioReportId("anc_m_050315", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public int? DiameterInMm { get; set; }

        [RadioReportId("anc_m_050317", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsCalcaneonavicularLigament { get; set; }

        [RadioReportId("anc_m_050318", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsCalcaneocuboidalLigament { get; set; }

        [RadioReportId("anc_m_050319", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsOsseousAvulsionFracture { get; set; }

        [RadioReportId("anc_m_050320", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsAnteriorProcessOfTheCalcaneus { get; set; }

        [RadioReportId("anc_m_050321", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsLongPlantarLigament { get; set; }

        [RadioReportId("anc_m_050322", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        public bool IsShortPlantarLigament { get; set; }

        #endregion

        #region Tendinopathy

        #region TendinopathyCommon

        [RadioReportId("anc_m_050235", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public ExtraarticularLocalizationType ExtraarticularLocalizationType { get; set; }

        [RadioReportId("anc_m_050350", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050526", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050472", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050485", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050545", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_0504110", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public int? RetractionInMm { get; set; }

        [RadioReportId("anc_m_050343", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050465", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050479", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050521", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050521", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_0504103", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public int? MaxExtentInCrossSectionInPercent {get; set;}

        [RadioReportId("anc_m_050347", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_0505103", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_0504103", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_0504108", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public int? CraniocaudaleExtensionInMm { get; set; }
        
        [RadioReportId("anc_m_050237", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050240", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050243", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050246", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050249", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050252", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsTendinopathy { get; set; }

        [RadioReportId("anc_m_050238", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050241", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050244", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050247", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050250", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050253", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsTear { get; set; }

        [RadioReportId("anc_m_050331", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050354", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050359", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050371", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050382", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050387", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsT2wPDHyperintensity { get; set; }

        [RadioReportId("anc_m_050332", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050355", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050360", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050372", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050383", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050388", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsT1wHyperintensity { get; set; }

        [RadioReportId("anc_m_050333", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050356", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050361", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050373", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050384", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050389", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsThickening { get; set; }

        [RadioReportId("anc_m_050510", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050524", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050527", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050483", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050540", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050550", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsReRupture { get; set; }

        [RadioReportId("anc_m_050453", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050364", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050376", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050489", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050392", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsPeritendinitis { get; set; }

        [RadioReportId("anc_m_050454", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050366", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050377", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050491", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050393", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsTendonHypervascularization { get; set; }

        [RadioReportId("anc_m_050459", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050368", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        public bool IsTendonDislocation { get; set; }

        [RadioReportId("anc_m_050345", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_0505100", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_0504100", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_0504105", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsLongitudinalTear { get; set; }


        [RadioReportId("anc_m_050378", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050496", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsAfterHalluxValgusSurgery {get; set;}
        
        [RadioReportId("anc_m_050379", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050497", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsContactWithOsteosynthesisMaterial {get; set;}

        [RadioReportId("anc_m_050363", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050375", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050391", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        [RadioReportId("anc_m_050488", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsTendovaginitis { get; set; }
        
        [RadioReportId("anc_m_050430", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050365", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050490", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsCalcifyingTendinitis { get; set; }

        [RadioReportId("anc_m_050493", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_050394", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsFluidInTendonSheath {get; set;}

        #endregion


        #region AchillesTendon

        public LocalizationType LocalizationType { get; set; }
        
        [RadioReportId("anc_m_050328", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public int? DistanceToTuberCalcaneiInMm { get; set; }

        [RadioReportId("anc_m_050334", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsConvexAnteriorContour { get; set; }

        [RadioReportId("anc_m_050336", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public int? MaxSagittalDiameterInMm { get; set; }

        [RadioReportId("anc_m_050338", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsFusiformContour { get; set; }

        [RadioReportId("anc_m_050429", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsRetrocalcanealSubachillealBursitis { get; set; }

        [RadioReportId("anc_m_050431", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsIntratendinousSoftTissueFoci { get; set; }

        [RadioReportId("anc_m_050432", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsTendonHypervascularisation { get; set; }

        [RadioReportId("anc_m_050433", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsOsteitisOnTheTuberCalcanei { get; set; }

        [RadioReportId("anc_m_050434", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsHaglundDeformity { get; set; }

        [RadioReportId("anc_m_050435", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsDorsalHeelSpur { get; set; }

        [RadioReportId("anc_m_050437", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public int? SizeInMm { get; set; }

        [RadioReportId("anc_m_050439", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsPeritendinousEdema { get; set; }

        [RadioReportId("anc_m_050440", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsEdemaInKagerFatPad { get; set; }

        [RadioReportId("anc_m_050507", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("anc_m_050441-l", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), IsExportable = false)]
        public RuptureLocalizationType RuptureLocalizationType { get; set; }

        [RadioReportId("anc_m_050446", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public int? DistanceFromTuberCalcanei { get; set; }

        #endregion


        #region TendonOfMPeroneusLongusAndBrevis


        [RadioReportId("anc_m_050449-l", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), IsExportable = false)]
        public AssociatedFindingsType AssociatedFindingsType {get; set;}

        [RadioReportId("anc_m_050452", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsMPeroneusLongusTendon{ get; set; }

        [RadioReportId("anc_m_050455", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsFluidInTheCommonTendonSheathOfThePeronealTendons { get; set; }

        [RadioReportId("anc_m_050456", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsFluidInTheTendonSheathDistalToTheLateralMalleolus { get; set; }

        [RadioReportId("anc_m_050457", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsOsPeroneum { get; set; }

        [RadioReportId("anc_m_050458", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        public bool IsGanglionAtTheLevelOfTheInsertionAtOsMetatarsalD1OsCuboideum { get; set; }

        #endregion

        #region TendonOfTheAnteriorTibialisMuscle
        
        [RadioReportId("anc_m_050367", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        public bool IsTendovaginitisDueToOsteophyteAtDorsomedialDistalTibia { get; set; }

        #endregion

        #region TendonOfMFlexorHallucisLongus

        [RadioReportId("anc_m_050492", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsGanglionToInsertionBaseDistalPhalanxD1 {get; set;}
        
        [RadioReportId("anc_m_050494", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsAnkleJointEffusion {get; set;}
        
        [RadioReportId("anc_m_050495", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        public bool IsOsTrigonumSyndrome {get; set;}

        [RadioReportId("anc_m_050535-l", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), IsExportable = false)]
        public LocalizationOfTendonRuptureType LocalizationOfTendonRuptureType {get; set;}

        #endregion

        #region TendonOfThePosteriorTibialisMuscle
        
        [RadioReportId("anc_m_050395", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsAccompanyingBoneMarrowEdema {get; set;}
        
        [RadioReportId("anc_m_050396", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsOsTibialAccessorium {get; set;}
        
        [RadioReportId("anc_m_0504112", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsPseudotumorOnTheBackOfTheFoot {get; set;}
        
        [RadioReportId("anc_m_050549", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        public bool IsPesPlanumDeformity {get; set;}

        #endregion

        #endregion

        public bool CheckCondition(string customConditionId) {

            return customConditionId switch
            {
                nameof(LigamentaLocalizationType.RuptureOfTheTibiofibularSyndesmosis) => LigamentaLocalizationType == LigamentaLocalizationType.RuptureOfTheTibiofibularSyndesmosis,
                nameof(LigamentaLocalizationType.RuptureOfLateralLigamentOfTheAnkle) => LigamentaLocalizationType == LigamentaLocalizationType.RuptureOfLateralLigamentOfTheAnkle,
                nameof(LigamentaType.TearOfTheSpringLigamentComplex) => LigamentaType == LigamentaType.TearOfTheSpringLigamentComplex,
                nameof(ExtraarticularLocalizationType.AchillesTendon) => ExtraarticularLocalizationType == ExtraarticularLocalizationType.AchillesTendon,
                nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis) => 
                    ExtraarticularLocalizationType == ExtraarticularLocalizationType.TendonOfMPeroneusLongus || ExtraarticularLocalizationType == ExtraarticularLocalizationType.TendonOfMPeroneusBrevis,
                nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle) => ExtraarticularLocalizationType == ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle,
                nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus) => ExtraarticularLocalizationType == ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus,
                nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus) => ExtraarticularLocalizationType == ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus,
                nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle) => ExtraarticularLocalizationType == ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle,
                _ => false
            };
        }
    }
}
