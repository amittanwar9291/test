using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Bones;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase
    {
        #region common
		[RadioReportId("nec_m_100306", InstanceName = nameof(BonesFindingType.AxisDeviation))]
        [RadioReportId("nec_m_100308", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        [RadioReportId("nec_m_100223", InstanceName = nameof(BonesFindingType.ErosiveOsteochondrosis))]
        [RadioReportId("nec_m_100223", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        [RadioReportId("nec_m_100303", InstanceName = nameof(BonesFindingType.Myelon))]
        [RadioReportId("nec_m_100336", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("nec_m_100352", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        [RadioReportId("nec_m_100336", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public SpineLocations SpineLocations { get; set; }

        [RadioReportId("nec_m_100232", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("nec_m_100247", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100446", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsMaxilla { get; set; }

        [RadioReportId("nec_m_100235", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("nec_m_100251", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100455", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsMandible { get; set; }

        [RadioReportId("nec_m_100238", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("nec_m_100253", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100517", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsCondylarProcess { get; set; }

        [RadioReportId("nec_m_100411", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        [RadioReportId("nec_m_100343", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsRight { get; set; }

        [RadioReportId("nec_m_100412", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        [RadioReportId("nec_m_100344", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsLeft { get; set; }

        [RadioReportId("nec_m_100418", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        [RadioReportId("nec_m_100426", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsAbscess { get; set; }

        [RadioReportId("nec_m_100244", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100443", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsTemporale { get; set; }

        [RadioReportId("nec_m_100245", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100444", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsSphenoidale { get; set; }

        [RadioReportId("nec_m_100246", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100445", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsEthmoidale { get; set; }

        [RadioReportId("nec_m_100248", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100447", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsMaxillaPalatineProcess { get; set; }

        [RadioReportId("nec_m_100249", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100448", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsMaxillaAlveolarProcess { get; set; }

        [RadioReportId("nec_m_100252", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100516", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsRamusMandibulae { get; set; }

        [RadioReportId("nec_m_100254", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100518", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsCoronoideusProcess { get; set; }

        [RadioReportId("nec_m_100255", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100519", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsMandibleAlveolarProcess { get; set; }

        [RadioReportId("nec_m_100428", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100264", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public byte? SizeInMm { get; set; }

        [RadioReportId("nec_m_100515", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100471", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSubordinate { get; set; }
        #endregion common

        #region ExternalMaterial
        [RadioReportId("nec_m_100203", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public bool IsSpondylodesis { get; set; }

        [RadioReportId("nec_m_100205", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public SpineLocations SpondylodesisSpineLocations { get; set; }

        [RadioReportId("nec_m_100207", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public TraumaLocations SpondylodesisTraumaLocations { get; set; }

        [RadioReportId("nec_m_100301", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public bool IsOsteosynthesis { get; set; }

        [RadioReportId("nec_m_100303", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public SpineLocations OsteosynthesisSpineLocations { get; set; }

        [RadioReportId("nec_m_100401", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public bool IsIntervertebralDiscProthesis { get; set; }

        [RadioReportId("nec_m_100403", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public SpineLocations ProthesisSpineLocations { get; set; }

        [RadioReportId("nec_m_100501", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        public bool IsVertebroplasty { get; set; }

        [RadioReportId("nec_m_100503", InstanceName = nameof(BonesFindingType.ExternalMaterial))]
        [RadioReportId("nec_m_100503", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SpineLocations VertebroplastySpineLocations { get; set; }
        #endregion

        #region AxisDeviation
        public AxialDeviationType AxialDeviationType { get; set; }
        #endregion

        #region IntervertebralDisc
        public PathologyType PathologyType { get; set; }

        [RadioReportId("nec_m_100220", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public byte? MaxDiameterInMm { get; set; }

        public ExtensionReferenceSpinalCanalType ExtensionReferenceSpinalCanalType { get; set; }

        [RadioReportId("nec_m_100406", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public byte? SagittalWidthOfCanalInMm { get; set; }

        [RadioReportId("nec_m_100408", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsHighGradeCSF { get; set; }

        [RadioReportId("nec_m_100409", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsMyelonCompression { get; set; }

        [RadioReportId("nec_m_100506", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsNarrowingOfTheIntervertebral { get; set; }

        [RadioReportId("nec_m_100507", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsBroadbased { get; set; }

        [RadioReportId("nec_m_100508", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsOsteophyteFormation { get; set; }

        [RadioReportId("nec_m_100509", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsMigrationCranial { get; set; }

        [RadioReportId("nec_m_100510", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
        public bool IsMigrationCaudal { get; set; }
        #endregion

        #region ErosiveOsteochondrosis
        public ModicClassificationType ModicClassificationType { get; set; }
        #endregion

        #region Spondylodiscitis
        [RadioReportId("nec_m_100225", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsIncreasedSizeOfDisc { get; set; }

        [RadioReportId("nec_m_100226", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsT2wHyperintensityOfDisc { get; set; }

        [RadioReportId("nec_m_100227", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("nec_m_100318", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsEndplateEdema { get; set; }

        [RadioReportId("nec_m_100319", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsErosionsOfTheEndplates { get; set; }

        [RadioReportId("nec_m_100320", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsVertebraEdema { get; set; }

        [RadioReportId("nec_m_100321", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsOsteomyelitis { get; set; }

        [RadioReportId("nec_m_100415", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public SpineAxialLocations SpineAxialLocations { get; set; }

        [RadioReportId("nec_m_100416", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        public bool IsParavertebralinflammatoryReaction { get; set; }
        #endregion

        #region Myelon
        [RadioReportId("nec_m_100324", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.Myelopathy))]
        public bool IsIncreasedT2Signal { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("nec_m_100330", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.Syringohydromyelia))]
        public int? ExtensionCraniocaudalInMm { get; set; }

        [RadioReportId("nec_m_100333", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.Syringohydromyelia))]
        public byte? ExtensionSagittalInMm { get; set; }

        [RadioReportId("nec_m_100380", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.SpinalCanalMass))]
        public SpinalCanalLocations SpinalCanalLocations { get; set; }

        [RadioReportId("nec_m_100421", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.SpinalCanalMass))]
        public MyelonDifferentialDiagnosisType MyelonDifferentialDiagnosis1 { get; set; }

        [RadioReportId("nec_m_100423", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.SpinalCanalMass))]
        public MyelonDifferentialDiagnosisType MyelonDifferentialDiagnosis2 { get; set; }
        #endregion

        #region BoneMarrowEdema
        [RadioReportId("nec_m_100233", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsMaxillaRight { get; set; }

        [RadioReportId("nec_m_100234", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsMaxillaLeft { get; set; }

        [RadioReportId("nec_m_100236", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsMandibleRight { get; set; }

        [RadioReportId("nec_m_100237", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsMandibleLeft { get; set; }

        [RadioReportId("nec_m_100239", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsCondylarProcessRight { get; set; }

        [RadioReportId("nec_m_100240", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsCondylarProcessLeft { get; set; }

        [RadioReportId("nec_m_100241", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsManubriumSterni { get; set; }

        [RadioReportId("nec_m_100242", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSkullBase { get; set; }

        [RadioReportId("nec_m_100243", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsVertebra { get; set; }

        [RadioReportId("nec_m_100338", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsTendinitisCalcareaLongus { get; set; }

        [RadioReportId("nec_m_100340", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsTendinitisRight { get; set; }

        [RadioReportId("nec_m_100341", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsTendinitisLeft { get; set; }
        #endregion

        #region Osteomyelitis
        [RadioReportId("nec_m_100250", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsNasalSeptum { get; set; }

        [RadioReportId("nec_m_100431", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100267", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public byte? SecondPlaneInMm { get; set; }

        [RadioReportId("nec_m_100270", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        [RadioReportId("nec_m_100434", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public byte? ThirdPlaneInMm { get; set; }

        [RadioReportId("nec_m_100437", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeripheralContrastEnhancement { get; set; }

        [RadioReportId("nec_m_100438", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOverOneLesionOfSameEntity { get; set; }

        [RadioReportId("nec_m_100439", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("nec_m_100440", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsMultiple { get; set; }

        [RadioReportId("nec_m_100514", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public OsteomyelitisDifferentialDiagnosisType OsteomyelitisDifferentialDiagnosis { get; set; }
        #endregion

        #region SpatialNeoplasm
        [RadioReportId("nec_m_100259", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("nec_m_100347", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSpine { get; set; }

        [RadioReportId("nec_m_100348", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsFacialSkeleton { get; set; }

        [RadioReportId("nec_m_100349", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsCartilage { get; set; }

        [RadioReportId("nec_m_100350", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsPosteriorCranialFossa { get; set; }

        [RadioReportId("nec_m_100449", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsIncisivum { get; set; }

        [RadioReportId("nec_m_100450", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsPalatinum { get; set; }

        [RadioReportId("nec_m_100451", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsVomer { get; set; }

        [RadioReportId("nec_m_100452", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSuperiorNasalConcha { get; set; }

        [RadioReportId("nec_m_100453", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsMiddleNasalConcha { get; set; }

        [RadioReportId("nec_m_100454", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsInferiorNasalConcha { get; set; }

        [RadioReportId("nec_m_100520", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsHyoideum { get; set; }

        [RadioReportId("nec_m_100522", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsThyroidCartilage { get; set; }

        [RadioReportId("nec_m_100523", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsCricoidCartilage { get; set; }

        [RadioReportId("nec_m_100524", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsArytenoidCartilage { get; set; }

        [RadioReportId("nec_m_100526", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsOccipitale { get; set; }

        [RadioReportId("nec_m_100527", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsClivus { get; set; }

        public LocalSpreadType LocalSpreadType { get; set; }

        [RadioReportId("nec_m_100467", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SpatialNeoplasmDifferentialDiagnosisType SpatialNeoplasmDifferentialDiagnosisType1 { get; set; }

        [RadioReportId("nec_m_100468", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("nec_m_100470", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SpatialNeoplasmDifferentialDiagnosisType SpatialNeoplasmDifferentialDiagnosisType2 { get; set; }

        [RadioReportId("nec_m_100473", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SpatialNeoplasmDifferentialDiagnosisType SpatialNeoplasmDifferentialDiagnosisType3 { get; set; }

        [RadioReportId("nec_m_100538", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsWithinThePrimaryAffectedBone { get; set; }
        #endregion
    }
}
