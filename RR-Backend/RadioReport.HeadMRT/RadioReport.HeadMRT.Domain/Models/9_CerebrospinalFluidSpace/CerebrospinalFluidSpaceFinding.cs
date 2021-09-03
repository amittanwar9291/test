using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CerebrospinalFluidSpaceFinding : CerebrospinalFluidSpaceFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("hea_m_090111-l", InstanceName = InstanceNames.CerebrospinalFluidSpace, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_m_090211", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090325", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsAnteriorHornRight { get; set; }

        [RadioReportId("hea_m_090212", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090326", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCellaMediaRight { get; set; }

        [RadioReportId("hea_m_090213", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090327", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTrigonumRight { get; set; }

        [RadioReportId("hea_m_090214", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090328", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsPosteriorHornRight { get; set; }

        [RadioReportId("hea_m_090215", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090329", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTemporalHornRight { get; set; }

        [RadioReportId("hea_m_090217", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090331", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsAnteriorHornLeft { get; set; }

        [RadioReportId("hea_m_090218", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090332", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCellaMediaLeft { get; set; }

        [RadioReportId("hea_m_090219", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090333", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTrigonumLeft { get; set; }

        [RadioReportId("hea_m_090220", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090334", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsPosteriorHornLeft { get; set; }

        [RadioReportId("hea_m_090221", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090335", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTemporalHornLeft { get; set; }

        [RadioReportId("hea_m_090302", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090424", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenOfMonro { get; set; }

        [RadioReportId("hea_m_090303", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090425", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenOfMonroRight { get; set; }

        [RadioReportId("hea_m_090304", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090426", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenOfMonroLeft { get; set; }

        [RadioReportId("hea_m_090305", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090427", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsIIIVentricle { get; set; }

        [RadioReportId("hea_m_090306", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090428", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsAquaeductusMesencephaliSylvii { get; set; }

        [RadioReportId("hea_m_090307", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090429", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsIVVentricle { get; set; }

        [RadioReportId("hea_m_090308", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090430", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForaminaOfLuschka { get; set; }

        [RadioReportId("hea_m_090309", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090431", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForaminaOfLuschkaRight { get; set; }

        [RadioReportId("hea_m_090372", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090452", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForaminaOfLuschkaLeft { get; set; }

        [RadioReportId("hea_m_090402", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090518", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenOfMagendie { get; set; }

        [RadioReportId("hea_m_090403", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090519", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090467", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSubarachnoidCisterns { get; set; }

        [RadioReportId("hea_m_090404", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090520", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090468", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSuprasellarCistern { get; set; }

        [RadioReportId("hea_m_090405", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090521", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090469", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsInterpeduncularCistern { get; set; }

        [RadioReportId("hea_m_090406", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090522", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090470", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsQuadrigeminalCistern { get; set; }

        [RadioReportId("hea_m_090407", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090523", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090471", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPontineCistern { get; set; }

        [RadioReportId("hea_m_090408", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090524", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090472", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPrepontineCistern { get; set; }

        [RadioReportId("hea_m_090409", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090525", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090473", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPontomedullaryCistern { get; set; }

        [RadioReportId("hea_m_090410", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090526", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090474", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPontocerebellarCistern { get; set; }

        [RadioReportId("hea_m_090411", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090527", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090475", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsMeckelCave { get; set; }

        [RadioReportId("hea_m_090412", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090528", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090476", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsCisternaMagna { get; set; }

        [RadioReportId("hea_m_090413", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090529", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090477", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsInsularCistern { get; set; }

        [RadioReportId("hea_m_090465", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090275", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsRightSide { get; set; }

        [RadioReportId("hea_m_090466", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090276", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsLeftSide { get; set; }

        [RadioReportId("hea_m_090245", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_0902106", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? Size { get; set; }

        [RadioReportId("hea_m_090248", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_0902109", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_m_090251", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_0902112", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_m_090233", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090266", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_m_090236", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090269", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSubordinate { get; set; }

        #endregion

        #region NormVariantVentricle

        public NormVariantVentricleType NormVariantVentricleType { get; set; }
        
        #endregion

        #region VentricleConfiguration

        public ConfigurationType ConfigurationType { get; set; }

        public ShrinkingType ShrinkingType { get; set; }

        public AsymmetryType AsymmetryType { get; set; }

        [RadioReportId("hea_m_090560", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsStenosis { get; set; }

        [RadioReportId("hea_m_090561", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsScarredResiduals { get; set; }

        [RadioReportId("hea_m_090562", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsParenchymalDefect { get; set; }

        [RadioReportId("hea_m_090294", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsTemporalHornExpansion { get; set; }

        [RadioReportId("hea_m_090296", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public CerebrospinalSideType SideType { get; set; }

        [RadioReportId("hea_m_090297", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsFlatteningOfTheGyri { get; set; }

        [RadioReportId("hea_m_090298", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsTransependymalPressureCaps { get; set; }

        [RadioReportId("hea_m_090299", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsPlumpingPosteriorHorns { get; set; }

        [RadioReportId("hea_m_0902100", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsEnlargementOfIIIVentricle { get; set; }

        [RadioReportId("hea_m_0902101", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsHyperdynamicFluidFlowVoid { get; set; }

        [RadioReportId("hea_m_0902102", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsInTheIIIVentricle { get; set; }

        [RadioReportId("hea_m_0902103", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsInTheAqueduct { get; set; }

        [RadioReportId("hea_m_090373", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsCompressionBothSinuses { get; set; }

        [RadioReportId("hea_m_090374", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsAtrophyOfBrainParenchyma { get; set; }

        [RadioReportId("hea_m_090375", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsCerebrospinalFluidNegativePressure { get; set; }

        [RadioReportId("hea_m_090377", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsSlitVentricle { get; set; }

        [RadioReportId("hea_m_090378", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsThickeningDuraMater { get; set; }

        [RadioReportId("hea_m_090379", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsBilateralHygromas { get; set; }

        [RadioReportId("hea_m_090380", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsPachymeningealEnhancement { get; set; }

        [RadioReportId("hea_m_090381", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsTonsilDepression { get; set; }

        [RadioReportId("hea_m_090455", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public decimal? EvansIndex { get; set; }

        [RadioReportId("hea_m_090457", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? CorpusCallosumAngle { get; set; }

        [RadioReportId("hea_m_090460", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsExtended { get; set; }

        [RadioReportId("hea_m_090462", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("hea_m_090513", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? MamillopontineDistance { get; set; }

        [RadioReportId("hea_m_090516", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? PontomesencephalicAngle { get; set; }

        [RadioReportId("hea_m_090232", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public CerebrospinalVentricleDiagnosisType VentricleDifferentialDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_090235", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public CerebrospinalVentricleDiagnosisType VentricleDifferentialDiagnosis2Type { get; set; }
        
        #endregion

        #region Mass

        [RadioReportId("hea_m_090240", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_m_090240-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_m_090257", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_m_090259", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_090260", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_m_090352", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSubependymalNodules { get; set; }

        [RadioReportId("hea_m_090353", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCalcified { get; set; }

        [RadioReportId("hea_m_090265", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosisIDescribe1Type { get; set; }

        [RadioReportId("hea_m_090268", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosis2Type { get; set; }

        [RadioReportId("hea_m_090271", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosis3Type { get; set; }

        [RadioReportId("hea_m_090272", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool Is1LesionOfTheSameEntity { get; set; }
        
        #endregion

        #region SubarachnoidHemorrhage

        [RadioReportId("hea_m_090277", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsMedian { get; set; }

        [RadioReportId("hea_m_090383", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_m_090384", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsFrontobasal { get; set; }

        [RadioReportId("hea_m_090385", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_m_090386", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_m_090387", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_m_090388", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsInfratentorial { get; set; }

        public PatternType PatternType { get; set; }

        [RadioReportId("hea_m_090543", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsAdjacentToTheTentorium { get; set; }

        [RadioReportId("hea_m_090544", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPerimesencephalic { get; set; }

        [RadioReportId("hea_m_090448", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsVasospasm { get; set; }

        [RadioReportId("hea_m_090449", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsIschemia { get; set; }

        [RadioReportId("hea_m_090450", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSubduralHematoma { get; set; }

        [RadioReportId("hea_m_090451", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsEpiduralHematoma { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(CerebrospinalFluidSpaceFindingType.Mass) => FindingType.ToString() == customConditionId,
            nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
