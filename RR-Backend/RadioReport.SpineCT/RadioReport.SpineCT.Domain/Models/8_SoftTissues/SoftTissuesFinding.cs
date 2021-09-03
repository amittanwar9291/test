using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Enums;
using RadioReport.SpineCT.Domain.Enums.SoftTissues;
using System;

namespace RadioReport.SpineCT.Domain.Models
{
    public class SoftTissuesFinding : SoftTissuesFindingBase, IImageFileContainer, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("spi_c_0803303", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_c_080334", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        public int? MaxDiameterInMm { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        #region ImageFile

        [RadioReportId("uni_08_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_08_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_08_007-l", InstanceName = "SpineCT.SoftTissues.SoftTissuesFinding", IsExportable = false)]
        public ImageFile ImageFile { get; set; }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            ImageFile = imageFile;
        }

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            ImageFile = null;
        }

        #endregion

        #endregion

        #region ParaspinalMass

        [RadioReportId("spi_c_080107-l", InstanceName = InstanceNames.SoftTissues, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("spi_c_0802303", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsHistologicallyProven { get; set; }

        public HistologicallyProvenType HistologicallyProvenType { get; set; }

        [RadioReportId("spi_c_080204", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_c_080303", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass), AlternativeTranslationSuffix = "CT_Page8")]
        public SpineAxialLocations SpineAxialLocation { get; set; }

        [RadioReportId("spi_c_0803306", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("spi_c_0803309", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("spi_c_0804306-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public ShapeType ShapeType { get; set; }

        public DensityType DensityType { get; set; }

        [RadioReportId("spi_c_0805305", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsGasInclusion { get; set; }

        [RadioReportId("spi_c_0805307", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public int? MeasurementInHU { get; set; }

        public CalcificationType CalcificationType { get; set; }

        [RadioReportId("spi_c_0802311", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsSclerosis { get; set; }

        [RadioReportId("spi_c_0802312", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsSepta { get; set; }

        [RadioReportId("spi_c_0802313", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsIntralesionalFat { get; set; }

        [RadioReportId("spi_c_0802314", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsCystic { get; set; }

        [RadioReportId("spi_c_0803312", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsMassEffect { get; set; }

        [RadioReportId("spi_c_0803313", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("spi_c_0803314", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsBones { get; set; }

        [RadioReportId("spi_c_0803315", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsMuscle { get; set; }

        [RadioReportId("spi_c_0803316", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsNerveRoot { get; set; }

        [RadioReportId("spi_c_0803318", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineLocationBones SpineLocationBones { get; set; }

        [RadioReportId("spi_c_0803319", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsUrether { get; set; }

        [RadioReportId("spi_c_0803320", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsUretherRight { get; set; }

        [RadioReportId("spi_c_0803321", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsUretherLeft { get; set; }

        [RadioReportId("spi_c_0803322", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsVessels { get; set; }

        [RadioReportId("spi_c_0805312-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("spi_c_0802319", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass), AlternativeTranslationSuffix = "CT")]
        public SoftTissuesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("spi_c_0802320", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("spi_c_0802322", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass), AlternativeTranslationSuffix = "CT")]
        public SoftTissuesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("spi_c_0802323", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("spi_c_0803323", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("spi_c_0803325", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineLocations MoreThanOneLesionSpineLocation { get; set; }

        #endregion

        #region LymphNodes

        [RadioReportId("spi_c_080227", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsCervical { get; set; }

        [RadioReportId("spi_c_080229", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsCervicalRight { get; set; }

        [RadioReportId("spi_c_080230", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsCervicalLeft { get; set; }

        [RadioReportId("spi_c_080231", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParaaortal { get; set; }

        [RadioReportId("spi_c_080232", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsAortocaval { get; set; }

        [RadioReportId("spi_c_080233", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParailiacal { get; set; }

        [RadioReportId("spi_c_080235", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParailiacalRight { get; set; }

        [RadioReportId("spi_c_080236", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParailiacalLeft { get; set; }

        [RadioReportId("spi_c_080237", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsPresacral { get; set; }

        [RadioReportId("spi_c_080239", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsPresacralRight { get; set; }

        [RadioReportId("spi_c_080240", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsPresacralLeft { get; set; }

        [RadioReportId("spi_c_0803326", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsInguinal { get; set; }

        [RadioReportId("spi_c_0803328", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsInguinalRight { get; set; }

        [RadioReportId("spi_c_0803329", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsInguinalLeft { get; set; }

        [RadioReportId("spi_c_0803330", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsFemoral { get; set; }

        [RadioReportId("spi_c_0803332", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsFemoralRight { get; set; }

        [RadioReportId("spi_c_0803333", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsFemoralLeft { get; set; }

        [RadioReportId("spi_c_0804321", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public int? LargestLymphNodeSADInMm { get; set; }

        #endregion

        #region VesselsUreter

        public AffectedVesselOrUreterType AffectedVesselOrUreterType { get; set; }

        [RadioReportId("spi_c_0803335", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.VertebralArtery))]
        [RadioReportId("spi_c_080338", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803353", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        [RadioReportId("spi_c_0803368", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.Ureter))]
        public bool IsAffectedVesselOrUreterRight { get; set; }

        [RadioReportId("spi_c_080xxx-l", InstanceName = nameof(RightPathologyType), IsExportable = false)]
        public PathologyType RightPathologyType { get; set; }

        [RadioReportId("spi_c_0803339", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.VertebralArtery))]
        [RadioReportId("spi_c_080339", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803360", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        [RadioReportId("spi_c_0803372", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.Ureter))]
        public bool IsAffectedVesselOrUreterLeft { get; set; }

        [RadioReportId("spi_c_080xxx-l", InstanceName = nameof(LeftPathologyType), IsExportable = false)]
        public PathologyType LeftPathologyType { get; set; }

        [RadioReportId("spi_c_080332-l", InstanceName = nameof(PathologyType), IsExportable = false)]
        public PathologyType PathologyType { get; set; }

        [RadioReportId("spi_c_0803344", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803358", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        public int? RightMaxDiameterInMm { get; set; }

        [RadioReportId("spi_c_0803350", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.CommonIliacArtery))]
        [RadioReportId("spi_c_0803365", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselOrUreterType.ExternalIliacArtery))]
        public int? LeftMaxDiameterInMm { get; set; }

        #endregion

        #region ParavertebralMuscles

        [RadioReportId("spi_c_080250", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsLongissimusCapitisMuscle { get; set; }

        [RadioReportId("spi_c_080251-l", InstanceName = nameof(LongissimusCapitisMuscleSideType), IsExportable = false)]
        public SideType LongissimusCapitisMuscleSideType { get; set; }

        [RadioReportId("spi_c_080254", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsLevatorScapulaeMuscle { get; set; }

        [RadioReportId("spi_c_080251-l", InstanceName = nameof(LevatorScapulaeMuscleSideType), IsExportable = false)]
        public SideType LevatorScapulaeMuscleSideType { get; set; }

        [RadioReportId("spi_c_080258", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSemispinalisColliMuscle { get; set; }

        [RadioReportId("spi_c_080259-l", InstanceName = nameof(SemispinalisColliMuscleSideType), IsExportable = false)]
        public SideType SemispinalisColliMuscleSideType { get; set; }

        [RadioReportId("spi_c_0803376", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSemispinalisCapitisMuscle { get; set; }

        [RadioReportId("spi_c_0803377-l", InstanceName = nameof(SemispinalisCapitisMuscleSideType), IsExportable = false)]
        public SideType SemispinalisCapitisMuscleSideType { get; set; }

        [RadioReportId("spi_c_0803380", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSpleniusCapitisMuscle { get; set; }

        [RadioReportId("spi_c_0803381-l", InstanceName = nameof(SpleniusCapitisMuscleSideType), IsExportable = false)]
        public SideType SpleniusCapitisMuscleSideType { get; set; }

        [RadioReportId("spi_c_0803397", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsTrapeziusMuscle { get; set; }

        [RadioReportId("spi_c_0803384", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsCervicalSpineAutochthonous { get; set; }

        [RadioReportId("spi_c_0803385-l", InstanceName = nameof(CervicalSpineAutochthonousSideType), IsExportable = false)]
        public SideType CervicalSpineAutochthonousSideType { get; set; }

        [RadioReportId("spi_c_0804324", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsThoracicOrLumbarSpineAutochthonous { get; set; }

        [RadioReportId("spi_c_0804325-l", InstanceName = nameof(ThoracicOrLumbarSpineAutochthonousSideType), IsExportable = false)]
        public SideType ThoracicOrLumbarSpineAutochthonousSideType { get; set; }

        [RadioReportId("spi_c_0804328", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsIliocostalisMuscle { get; set; }

        [RadioReportId("spi_c_0804329-l", InstanceName = nameof(IliocostalisMuscleSideType), IsExportable = false)]
        public SideType IliocostalisMuscleSideType { get; set; }

        [RadioReportId("spi_c_0804332", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsLongissimusMuscle { get; set; }

        [RadioReportId("spi_c_0804333-l", InstanceName = nameof(LongissimusMuscleSideType), IsExportable = false)]
        public SideType LongissimusMuscleSideType { get; set; }

        [RadioReportId("spi_c_0805321", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsQuadratusLumborumMuscle { get; set; }

        [RadioReportId("spi_c_0805322-l", InstanceName = nameof(QuadratusLumborumMuscleSideType), IsExportable = false)]
        public SideType QuadratusLumborumMuscleSideType { get; set; }

        [RadioReportId("spi_c_0805325", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsPsoasMajorMuscle { get; set; }

        [RadioReportId("spi_c_0805326-l", InstanceName = nameof(PsoasMajorMuscleSideType), IsExportable = false)]
        public SideType PsoasMajorMuscleSideType { get; set; }

        [RadioReportId("spi_c_0805332", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMultifidusMuscle { get; set; }

        [RadioReportId("spi_c_0805326-l", InstanceName = nameof(MultifidusMuscleSideType), IsExportable = false)]
        public SideType MultifidusMuscleSideType { get; set; }

        [RadioReportId("spi_c_080263", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsHematoma { get; set; }

        [RadioReportId("spi_c_080265", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsIntramuscular { get; set; }

        [RadioReportId("spi_c_080266", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsInterfascial { get; set; }

        [RadioReportId("spi_c_080267", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsIntermuscular { get; set; }

        [RadioReportId("spi_c_0803390", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsFattyDegeneration { get; set; }

        [RadioReportId("spi_c_0803391", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMuscularHypotrophy { get; set; }

        [RadioReportId("spi_c_0803392", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMuscularAtrophy { get; set; }

        public MuscularAtrophyType MuscularAtrophyType { get; set; }

        [RadioReportId("spi_c_0803396", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSuperinfection { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => 
            customConditionId switch
            {
                nameof(AffectedVesselOrUreterType.VertebralArtery) => AffectedVesselOrUreterType.ToString() == customConditionId,
                nameof(AffectedVesselOrUreterType.ThoracicAorta) => AffectedVesselOrUreterType.ToString() == customConditionId,
                nameof(AffectedVesselOrUreterType.AbdominalAorta) => AffectedVesselOrUreterType.ToString() == customConditionId,
                nameof(AffectedVesselOrUreterType.CommonIliacArtery) => AffectedVesselOrUreterType.ToString() == customConditionId,
                nameof(AffectedVesselOrUreterType.ExternalIliacArtery) => AffectedVesselOrUreterType.ToString() == customConditionId,
                nameof(AffectedVesselOrUreterType.Ureter) => AffectedVesselOrUreterType.ToString() == customConditionId,
                _ => false
            };
    }
}
