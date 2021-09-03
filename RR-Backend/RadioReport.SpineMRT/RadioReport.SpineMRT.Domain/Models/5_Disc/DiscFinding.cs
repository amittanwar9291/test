using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Disc;
using DifferentialDiagnosisType = RadioReport.SpineMRT.Domain.Enums.Disc.DifferentialDiagnosisType;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class DiscFinding : FindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_m_050106")]
        public DiscFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_m_050203", InstanceName = nameof(DiscFindingType.AnnularFissure))]
        [RadioReportId("spi_m_050203", InstanceName = nameof(DiscFindingType.Degeneration))]
        [RadioReportId("spi_m_050203", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050203", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050203", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050203", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050205", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_050205", InstanceName = nameof(DiscFindingType.ErosiveIntervertebralOsteochondrosis))]
        [RadioReportId("spi_m_050209", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        [RadioReportId("spi_m_050205", InstanceName = nameof(DiscFindingType.Trauma))]
        [RadioReportId("spi_m_050209", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public SpineLocations SpineLocation { get; set; }

        public FindingDetailType FindingDetailType { get; set; }

        [RadioReportId("spi_m_050311", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050311", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050311", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050311", InstanceName = nameof(DiscFindingType.Sequestration))]
        public DiscLocations DiscLocation { get; set; }

        public ExpansionType ExpansionType { get; set; }

        public SpinalCanalStenosisType SpinalCanalStenosisType { get; set; }

        [RadioReportId("spi_m_0505301", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_0504301", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_0505301", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_0504301", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_0505301", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0505301", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_0505301", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_0504301", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public int? WidthOfTheSpinalCanalInMm { get; set; }

        public NerveRootAffectionType NerveRootAffectionType { get; set; }

        [RadioReportId("spi_m_050514", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050514", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsNerveRootRight { get; set; }

        [RadioReportId("spi_m_050515", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050515", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsNerveRootLeft { get; set; }

        public StenosisType StenosisType { get; set; }

        [RadioReportId("spi_m_050517", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050517", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsStenosisRight { get; set; }

        [RadioReportId("spi_m_050518", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050518", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsStenosisLeft { get; set; }

        [RadioReportId("spi_m_050312", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050312", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050312", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050312", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsOsteophyteFormation { get; set; }

        [RadioReportId("spi_m_050313", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050313", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050313", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050313", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsAccompanyingOsteochondrosis { get; set; }

        public ModicClassificationType ModicClassificationType { get; set; }

        [RadioReportId("spi_m_050411", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050411", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050411", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050411", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsAccompanyingFacetJointArthrosis { get; set; }

        [RadioReportId("spi_m_050413", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050413", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050413", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050413", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsAccompanyingFacetJointArthrosisLocalizationRight { get; set; }

        [RadioReportId("spi_m_050414", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_050414", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_050414", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050414", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsAccompanyingFacetJointArthrosisLocalizationLeft { get; set; }

        [RadioReportId("spi_m_0504500", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504500", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504500", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504500", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050416", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsHypertrophy { get; set; }

        [RadioReportId("spi_m_0504501", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504501", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504501", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504501", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050417", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_050362", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0502403", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050257", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsJointEffusion { get; set; }

        [RadioReportId("spi_m_0504502", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504502", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504502", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504502", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050418", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_050360", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0502401", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050255", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("spi_m_0504503", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504503", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504503", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504503", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050419", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsSynovialCyst { get; set; }

        [RadioReportId("spi_m_0504505", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504505", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504505", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504505", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050420", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsSynovialCystRight { get; set; }

        [RadioReportId("spi_m_0504506", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504506", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504506", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504506", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050421", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsSynovialCystLeft { get; set; }

        [RadioReportId("spi_m_0504507", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_m_0504507", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_m_0504507", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_0504507", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050422", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("spi_m_050317", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050317", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsDiameterMigrationSequester { get; set; }

        [RadioReportId("spi_m_050318", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050318", InstanceName = nameof(DiscFindingType.Sequestration))]
        public int? DiameterMigrationSequester { get; set; }

        [RadioReportId("spi_m_050320", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050320", InstanceName = nameof(DiscFindingType.Sequestration))]
        public bool IsCraniocaudalesLevel { get; set; }

        public CraniocaudalesLevelType CraniocaudalesLevelType { get; set; }

        [RadioReportId("spi_m_0505315", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        [RadioReportId("spi_m_0503506", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSecondary { get; set; }

        #endregion

        #region Degeneration

        [RadioReportId("spi_m_0503306", InstanceName = nameof(DiscFindingType.Degeneration))]
        public bool IsNarrowing { get; set; }

        [RadioReportId("spi_m_0503200", InstanceName = nameof(DiscFindingType.Degeneration))]
        public bool IsT2SignalReductionOfTheIntervertebralDisc { get; set; }

        [RadioReportId("spi_m_050303", InstanceName = nameof(DiscFindingType.Degeneration))]
        public bool IsBulging { get; set; }

        public BulgingType BulgingType { get; set; }

        public Enums.Disc.SideType SideType { get; set; }

        #endregion

        #region FacetJointArthrosis

        [RadioReportId("spi_m_050328", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsFacetJointArthrosisLocalizationRight { get; set; }

        [RadioReportId("spi_m_050329", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsFacetJointArthrosisLocalizationLeft { get; set; }

        [RadioReportId("spi_m_050513", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        public bool IsForaminalStenosis { get; set; }

        #endregion

        #region Inflammatory

        [RadioReportId("spi_m_050332", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsIncreasedSizeOfTheDisc { get; set; }

        [RadioReportId("spi_m_050333", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsT2wHyperintensityOfTheDisc { get; set; }

        [RadioReportId("spi_m_050334", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsContrastEnhancementOfTheDisc { get; set; }

        [RadioReportId("spi_m_050335", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsEpiduralInflammationOrAbscess { get; set; }

        [RadioReportId("spi_m_050336", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsExpansionInZDimension { get; set; }

        [RadioReportId("spi_m_050337", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public int? ExpansionInZDimensionInMm { get; set; }

        [RadioReportId("spi_m_050339", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsEpiduralContrastEnhancement { get; set; }

        [RadioReportId("spi_m_0504304", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public SpineAxialLocations SpineAxialLocation { get; set; }

        [RadioReportId("spi_m_0504305", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsParavertebralInflammatoryResponse { get; set; }

        [RadioReportId("spi_m_0504306", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("spi_m_0505306", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsAbscess { get; set; }

        [RadioReportId("spi_m_0505307", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsEpidural { get; set; }

        [RadioReportId("spi_m_0505308", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public int? LargestDiameterEpidural { get; set; }

        [RadioReportId("spi_m_0505310", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsIntraspinal { get; set; }

        [RadioReportId("spi_m_0505311", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public int? LargestDiameterIntraspinal { get; set; }

        [RadioReportId("spi_m_0505314", InstanceName = nameof(DiscFindingType.InflammatoryOrSpondylodiscitis))]
        public bool IsActiveDiscitis { get; set; }

        #endregion

        #region Trauma

        [RadioReportId("spi_m_0503308", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsRuptureOfPosteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_m_0503304", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsRuptureOfAnteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_m_0503305", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsRuptureOfDiscusIntervertebralis { get; set; }

        #endregion

        #region RheumatoidArthritis

        public PathologyType PathologyType { get; set; }

        [RadioReportId("spi_m_050438", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsEntheitis { get; set; }

        [RadioReportId("spi_m_050439", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsDiscitis { get; set; }

        [RadioReportId("spi_m_0504701", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_050440", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public bool IsArthritis { get; set; }

        public EntheitisType EntheitisType { get; set; }

        [RadioReportId("spi_m_050211", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSpondylitisAnterior { get; set; }

        [RadioReportId("spi_m_050212", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAnteriorT1w { get; set; }

        [RadioReportId("spi_m_050213", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAnteriorSTIR { get; set; }

        [RadioReportId("spi_m_050214", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAnteriorContrastEnhancement { get; set; }

        [RadioReportId("spi_m_050348", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSpondylitisPosterior { get; set; }

        [RadioReportId("spi_m_050349", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsPosteriorT1w { get; set; }

        [RadioReportId("spi_m_050350", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsPosteriorSTIR { get; set; }

        [RadioReportId("spi_m_050351", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsPosteriorContrastEnhancement { get; set; }

        [RadioReportId("spi_m_050442", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSpondylitisMarginalis { get; set; }

        [RadioReportId("spi_m_050443", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsMarginalisT1w { get; set; }

        [RadioReportId("spi_m_050444", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsMarginalisSTIR { get; set; }

        [RadioReportId("spi_m_050445", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsMarginalisContrastEnhancement { get; set; }

        [RadioReportId("spi_m_050459", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public SpondylitisNumberType SpondylitisNumberType { get; set; }

        [RadioReportId("spi_m_050220", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSclerosis { get; set; }

        [RadioReportId("spi_m_050221", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsT1wHyperintensity { get; set; }

        [RadioReportId("spi_m_0502500", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSTIRHypointense { get; set; }

        [RadioReportId("spi_m_050222", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsSyndesmophyterose { get; set; }

        [RadioReportId("spi_m_050223", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsErosionOfAnteriorVertebraRomanusLesion { get; set; }

        [RadioReportId("spi_m_050224", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsVertebralBodySquaring { get; set; }

        [RadioReportId("spi_m_050225", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsMultisegmAnkylosing { get; set; }

        [RadioReportId("spi_m_050226", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0504509", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsLigamentOssification { get; set; }

        [RadioReportId("spi_m_050227", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0504510", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsAnteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_m_050228", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0504511", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsPosteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_m_050229", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0504512", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsLiggFlava { get; set; }

        [RadioReportId("spi_m_050230", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0504513", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsLiggInterspinosa { get; set; }

        [RadioReportId("spi_m_050231", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0504514", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsLiggSupraspinosa { get; set; }

        [RadioReportId("spi_m_050234", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_050531", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsAnderssonLesion { get; set; }

        [RadioReportId("spi_m_050241", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_050538", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsAnderssonFracture { get; set; }

        public AnderssonFractureType AnderssonFractureType { get; set; }

        [RadioReportId("spi_m_050361", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0502402", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050256", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsSynovialitis { get; set; }

        [RadioReportId("spi_m_050363", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0502404", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050259", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsAnkylosis { get; set; }

        [RadioReportId("spi_m_050364", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0502405", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050260", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsErosions { get; set; }

        [RadioReportId("spi_m_050244-l", InstanceName = nameof(DifferentialDiagnosisType1), IsExportable = false)]
        public DifferentialDiagnosisType DifferentialDiagnosisType1 { get; set; }

        [RadioReportId("spi_m_0503501-l", InstanceName = nameof(DifferentialDiagnosisType2), IsExportable = false)]
        public DifferentialDiagnosisType DifferentialDiagnosisType2 { get; set; }

        [RadioReportId("spi_m_050250", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsParasyndesmophyte { get; set; }

        [RadioReportId("spi_m_050451", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsPeriostitis { get; set; }

        [RadioReportId("spi_m_050367", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAtlantBoneMarrowEdema { get; set; }

        [RadioReportId("spi_m_050368", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAtlantSynovialitis { get; set; }

        [RadioReportId("spi_m_050369", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAtlantSynovialProliferation { get; set; }

        [RadioReportId("spi_m_050370", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAtlantJointEffusion { get; set; }

        [RadioReportId("spi_m_050372", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsAtlantErosions { get; set; }

        [RadioReportId("spi_m_050373", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        public bool IsDensErosion { get; set; }

        public AtlantoOccipitaleDistanceType AtlantoOccipitaleDistanceType { get; set; }

        [RadioReportId("spi_m_050263", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050541", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("spi_m_050264", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("spi_m_050542", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public bool IsIrregularThickeningOfTheCorticalBone { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(FindingDetailType.Localization) => FindingDetailType.ToString() == customConditionId,
                nameof(FindingDetailType.BroadBase) => FindingDetailType.ToString() == customConditionId,
                nameof(PathologyType.SpondyliltisAnkylosane) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.PsoriaticArthritis) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.RheumatoidArthritis) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.RheumatoidDisease) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease)
                    => PathologyType == PathologyType.SpondyliltisAnkylosane || PathologyType == PathologyType.PsoriaticArthritis || PathologyType == PathologyType.RheumatoidDisease,
                nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) 
                    => PathologyType == PathologyType.SpondyliltisAnkylosane || PathologyType == PathologyType.PsoriaticArthritis,
                nameof(PathologyType.RheumatoidArthritis) + nameof(PathologyType.RheumatoidDisease) 
                    => PathologyType == PathologyType.RheumatoidArthritis || PathologyType == PathologyType.RheumatoidDisease,
                _ => false
            };

        #region ImageFile

        #region Anterior

        [RadioReportId("uni_05_003_02", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public string AnteriorSerialNumber { get; set; }

        [RadioReportId("uni_05_005_02", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public string AnteriorPictureNumber { get; set; }

        public Guid? AnteriorImageFileId { get; set; }

        [RadioReportId("uni_05_007_02-l", InstanceName="SpineMRT.DiscFinding.Two", IsExportable = false,
            CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public ImageFile AnteriorImageFile { get; set; }

        #endregion

        #region Posterior

        [RadioReportId("uni_05_003_03", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public string PosteriorSerialNumber { get; set; }

        [RadioReportId("uni_05_005_03", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public string PosteriorPictureNumber { get; set; }

        public Guid? PosteriorImageFileId { get; set; }

        [RadioReportId("uni_05_007_03-l", InstanceName = "SpineMRT.DiscFinding.Three", IsExportable = false,
            CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public ImageFile PosteriorImageFile { get; set; }

        #endregion

        #region Marginalis

        [RadioReportId("uni_05_003_04", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public string MarginalisSerialNumber { get; set; }

        [RadioReportId("uni_05_005_04", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public string MarginalisPictureNumber { get; set; }

        public Guid? MarginalisImageFileId { get; set; }

        [RadioReportId("uni_05_007_04-l", InstanceName = "SpineMRT.DiscFinding.Four", IsExportable = false,
            CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis) + nameof(PathologyType.RheumatoidDisease))]
        public ImageFile MarginalisImageFile { get; set; }

        #endregion

        #region Discitis

        [RadioReportId("uni_05_003_01", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("uni_05_003_05", CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public string DiscitisSerialNumber { get; set; }

        [RadioReportId("uni_05_005_01", CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("uni_05_005_05", CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public string DiscitisPictureNumber { get; set; }

        public Guid? DiscitisImageFileId { get; set; }

        [RadioReportId("uni_05_007_01-l", InstanceName = "SpineMRT.DiscFinding.One", IsExportable = false,
            CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("uni_05_007_05-l", InstanceName = "SpineMRT.DiscFinding.Five", IsExportable = false,
            CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public ImageFile DiscitisImageFile { get; set; }

        #endregion

        #region Periostitis

        [RadioReportId("uni_05_003_02", CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("uni_05_003_06", CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public string PeriostitisSerialNumber { get; set; }

        [RadioReportId("uni_05_005_02", CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("uni_05_005_06", CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public string PeriostitisPictureNumber { get; set; }

        public Guid? PeriostitisImageFileId { get; set; }

        [RadioReportId("uni_05_007_02-l", InstanceName = "SpineMRT.DiscFinding.Two", IsExportable = false,
            CustomConditionName = nameof(PathologyType.RheumatoidArthritis))]
        [RadioReportId("uni_05_007_06-l", InstanceName = "SpineMRT.DiscFinding.Six", IsExportable = false,
            CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        public ImageFile PeriostitisImageFile { get; set; }

        #endregion

        public void DropImageFile(Guid? imageFileId)
        {
            if (imageFileId == AnteriorImageFileId)
            {
                SetImageFile(null, nameof(AnteriorImageFile));
            }
            else if (imageFileId == PosteriorImageFileId)
            {
                SetImageFile(null, nameof(PosteriorImageFile));
            }
            else if (imageFileId == MarginalisImageFileId)
            {
                SetImageFile(null, nameof(MarginalisImageFile));
            }
            else if (imageFileId == DiscitisImageFileId)
            {
                SetImageFile(null, nameof(DiscitisImageFile));
            }
            else if (imageFileId == PeriostitisImageFileId)
            {
                SetImageFile(null, nameof(PeriostitisImageFile));
            }
        }

        public Guid? GetImageFileGuid(string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(AnteriorImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return AnteriorImageFileId;
            }
            else if (fileType.Equals(nameof(PosteriorImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return PosteriorImageFileId;
            }
            else if (fileType.Equals(nameof(MarginalisImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return MarginalisImageFileId;
            }
            else if (fileType.Equals(nameof(DiscitisImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return DiscitisImageFileId;
            }
            else if (fileType.Equals(nameof(PeriostitisImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return PeriostitisImageFileId;
            }
            else
            {
                return null;
            }
        }

        public void SetImageFile(ImageFile imageFile, string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(AnteriorImageFile), StringComparison.OrdinalIgnoreCase))
            {
                AnteriorImageFile = imageFile;
                AnteriorImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(PosteriorImageFile), StringComparison.OrdinalIgnoreCase))
            {
                PosteriorImageFile = imageFile;
                PosteriorImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(MarginalisImageFile), StringComparison.OrdinalIgnoreCase))
            {
                MarginalisImageFile = imageFile;
                MarginalisImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(DiscitisImageFile), StringComparison.OrdinalIgnoreCase))
            {
                DiscitisImageFile = imageFile;
                DiscitisImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(PeriostitisImageFile), StringComparison.OrdinalIgnoreCase))
            {
                PeriostitisImageFile = imageFile;
                PeriostitisImageFileId = imageFile?.Id;
            }                 
        }

        public List<Guid> ImageIds
        {
            get
            {
                var result = new List<Guid>();
                var temp = new[]
                {
                    AnteriorImageFileId,
                    PosteriorImageFileId,
                    MarginalisImageFileId,
                    DiscitisImageFileId,
                    PeriostitisImageFileId
                };
                foreach (var id in temp)
                {
                    if (id.HasValue)
                    {
                        result.Add(id.Value);
                    }
                }
                return result;
            }
        }

        public bool HasImages =>
            AnteriorImageFileId.HasValue ||
            PosteriorImageFileId.HasValue ||
            MarginalisImageFileId.HasValue ||
            DiscitisImageFileId.HasValue ||
            PeriostitisImageFileId.HasValue;

        #endregion
    }
}
