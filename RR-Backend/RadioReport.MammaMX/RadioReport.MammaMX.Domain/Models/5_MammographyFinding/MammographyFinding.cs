using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;

namespace RadioReport.MammaMX.Domain.Models
{
    public class MammographyFinding : MammographyFindingBase
    {
        #region Common

        [RadioReportId("mam_mx_050208", AlternativeTranslationSuffix = "v2")]
        public BreastLocations BreastLocation { get; set; }

        [RadioReportId("mam_mx_050301", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050213", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050213", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050213", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050213", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public byte? DistanceToNippleInMm { get; set; }

        [RadioReportId("mam_mx_050407", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050416", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050332", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050430", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050442", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050362", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsSkinRetraction { get; set; }

        [RadioReportId("mam_mx_050408", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050417", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050333", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050431", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050444", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050363", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsNippleRetraction { get; set; }

        [RadioReportId("mam_mx_050409", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050418", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050334", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050432", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050443", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050364", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsSkinThickening { get; set; }

        [RadioReportId("mam_mx_050410", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050419", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050335", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050433", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050438", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050365", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsTrabecularThickening { get; set; }

        [RadioReportId("mam_mx_050411", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050420", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050337", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050434", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050366", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsAxillaryLymphadenopathy { get; set; }

        [RadioReportId("mam_mx_050412", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050421", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050435", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050367", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsArchitecturalDistorsion { get; set; }

        [RadioReportId("mam_mx_050504", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050512", InstanceName = nameof(MammographyFindingType.Calcification))]
        [RadioReportId("mam_mx_050425", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050515", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050519", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050448", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("mam_mx_050507", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050428", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050522", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050451", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("mam_mx_050338", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        [RadioReportId("mam_mx_050436", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        [RadioReportId("mam_mx_050439", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        [RadioReportId("mam_mx_050368", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public bool IsCalcification { get; set; }

        [RadioReportId("mam_mx_050304", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050216", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        public byte? LargestDiameterInMm { get; set; }

        [RadioReportId("mam_mx_050306", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050218", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        public byte? LayerRectangularInMm { get; set; }

        public DepthType DepthType { get; set; }

        #endregion

        #region Mass

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("mam_mx_050204", InstanceName = nameof(MammographyFindingType.Mass))]
        public bool IsHistologicallyConfirmed { get; set; }
        
        public HistologicallySecuredType HistologicallySecuredType { get; set; }

        [RadioReportId("mam_mx_050413", InstanceName = nameof(MammographyFindingType.Mass))]
        public bool IsCalcificationInTheLesion { get; set; }

        [RadioReportId("mam_mx_050414", InstanceName = nameof(MammographyFindingType.Mass))]
        public CalcificationInTheLesionType CalcificationInTheLesionType { get; set; }

        [RadioReportId("mam_mx_050503", InstanceName = nameof(MammographyFindingType.Mass))]
        public DiagnosisType MassDifferentialDiagnosis1Type { get; set; }

        [RadioReportId("mam_mx_050506", InstanceName = nameof(MammographyFindingType.Mass))]
        public DiagnosisType MassDifferentialDiagnosis2Type { get; set; }

        [RadioReportId("mam_mx_050509", InstanceName = nameof(MammographyFindingType.Mass))]
        public DiagnosisType MassDifferentialDiagnosis3Type { get; set; }

        #endregion

        #region Calcification

        [RadioReportId("mam_mx_050319", InstanceName = nameof(MammographyFindingType.Calcification))]
        public byte? MaxExpansionInMm { get; set; }

        public DistributionType DistributionType { get; set; }

        [RadioReportId("mam_mx_050328", InstanceName = nameof(MammographyFindingType.Calcification))]
        public CalcificationFormType CalcificationFormType { get; set; }

        [RadioReportId("mam_mx_050511", InstanceName = nameof(MammographyFindingType.Calcification))]
        public DiagnosisType CalcificationDiagnosisType { get; set; }

        #endregion

        #region ArchitectureDistorsion

        [RadioReportId("mam_mx_050330", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        public bool IsAsymmetryWithoutEvidenceOfSuspiciousMasses { get; set; }

        [RadioReportId("mam_mx_050336", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        public bool IsAsymmetry { get; set; }

        [RadioReportId("mam_mx_050424", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        public ArchitectureDistorsionDiagnosisType ArchitectureDistorsionDiagnosis1Type { get; set; }

        [RadioReportId("mam_mx_050427", InstanceName = nameof(MammographyFindingType.ArchitecturalDistorsion))]
        public ArchitectureDistorsionDiagnosisType ArchitectureDistorsionDiagnosis2Type { get; set; }

        #endregion

        #region Asymmetry
        public AsymmetryType AsymmetryType { get; set; }

        [RadioReportId("mam_mx_050345", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        public bool IsOnlyVisibleInOne { get; set; }

        [RadioReportId("mam_mx_050347", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        public bool IsConcaveEdges { get; set; }

        [RadioReportId("mam_mx_050348", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        public bool IsMixedWithFat { get; set; }

        [RadioReportId("mam_mx_050349", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        public bool IsNoCentralHyperdensity { get; set; }

        [RadioReportId("mam_mx_050514", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        public AsymmetricDiagnosisType AsymmetricDiagnosisType { get; set; }

        #endregion

        #region SkinLesion

        [RadioReportId("mam_mx_050440", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        public bool IsSurroundingBrighteningHemair { get; set; }

        [RadioReportId("mam_mx_050518", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        public SkinLesionDiagnosisType SkinLesionDiagnosis1Type { get; set; }

        [RadioReportId("mam_mx_050521", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        public SkinLesionDiagnosisType SkinLesionDiagnosis2Type { get; set; }

        [RadioReportId("mam_mx_050523", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        public bool IsOverOneLesionOfTheSameEntity { get; set; }

        #endregion

        #region SolitaryMammaryDuctDilatationDiagnosisType

        [RadioReportId("mam_mx_050447", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public SolitaryMammaryDiagnosisType  SolitaryMammaryDiagnosis1Type  { get; set; }

        [RadioReportId("mam_mx_050450", InstanceName = nameof(MammographyFindingType.SolitaryMammaryDuctDilatation))]
        public SolitaryMammaryDiagnosisType  SolitaryMammaryDiagnosis2Type  { get; set; }

        #endregion
    }
}
