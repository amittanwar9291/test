using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class FemaleGenderFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_060106")]
        public FemaleGenderFindingType FindingType { get; set; }

        #region Common

        #region DifferentialDiagnosis

        [RadioReportId("pel_m_060303", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060521", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0603424", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604430", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605248", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0602143", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0605255", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603219", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_060364", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public FemaleGenderDiagnosisType DifferentialDiagnosis { get; set; }

        #endregion

        #region Signal

        [RadioReportId("pel_m_060403", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605202", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603439", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604432", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603439", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604432", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0603439", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0605202", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0605202", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0604432", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0602445", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public SignalType T1wSignal { get; set; }

        [RadioReportId("pel_m_0604402", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605204", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603441", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604434", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603441", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604434", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0603441", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0605204", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0605204", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0604434", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0602467", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public SignalType T2wSignal { get; set; }

        [RadioReportId("pel_m_0604404", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602445", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0602445", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public SignalType AdditionalT1wSignal { get; set; }

        #endregion

        #region ContrastEnhancement & Homogenity

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(HomogenityType), IsExportable = false)]
        public HomogenityType HomogenityType { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(ContrastEnhancementType1), IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementType1 { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(ContrastEnhancementHomogenityType1), IsExportable = false)]
        public HomogenityType ContrastEnhancementHomogenityType1 { get; set; }

        public HeterogeneousType HeterogeneousType { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(DetailsT2wSignalHomogenityType), IsExportable = false)]
        public HomogenityType DetailsT2wSignalHomogenityType { get; set; }

        #endregion

        public MarginType MarginType { get; set; }

        [RadioReportId("pel_m_060505", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602419", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0605253", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602459", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602459", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602459", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0605275", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsFocalSignalVoids { get; set; }

        [RadioReportId("pel_m_060506", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605232", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605232", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602455", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602455", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602455", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0604490", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("pel_m_060507", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602413", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsComplexCystic { get; set; }

        [RadioReportId("pel_m_060509", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605231", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605231", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602454", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602454", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602454", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0604489", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsSepta { get; set; }

        [RadioReportId("pel_m_060510", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602416", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsSeptaNodularParts { get; set; }

        [RadioReportId("pel_m_060511", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602417", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsFocalThickening { get; set; }

        [RadioReportId("pel_m_0603403", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060346", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0603433", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604423", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0603433", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0602448", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0603433", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603433", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0603260", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("pel_m_0604407", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604411", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsHydrosalpinx { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("pel_m_0605287", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605249", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602452", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602452", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602452", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0604487", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsCalcification { get; set; }

        [RadioReportId("pel_m_0605251", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602457", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602457", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602457", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsHemorrhage { get; set; }

        #endregion

        #region CorpusUteriMass

        [RadioReportId("pel_m_0605229", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsCapsuleOrPseudoCapsule { get; set; }

        [RadioReportId("pel_m_0605230", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsT2wIncrease { get; set; }

        public TransitionZoneType TransitionZoneType { get; set; }

        [RadioReportId("pel_m_0604442", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsClawSign { get; set; }

        [RadioReportId("pel_m_0604443", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsBridgingVesselSign { get; set; }

        [RadioReportId("pel_m_0603116", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public DegenerationType DegenerationType1 { get; set; }

        #endregion
    }
}