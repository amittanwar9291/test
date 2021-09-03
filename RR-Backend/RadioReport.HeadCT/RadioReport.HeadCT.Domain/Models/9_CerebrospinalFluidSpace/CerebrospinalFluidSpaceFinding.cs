using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace;
using System;

namespace RadioReport.HeadCT.Domain.Models
{
    public class CerebrospinalFluidSpaceFinding : FindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_090106")]
        public CerebrospinalFluidSpaceFindingType FindingType { get; set; }

        #region Common

        #region ImageFile

        [RadioReportId("uni_09_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_09_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_09_007-l", InstanceName = "HeadCT.CerebrospinalFluidSpace.CerebrospinalFluidSpaceFinding", IsExportable = false)]
        public ImageFile ImageFile { get; set; }

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            ImageFile = imageFile;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            ImageFile = null;
        }

        #endregion

        [RadioReportId("hea_c_090111-l", InstanceName = InstanceNames.CerebrospinalFluidSpace, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_c_090209", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090323", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsLateralVentricle { get; set; }

        [RadioReportId("hea_c_090210", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090324", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsLateralVentricleRight { get; set; }

        [RadioReportId("hea_c_090211", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090325", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsAnteriorHornRight { get; set; }

        [RadioReportId("hea_c_090212", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090326", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCellaMediaRight { get; set; }

        [RadioReportId("hea_c_090213", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090327", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTrigonumRight { get; set; }

        [RadioReportId("hea_c_090214", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090328", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsPosteriorHornRight { get; set; }

        [RadioReportId("hea_c_090215", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090329", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTemporalHornRight { get; set; }

        [RadioReportId("hea_c_090216", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090330", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsLateralVentricleLeft { get; set; }

        [RadioReportId("hea_c_090217", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090331", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsAnteriorHornLeft { get; set; }

        [RadioReportId("hea_c_090218", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090332", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCellaMediaLeft { get; set; }

        [RadioReportId("hea_c_090219", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090333", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTrigonumLeft { get; set; }

        [RadioReportId("hea_c_090220", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090334", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsPosteriorHornLeft { get; set; }

        [RadioReportId("hea_c_090221", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090335", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsTemporalHornLeft { get; set; }

        [RadioReportId("hea_c_090302", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090424", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenMonroi { get; set; }

        [RadioReportId("hea_c_090303", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090425", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenMonroiRight { get; set; }

        [RadioReportId("hea_c_090304", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090426", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenMonroiLeft { get; set; }

        [RadioReportId("hea_c_090305", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090427", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsIIIVentricle { get; set; }

        [RadioReportId("hea_c_090306", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090428", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsAquaeductusMesencephaliSylvii { get; set; }

        [RadioReportId("hea_c_090307", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090429", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsIVVentricle { get; set; }

        [RadioReportId("hea_c_090308", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090430", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenLuschkae { get; set; }

        [RadioReportId("hea_c_090309", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090431", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenLuschkaeRight { get; set; }

        [RadioReportId("hea_c_090372", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090452", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenLuschkaeLeft { get; set; }

        [RadioReportId("hea_c_090395", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090482", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsForamenMagendie { get; set; }

        [RadioReportId("hea_c_090403", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090519", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090467", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSubarachnoidCisterns { get; set; }

        [RadioReportId("hea_c_090404", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090520", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090468", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSuprasellarCistern { get; set; }

        [RadioReportId("hea_c_090405", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090521", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090469", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsInterpeduncularCistern { get; set; }

        [RadioReportId("hea_c_090406", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090522", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090470", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsQuadrigeminalCistern { get; set; }

        [RadioReportId("hea_c_090407", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090523", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090471", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPontineCistern { get; set; }

        [RadioReportId("hea_c_090408", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090524", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090472", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPrepontineCistern { get; set; }

        [RadioReportId("hea_c_090409", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090525", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090473", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPontomedullaryCistern { get; set; }

        [RadioReportId("hea_c_090410", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090526", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090474", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPontocerebellarCistern { get; set; }

        [RadioReportId("hea_c_090411", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090527", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090475", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsMeckelCave { get; set; }

        [RadioReportId("hea_c_090412", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090528", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090476", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsCisternaMagna { get; set; }

        [RadioReportId("hea_c_090413", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090529", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_090477", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsInsularCistern { get; set; }

        [RadioReportId("hea_c_090245", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_0902106", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? Size { get; set; }

        [RadioReportId("hea_c_090248", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_0902109", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_c_090251", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_0902112", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_c_090465", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090275", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsRightSide { get; set; }

        [RadioReportId("hea_c_090466", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090276", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsLeftSide { get; set; }

        [RadioReportId("hea_c_0902114-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_c_090396-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public DensityType DensityType { get; set; }

        [RadioReportId("hea_c_0903103", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_c_0903120", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public int? Quantitative { get; set; }

        [RadioReportId("hea_c_090483-l", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_c_090486-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_0903105-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hea_c_0903108-l", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_c_0903111-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public ContrastDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("hea_c_090233", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090266", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_c_090236", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_c_090269", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSubordinate { get; set; }

        #endregion

        #region NormVariantVentricle

        public NormVariantVentricleType NormVariantVentricleType { get; set; }

        #endregion

        #region VentricleConfiguration

        public ConfigurationType ConfigurationType { get; set; }

        public ShrinkingType ShrinkingType { get; set; }

        public AsymmetryType AsymmetryType { get; set; }

        [RadioReportId("hea_c_090560", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsStenosis { get; set; }

        [RadioReportId("hea_c_090561", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsScarredResiduals { get; set; }

        [RadioReportId("hea_c_090562", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsParenchymalDefect { get; set; }

        [RadioReportId("hea_c_090294", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsTemporalHornExpansion { get; set; }

        [RadioReportId("hea_c_090296", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public CerebrospinalSideType SideType { get; set; }

        [RadioReportId("hea_c_090297", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsFlatteningOfTheGyri { get; set; }

        [RadioReportId("hea_c_090298", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsTransependymalPressureCaps { get; set; }

        [RadioReportId("hea_c_090299", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsPlumpingPosteriorHorns { get; set; }

        [RadioReportId("hea_c_0902100", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsEnlargementOfIIIVentricle { get; set; }

        [RadioReportId("hea_c_0902101", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsHyperdynamicFluidFlowVoid { get; set; }

        [RadioReportId("hea_c_0902102", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsInTheIIIVentricle { get; set; }

        [RadioReportId("hea_c_0902103", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsInTheAqueduct { get; set; }

        [RadioReportId("hea_c_090374", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsAtrophyOfBrainParenchyma { get; set; }

        [RadioReportId("hea_c_090375", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsCerebrospinalFluidNegativePressure { get; set; }

        [RadioReportId("hea_c_090377", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsSlitVentricle { get; set; }

        [RadioReportId("hea_c_090378", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsThickeningDuraMater { get; set; }

        [RadioReportId("hea_c_090379", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsBilateralHygromas { get; set; }

        [RadioReportId("hea_c_090380", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsPachymeningealEnhancement { get; set; }

        [RadioReportId("hea_c_090381", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsTonsilDepression { get; set; }

        [RadioReportId("hea_c_090455", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public decimal? EvansIndex { get; set; }

        [RadioReportId("hea_c_090457", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? CorpusCallosumAngle { get; set; }

        [RadioReportId("hea_c_090460", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public bool IsExtended { get; set; }

        [RadioReportId("hea_c_090462", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("hea_c_090513", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? MamillopontineDistance { get; set; }

        [RadioReportId("hea_c_090516", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public int? PontomesencephalicAngle { get; set; }

        [RadioReportId("hea_c_090232", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public CerebrospinalVentricleDiagnosisType VentricleDifferentialDiagnosis1Type { get; set; }

        [RadioReportId("hea_c_090235", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        public CerebrospinalVentricleDiagnosisType VentricleDifferentialDiagnosis2Type { get; set; }

        #endregion

        #region Mass

        [RadioReportId("hea_c_090239", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosisIKnow1Type { get; set; }

        [RadioReportId("hea_c_090240", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_c_090240-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_c_090566", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSubstanceDefect { get; set; }

        [RadioReportId("hea_c_090567", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_090568", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_c_090569", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_090570", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_c_090571", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_c_090572", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_c_090573", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_c_090574", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_c_090576", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsDisplacement { get; set; }

        [RadioReportId("hea_c_090577", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_c_0902118", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSubependymalNodules { get; set; }

        [RadioReportId("hea_c_0902119", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCalcified { get; set; }

        [RadioReportId("hea_c_0902120", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHypertrophyChoroidPlexus { get; set; }

        [RadioReportId("hea_c_0902121", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_c_0902122", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_c_090265", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosisIDescribe1Type { get; set; }

        [RadioReportId("hea_c_090268", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosis2Type { get; set; }

        [RadioReportId("hea_c_090271", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosis3Type { get; set; }

        [RadioReportId("hea_c_090272", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool Is1LesionOfTheSameEntity { get; set; }

        #endregion

        #region SubarachnoidHemorrhage

        [RadioReportId("hea_c_090277", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsMedian { get; set; }

        [RadioReportId("hea_c_090383", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_c_090384", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsFrontobasal { get; set; }

        [RadioReportId("hea_c_090385", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_c_090386", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_c_090387", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_c_090388", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsInfratentorial { get; set; }

        public PatternType PatternType { get; set; }

        [RadioReportId("hea_c_090543", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsAdjacentToTheTentorium { get; set; }

        [RadioReportId("hea_c_090544", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsPerimesencephalic { get; set; }

        [RadioReportId("hea_c_090448", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsVasospasm { get; set; }

        [RadioReportId("hea_c_090449", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsIschemia { get; set; }

        [RadioReportId("hea_c_090450", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSubduralHematoma { get; set; }

        [RadioReportId("hea_c_090451", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsEpiduralHematoma { get; set; }

        public FisherScaleType FisherScaleType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(CerebrospinalFluidSpaceFindingType.Mass) => FindingType.ToString() == customConditionId,
            nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
