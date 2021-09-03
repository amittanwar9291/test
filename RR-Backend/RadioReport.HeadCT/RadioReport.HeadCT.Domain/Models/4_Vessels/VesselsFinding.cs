using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.Vessels;
using System;
using System.Collections.Generic;
using ContrastEnhancementType = RadioReport.HeadCT.Domain.Enums.Vessels.ContrastEnhancementType;
using ShapeType = RadioReport.HeadCT.Domain.Enums.Vessels.ShapeType;

namespace RadioReport.HeadCT.Domain.Models
{
    public class VesselsFinding : FindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_040106")]
        public VesselsFindingType FindingType { get; set; }

        #region Common

        #region ImageFile

        [RadioReportId("uni_04_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007-l", InstanceName = "HeadCT.Vessels.VesselsFinding", IsExportable = false)]
        public ImageFile ImageFile { get; set; }

        [RadioReportId("uni_04_003_01")]
        public string Perfusion01SerialNumber { get; set; }

        [RadioReportId("uni_04_005_01")]
        public string Perfusion01PictureNumber { get; set; }

        public Guid? Perfusion01ImageFileId { get; set; }

        [RadioReportId("uni_04_007_01-l", InstanceName = "HeadCT.Vessels.VesselsFinding.Perfusion01", IsExportable = false)]
        public ImageFile Perfusion01ImageFile { get; set; }

        [RadioReportId("uni_04_003_02")]
        public string Perfusion02SerialNumber { get; set; }

        [RadioReportId("uni_04_005_02")]
        public string Perfusion02PictureNumber { get; set; }

        public Guid? Perfusion02ImageFileId { get; set; }

        [RadioReportId("uni_04_007_02-l", InstanceName = "HeadCT.Vessels.VesselsFinding.Perfusion02", IsExportable = false)]
        public ImageFile Perfusion02ImageFile { get; set; }

        public void SetImageFile(ImageFile imageFile, string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                ImageFileId = imageFile?.Id;
                ImageFile = imageFile;
            }
            else if (fileType.Equals(nameof(Perfusion01ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                Perfusion01ImageFileId = imageFile?.Id;
                Perfusion01ImageFile = imageFile;
            }
            else if (fileType.Equals(nameof(Perfusion02ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                Perfusion02ImageFileId = imageFile?.Id;
                Perfusion02ImageFile = imageFile;
            }
        }

        public Guid? GetImageFileGuid(string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return ImageFileId;
            }
            else if (fileType.Equals(nameof(Perfusion01ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return Perfusion01ImageFileId;
            }
            else if (fileType.Equals(nameof(Perfusion02ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return Perfusion02ImageFileId;
            }
            else
            {
                return null;
            }
        }

        public void DropImageFile(Guid? imageFileId)
        {
            if (imageFileId == ImageFileId)
            {
                SetImageFile(null, nameof(ImageFile));
            }
            else if (imageFileId == Perfusion01ImageFileId)
            {
                SetImageFile(null, nameof(Perfusion01ImageFile));
            }
            else if (imageFileId == Perfusion02ImageFileId)
            {
                SetImageFile(null, nameof(Perfusion02ImageFile));
            }
        }

        public List<Guid> ImageIds
        {
            get
            {
                var ids = new List<Guid>();

                if (ImageFileId.HasValue)
                {
                    ids.Add(ImageFileId.Value);
                }
                else if (Perfusion01ImageFileId.HasValue)
                {
                    ids.Add(Perfusion01ImageFileId.Value);
                }
                else if (Perfusion02ImageFileId.HasValue)
                {
                    ids.Add(Perfusion02ImageFileId.Value);
                }

                return ids;
            }
        }

        public bool HasImages => ImageFileId.HasValue || Perfusion01ImageFileId.HasValue || Perfusion02ImageFileId.HasValue;

        #endregion

        [RadioReportId("hea_c_040387", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0402127", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public CortexLocations CortexLocation { get; set; }

        [RadioReportId("hea_c_040483", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403172", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsPraecuneus { get; set; }

        [RadioReportId("hea_c_040485", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403174", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsCuneus { get; set; }

        [RadioReportId("hea_c_040486", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403175", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsLingualGyrus { get; set; }

        [RadioReportId("hea_c_040488", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403177", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsGyrusTemporalisTransversus { get; set; }

        [RadioReportId("hea_c_040489", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403178", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsLateralOccipitotemporalGyrus { get; set; }

        [RadioReportId("hea_c_040491", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403180", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsParsIntermedia { get; set; }

        [RadioReportId("hea_c_040492", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403181", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsSuperiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_c_040493", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403182", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsMiddleCerebellarPeduncle { get; set; }

        [RadioReportId("hea_c_040494", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403183", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsInferiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_c_040546", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0404128", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsCortex { get; set; }

        [RadioReportId("hea_c_040547", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0404129", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsWhiteMatter { get; set; }

        [RadioReportId("hea_c_040548", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0404130", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public WhiteMatterType WhiteMatterType { get; set; }

        public DetailsType DetailsType { get; set; }

        [RadioReportId("hea_c_040553", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0404135", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public BasalGangliaLocations BasalGangliaLocation { get; set; }

        [RadioReportId("hea_c_040222", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403131", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0403131", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0403131", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("hea_c_040225", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_c_0403134", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0403134", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0403134", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public int? ThirdPlaneInMm { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("hea_c_040393")]
        public SeverityType SeverityType { get; set; }

        [RadioReportId("hea_c_040394")]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("hea_c_040396")]
        public int? DiameterStenosisInMm { get; set; }

        [RadioReportId("hea_c_040399")]
        public int? DiameterDiseaseFreePoststenoticSegmentInMm { get; set; }

        [RadioReportId("hea_c_0403102")]
        public int? DegreeOfStenosisCalculatedInNASCETInPercentage { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("hea_c_0403115", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404170", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOcclusion))]
        [RadioReportId("hea_c_0403115", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("hea_c_0404170", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOcclusion))]
        [RadioReportId("hea_c_0403115", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("hea_c_0404170", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOcclusion))]
        [RadioReportId("hea_c_0403115", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("hea_c_0404170", InstanceName = nameof(VesselsFindingType.VertebralArtery), CustomConditionName = nameof(PathologyType.StenosisOcclusion))]
        [RadioReportId("hea_c_0403115", InstanceName = nameof(VesselsFindingType.VertebralArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        public int? LengthInMm { get; set; }

        [RadioReportId("hea_c_0404143", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404172", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_0404172", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404172", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0404172", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsShortStenosis { get; set; }

        [RadioReportId("hea_c_0403113")]
        public bool IsWallHematoma { get; set; }

        [RadioReportId("hea_c_0403118")]
        public bool IsContrastEnhancementOfTheArterialWall { get; set; }

        [RadioReportId("hea_c_0403119")]
        public bool IsLocoregionalObliterationOfFattyTissue { get; set; }

        [RadioReportId("hea_c_0403120")]
        public bool IsCaliberIrregularities { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_0403128")]
        public int? ExtensionAneurysmInMm { get; set; }

        [RadioReportId("hea_c_0403137")]
        public int? WidthAneurysmNeckInMm { get; set; }

        [RadioReportId("hea_c_0404178-l", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries), IsExportable = false)]
        [RadioReportId("hea_c_0404193", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404193", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public OrientationAneurysmType OrientationAneurysmType { get; set; }

        [RadioReportId("hea_c_0404184", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404195", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404195", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsSubarachnoidHemorrhage { get; set; }

        public SubarachnoidHemorrhageType SubarachnoidHemorrhageType { get; set; }

        public SubarachnoidHemorrhageLocalizationType SubarachnoidHemorrhageLocalizationType { get; set; }

        [RadioReportId("hea_c_040540", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404202", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404202", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsThrombolization { get; set; }

        [RadioReportId("hea_c_040541", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404203", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404203", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsEccentric { get; set; }

        [RadioReportId("hea_c_040542", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404204", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404204", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsDownstreamInfarctionAreas { get; set; }

        [RadioReportId("hea_c_040543", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404205", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404205", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsInflammatoryChange { get; set; }

        [RadioReportId("hea_c_040567", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_040559", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_040556", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        [RadioReportId("hea_c_0404192", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public VesselsDiagnosisType VesselsDiagnosisType { get; set; }

        public SideType SideType { get; set; }

        [RadioReportId("hea_c_0404164")]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_0404165")]
        public bool IsSoftPlaque { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("hea_c_0403143")]
        public bool IsPanarteritisNodosa { get; set; }

        [RadioReportId("hea_c_0404174")]
        public bool IsBranchesOfTheExternalCarotidArtery { get; set; }

        [RadioReportId("hea_c_0404175", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404175", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0404176", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsCirculusArteriosusWillisii { get; set; }

        #endregion

        #region NormVariant

        [RadioReportId("hea_c_040205", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightP1HypoplasiaOrFTPConfiguration { get; set; }

        [RadioReportId("hea_c_040206", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightP1Aplasia { get; set; }

        [RadioReportId("hea_c_040207", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightP1SplittingOrDuplication { get; set; }

        [RadioReportId("hea_c_040208", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightA1Hypoplasia { get; set; }

        [RadioReportId("hea_c_040209", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightA1Aplasia { get; set; }

        [RadioReportId("hea_c_040210", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightA1SplittingOrDuplication { get; set; }

        [RadioReportId("hea_c_040211", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAcomPHypoplasia { get; set; }

        [RadioReportId("hea_c_040212", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAcomPAplasia { get; set; }

        [RadioReportId("hea_c_040213", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightPICAEndingAV { get; set; }

        [RadioReportId("hea_c_040214", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAVHypoplasia { get; set; }

        [RadioReportId("hea_c_040215", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAVAplasia { get; set; }

        [RadioReportId("hea_c_040216", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightTripleACA { get; set; }

        [RadioReportId("hea_c_040388", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAcomAHypoplasia { get; set; }

        [RadioReportId("hea_c_040389", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAcomAAplasia { get; set; }

        [RadioReportId("hea_c_040390", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsRightAcomASplittingOrDuplication { get; set; }

        [RadioReportId("hea_c_0404112", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftP1HypoplasiaOrFTPConfiguration { get; set; }

        [RadioReportId("hea_c_0404113", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftP1Aplasia { get; set; }

        [RadioReportId("hea_c_0404114", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftP1SplittingOrDuplication { get; set; }

        [RadioReportId("hea_c_0404115", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftA1Hypoplasia { get; set; }

        [RadioReportId("hea_c_0404116", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftA1Aplasia { get; set; }

        [RadioReportId("hea_c_0404117", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftA1SplittingOrDuplication { get; set; }

        [RadioReportId("hea_c_0404118", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAcomPHypoplasia { get; set; }

        [RadioReportId("hea_c_0404119", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAcomPAplasia { get; set; }

        [RadioReportId("hea_c_0404120", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftPICAEndingAV { get; set; }

        [RadioReportId("hea_c_0404121", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAVHypoplasia { get; set; }

        [RadioReportId("hea_c_0404122", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAVAplasia { get; set; }

        [RadioReportId("hea_c_0404123", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftTripleACA { get; set; }

        [RadioReportId("hea_c_040502", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAcomAHypoplasia { get; set; }

        [RadioReportId("hea_c_040503", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAcomAAplasia { get; set; }

        [RadioReportId("hea_c_040504", InstanceName = nameof(VesselsFindingType.NormVariant))]
        public bool IsLeftAcomASplittingOrDuplication { get; set; }

        #endregion

        #region Ischemia

        public ArterialTerritoryType ArterialTerritoryType { get; set; }

        [RadioReportId("hea_c_040275", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public ArterialSupplyAreaPatternType ArterialSupplyAreaPatternType { get; set; }

        [RadioReportId("hea_c_040277", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public VascularTerritoryLocations VascularTerritoryLocation { get; set; }

        public VascularTerritoryType VascularTerritoryType { get; set; }

        [RadioReportId("hea_c_040282", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCorticalVeins { get; set; }

        [RadioReportId("hea_c_040283", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCorticalVeinsRight { get; set; }

        [RadioReportId("hea_c_040284", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCorticalVeinsLeft { get; set; }

        [RadioReportId("hea_c_040285", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInternalCerebralVeins { get; set; }

        [RadioReportId("hea_c_040286", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInternalCerebralVeinsRight { get; set; }

        [RadioReportId("hea_c_040287", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInternalCerebralVeinsLeft { get; set; }

        [RadioReportId("hea_c_040288", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsRightVeinOfLabbe { get; set; }

        [RadioReportId("hea_c_040289", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLeftVeinOfLabbe { get; set; }

        [RadioReportId("hea_c_040290", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsRightSphenoparietalSinus { get; set; }

        [RadioReportId("hea_c_040291", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLeftSphenoparietalSinus { get; set; }

        [RadioReportId("hea_c_040219", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public int? MaxDiameterInMm { get; set; }

        [RadioReportId("hea_c_040227", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsMultipleLesions { get; set; }

        public IschemicAreaPatternType IschemicAreaPatternType { get; set; }

        [RadioReportId("hea_c_0403155", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPerifocalGliosis { get; set; }

        [RadioReportId("hea_c_0403156", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsEtatLacunaire { get; set; }

        [RadioReportId("hea_c_0403158", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsTerritorialPatternWedgeShapedConfiguration { get; set; }

        [RadioReportId("hea_c_0403159", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsWhiteMatterAffected { get; set; }

        [RadioReportId("hea_c_0403160", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCortexAffected { get; set; }

        [RadioReportId("hea_c_0403162", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsStringOfPearlsAspect { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        public InfarctStageType InfarctStageType { get; set; }

        [RadioReportId("hea_c_040512", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInfarctionDemarked { get; set; }

        [RadioReportId("hea_c_040513", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsNoIntracerebralHemorrhage { get; set; }

        [RadioReportId("hea_c_040560", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCSFIsodense { get; set; }

        [RadioReportId("hea_c_040229", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLimitedDelineationOfTheBasalGanglia { get; set; }

        [RadioReportId("hea_c_040230", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLimitedDelineationOfTheThalamus { get; set; }

        [RadioReportId("hea_c_040231", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsHyperdenseMediaSign { get; set; }

        [RadioReportId("hea_c_040232", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsHyperdenseVesselSign { get; set; }

        [RadioReportId("hea_c_040233", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLimitedMedullaCorticalDifferentiation { get; set; }

        [RadioReportId("hea_c_040234", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsSwellingOfTheGyri { get; set; }

        [RadioReportId("hea_c_040235", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsNarrowedSulci { get; set; }

        [RadioReportId("hea_c_040236", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPseudolaminarNecrosis { get; set; }

        [RadioReportId("hea_c_040237", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsHemorrhagicTransformation { get; set; }

        [RadioReportId("hea_c_040238", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPetechial { get; set; }

        [RadioReportId("hea_c_040239", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsParenchymatous { get; set; }

        [RadioReportId("hea_c_0403164", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsVentricularHerniation { get; set; }

        [RadioReportId("hea_c_0403165", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsAssociatedFindingsWedgeShapedConfiguration { get; set; }

        public CerebralEdemaType CerebralEdemaType { get; set; }

        #endregion

        #region Perfusion

        [RadioReportId("hea_c_040515", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsNoEvidenceOfAPerfusionDisturbance { get; set; }

        [RadioReportId("hea_c_040516", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsHypoperfusion { get; set; }

        [RadioReportId("hea_c_040516-l", InstanceName = nameof(HypoPerfusionType), IsExportable = false)]
        public PerfusionType HypoPerfusionType { get; set; }

        [RadioReportId("hea_c_040519", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsHyperperfusion { get; set; }

        [RadioReportId("hea_c_040519-l", InstanceName = nameof(HyperPerfusionType), IsExportable = false)]
        public PerfusionType HyperPerfusionType { get; set; }

        [RadioReportId("hea_c_040563", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsLimitedEvaluability { get; set; }

        [RadioReportId("hea_c_040564", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsArtifactRelated { get; set; }

        [RadioReportId("hea_c_0402130", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public float? GradingVolumeInMm3 { get; set; }

        [RadioReportId("hea_c_0402133", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public int? MTTInSec { get; set; }

        [RadioReportId("hea_c_0402133-l", InstanceName = nameof(MTTGradingType), IsExportable = false)]
        public GradingType MTTGradingType { get; set; }

        [RadioReportId("hea_c_0402139", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public int? TTPInSec { get; set; }

        [RadioReportId("hea_c_0402139-l", InstanceName = nameof(TTPGradingType), IsExportable = false)]
        public GradingType TTPGradingType { get; set; }

        [RadioReportId("hea_c_0403185", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public int? CBFInMl100gMin { get; set; }

        [RadioReportId("hea_c_0403185-l", InstanceName = nameof(CBFGradingType), IsExportable = false)]
        public GradingType CBFGradingType { get; set; }

        [RadioReportId("hea_c_0403191", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public int? CBVInMl100g { get; set; }

        [RadioReportId("hea_c_0403191-l", InstanceName = nameof(CBVGradingType), IsExportable = false)]
        public GradingType CBVGradingType { get; set; }

        public MismatchType MismatchType { get; set; }

        [RadioReportId("hea_c_040525", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public float? MismatchVolumeInMm3 { get; set; }

        [RadioReportId("hea_c_040527", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsRelevantPenumbra { get; set; }

        [RadioReportId("hea_c_040565", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsNoRelevantPenumbra { get; set; }

        [RadioReportId("hea_c_040528", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public float? MismatchRatio { get; set; }

        [RadioReportId("hea_c_0402145", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsIschemicGenesis { get; set; }

        [RadioReportId("hea_c_0402146", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsTumorDisease { get; set; }

        [RadioReportId("hea_c_0402147", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsPostictalChanges { get; set; }

        [RadioReportId("hea_c_0402148", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsPRESS { get; set; }

        [RadioReportId("hea_c_0402149", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public bool IsReperfusionSyndrome { get; set; }

        [RadioReportId("hea_c_0403197", InstanceName = nameof(VesselsFindingType.Perfusion))]
        public int? ASPECTScore { get; set; }

        #endregion

        #region CircleOfWillisAndCerebralArteries

        [RadioReportId("hea_c_040242", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public AffectedSegmentsOrVesselsLocations AffectedSegmentsOrVesselsLocation { get; set; }

        [RadioReportId("hea_c_0404141", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public int? LongitudinalExpansionThrombusInMm { get; set; }

        public CollateralizationSeverityType CollateralizationSeverityType { get; set; }

        [RadioReportId("hea_c_040531", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsAntCommunicatingArtery  { get; set; }

        [RadioReportId("hea_c_040532", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsPostCommunicatingArtery { get; set; }

        [RadioReportId("hea_c_040534", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsCollateralizationOfTheICAViaECABranches { get; set; }

        [RadioReportId("hea_c_040535", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsRetrogradePerfusionOfTheOphthalmicArtery { get; set; }

        [RadioReportId("hea_c_040536", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsPerfusionOfTheICAParsCervicalis { get; set; }

        [RadioReportId("hea_c_040537", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsThroughContralateralExternalCarotidArtery { get; set; }

        [RadioReportId("hea_c_040538", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsThroughIpsilateralVertebralArtery { get; set; }

        [RadioReportId("hea_c_040539", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsLeptomeningealCollaterals { get; set; }

        [RadioReportId("hea_c_0403106", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsCervicalVesselElongation { get; set; }

        [RadioReportId("hea_c_0403107", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsUpstreamCervicalArteryWithHighGradeStenosis { get; set; }

        [RadioReportId("hea_c_0403108", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsUpstreamCervicalArteryWithOcclusion { get; set; }

        [RadioReportId("hea_c_0403109", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsThrombusInUpstreamCervicalArtery { get; set; }

        [RadioReportId("hea_c_0403110", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsDissectionOfUpstreamCervicalArtery { get; set; }

        [RadioReportId("hea_c_0403111", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        public bool IsOstialStenosisAffectedVessel { get; set; }

        #endregion

        #region InternalCarotidArtery

        [RadioReportId("hea_c_040299", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        public InternalCarotidArterySegmentsLocations InternalCarotidArterySegmentsLocations { get; set; }

        #endregion

        #region ExternalCarotidArtery

        [RadioReportId("hea_c_0402104", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        public ArteriesWithOutletType ArteriesWithOutletType { get; set; }

        #endregion

        #region VertebralArtery

        [RadioReportId("hea_c_0402113", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsV1 { get; set; }

        [RadioReportId("hea_c_0402114", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsV2 { get; set; }

        [RadioReportId("hea_c_0402115", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsV3 { get; set; }

        [RadioReportId("hea_c_0402116", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsV4 { get; set; }

        [RadioReportId("hea_c_0404177", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        public bool IsContralateralVertebralArtery { get; set; }

        #endregion

        #region CerebralVeinsSinusDuraeMatris

        [RadioReportId("hea_c_040293", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public CerebralVenousThrombosisLocations CerebralVenousThrombosisLocation { get; set; }

        [RadioReportId("hea_c_0403148", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public bool IsCongestiveHemorrhage { get; set; }

        [RadioReportId("hea_c_0403149", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public bool IsPetechialHemorrhages { get; set; }

        [RadioReportId("hea_c_0403150", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public bool IsEctasiaOfTheUpstreamVeins { get; set; }

        [RadioReportId("hea_c_0403151", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public bool IsSAH { get; set; }

        [RadioReportId("hea_c_0403152", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        public bool IsCerebralEdema { get; set; }

        #endregion

        #region VascularMalformation

        [RadioReportId("hea_c_040260", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        public bool IsSuspicionOf { get; set; }

        public WithoutAVShuntType WithoutAVShuntType { get; set; }

        public WithAVShuntType WithAVShuntType { get; set; }

        [RadioReportId("hea_c_040476", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        public bool IsReverseFlowSuspected { get; set; }

        #endregion

        #region DuralAVFistula

        [RadioReportId("hea_c_040266", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_c_040267", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_c_040268", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_c_040269", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_c_040270", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsInfratentorial { get; set; }

        [RadioReportId("hea_c_040379", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsTransverseSinus { get; set; }
        
        [RadioReportId("hea_c_040380", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSigmoidSinus { get; set; }

        [RadioReportId("hea_c_040381", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSinusCavernosus { get; set; }

        [RadioReportId("hea_c_040382", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSuperiorSagittalSinus { get; set; }

        [RadioReportId("hea_c_040383", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSuperiorPetrosalSinus { get; set; }

        [RadioReportId("hea_c_040384", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsInferiorPetrosalSinus { get; set; }

        [RadioReportId("hea_c_040479", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsReverseFlow { get; set; }

        [RadioReportId("hea_c_040480", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsReverseFlowSuspicionOf { get; set; }

        [RadioReportId("hea_c_0404107", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsThrombosis { get; set; }

        [RadioReportId("hea_c_0404108", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_0404109", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsEdema { get; set; }

        [RadioReportId("hea_c_0404110", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsIschemia { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(PathologyType.StenosisOcclusion) => PathologyType.ToString() == customConditionId,
            nameof(PathologyType.Dissection) => PathologyType.ToString() == customConditionId,
            _ => false
        };
    }
}