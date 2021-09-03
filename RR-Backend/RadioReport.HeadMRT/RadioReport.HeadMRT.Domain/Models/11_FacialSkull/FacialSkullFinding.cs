using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class FacialSkullFinding : FacialSkullFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("hea_m_110111-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_m_1102231", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1102250", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsRight { get; set; }

        [RadioReportId("hea_m_1102232", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1102251", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsLeft { get; set; }

        [RadioReportId("hea_m_1100000-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public SideType SideType { get; set; }

        public SymmetryType SymmetryType { get; set; }

        [RadioReportId("hea_m_1104141", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103280", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsMusculatureOfFloorOfMouth { get; set; }

        [RadioReportId("hea_m_1105151", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105187", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsOsteomyelitisMaxilla { get; set; }

        [RadioReportId("hea_m_110310", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110360", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104100", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsFrontalBone { get; set; }

        [RadioReportId("hea_m_110361", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104101", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsZygomaticBone { get; set; }

        [RadioReportId("hea_m_110362", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104102", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsSphenoidBone { get; set; }

        [RadioReportId("hea_m_110363", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104103", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsMaxillaryBone { get; set; }

        [RadioReportId("hea_m_110309", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110365", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104104", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsEthmoidBone { get; set; }

        [RadioReportId("hea_m_1103315", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104106", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsOrbitalFloor { get; set; }

        [RadioReportId("hea_m_110311", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_1105108", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsLaminaCribrosa { get; set; }

        [RadioReportId("hea_m_110367", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105113", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsInfraorbitalNerve { get; set; }

        [RadioReportId("hea_m_110207", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110243", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110291", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102150", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102197", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103251", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("hea_m_1102254", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105223", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public int? Size { get; set; }

        [RadioReportId("hea_m_110210", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110246", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110294", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102153", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102200", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103254", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1102257", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105226", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public int? Size2ndPlane { get; set; }

        [RadioReportId("hea_m_110213", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110249", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110297", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102156", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102203", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103257", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1102260", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105229", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public int? Size3rdPlane { get; set; }

        [RadioReportId("hea_m_110216", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110252", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102100", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102159", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102206", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102263", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102310", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_m_110217", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110253", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102101", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102160", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102207", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102264", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102311", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSolidParts { get; set; }

        [RadioReportId("hea_m_110218", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110254", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102102", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102161", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102208", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102265", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102312", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsNodularParts { get; set; }

        [RadioReportId("hea_m_110222", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110258", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102107", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102165", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102212", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102269", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102316", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSepta { get; set; }       

        [RadioReportId("hea_m_110330", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110356", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110393", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103312", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsPerineural { get; set; }

        [RadioReportId("hea_m_110331", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110357", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110394", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103313", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsAlongANerveCord { get; set; }

        [RadioReportId("hea_m_110395", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103156", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsIntraorbitalSpread { get; set; }

        [RadioReportId("hea_m_110398", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103160", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103199", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103283", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsDiffuse { get; set; }

        [RadioReportId("hea_m_1103100", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103159", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsEccentric { get; set; }

        [RadioReportId("hea_m_110422", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110450", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110479", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104254", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsThickeningOfTheCalotte { get; set; }

        [RadioReportId("hea_m_1104119", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104162", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104236", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public int? MaxDiameterMucosa { get; set; }

        [RadioReportId("hea_m_1104164", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105172", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1104238", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsLymphadenopathy { get; set; }

        [RadioReportId("hea_m_1104165", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104239", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsWhartonDuctOcclusion { get; set; }

        [RadioReportId("hea_m_1104166", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104240", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsUnilateralMuscleHypotonia { get; set; }

        [RadioReportId("hea_m_1104167", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104241", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsMuscularAtrophy { get; set; }

        [RadioReportId("hea_m_1104168", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104242", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsMuscleFattyDegeneration { get; set; }

        [RadioReportId("hea_m_1104169", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104243", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsThickeningOfTheMaxillarySinusWall { get; set; }

        [RadioReportId("hea_m_110424", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_1104256", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsTemporalBoneApexAbscess { get; set; }

        [RadioReportId("hea_m_110427", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_1105120", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104260", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSinusThrombosis { get; set; }

        [RadioReportId("hea_m_110428", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110454", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110482", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104259", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_m_1105127", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105210", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105213", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1105219", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104269", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public int? AbscessMaxDiameter { get; set; }

        [RadioReportId("hea_m_110230", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110266", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102324", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public FacialSkullDiagnosisType DifferentialDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_110231", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110267", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102116", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104130", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103204", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103287", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102325", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_m_110233", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110269", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102327", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public FacialSkullDiagnosisType DifferentialDiagnosis2Type { get; set; }

        [RadioReportId("hea_m_110234", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110270", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102119", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104133", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103207", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103290", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102328", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_m_110236", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110272", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102330", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public FacialSkullDiagnosisType DifferentialDiagnosis3Type { get; set; }

        [RadioReportId("hea_m_110237", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110273", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102122", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104136", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103210", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103291", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102331", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsMoreThan1LesionOfTheSameEntity { get; set; }

        #endregion

        #region SkullBase

        [RadioReportId("hea_m_110308", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsAnteriorCranialFossa { get; set; }

        [RadioReportId("hea_m_1103314", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsSphenoidBoneAnterior { get; set; }

        [RadioReportId("hea_m_110312", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsOlfactoryNerveI { get; set; }

        [RadioReportId("hea_m_110404", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsTemporalBoneMiddle { get; set; }

        [RadioReportId("hea_m_110405", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsSuperiorOrbitalFissure { get; set; }

        [RadioReportId("hea_m_110406", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsMeningeaMediaArtery { get; set; }

        [RadioReportId("hea_m_110407", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsInternalCarotidArtery { get; set; }

        [RadioReportId("hea_m_110408", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsOpticNerveII { get; set; }

        [RadioReportId("hea_m_110409", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsOculomotorNerveIII { get; set; }

        [RadioReportId("hea_m_110410", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsTrochlearNerveIV { get; set; }

        [RadioReportId("hea_m_110411", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsOphthalmicNerveV1 { get; set; }

        [RadioReportId("hea_m_110412", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsMaxillaryNerveV2 { get; set; }

        [RadioReportId("hea_m_1104264", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsNMandibularisV3 { get; set; }

        [RadioReportId("hea_m_110503", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsMeatusAcusticusInternus { get; set; }

        [RadioReportId("hea_m_110505", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsOccipitalBone { get; set; }

        [RadioReportId("hea_m_110507", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsFacialNerveVII { get; set; }

        [RadioReportId("hea_m_110508", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsVestibulochochlearNerveVIII { get; set; }

        [RadioReportId("hea_m_110509", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsGlossopharyngealNerveIX { get; set; }

        [RadioReportId("hea_m_110510", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsVagusNerveX { get; set; }

        [RadioReportId("hea_m_110511", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsAccessoryNerveXI { get; set; }

        [RadioReportId("hea_m_110512", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsHypoglossalNerveXII { get; set; }

        [RadioReportId("hea_m_110513", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsInternalJugularVein { get; set; }

        [RadioReportId("hea_m_110514", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsSigmoidSinus { get; set; }

        #endregion

        #region TemporalBone

        [RadioReportId("hea_m_110433", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsDuctusEndolymphaticus { get; set; }

        [RadioReportId("hea_m_110434", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsSaccusEndolymphaticus { get; set; }

        [RadioReportId("hea_m_110441", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsExternalAcousticCanalMeatusAcusticusExternus { get; set; }

        [RadioReportId("hea_m_110442", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsTemporalBoneApex { get; set; }

        [RadioReportId("hea_m_110534", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsAuricle { get; set; }

        [RadioReportId("hea_m_110537", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsForamenStylomastoideum { get; set; }

        [RadioReportId("hea_m_110538", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsTubaAuditiva { get; set; }

        [RadioReportId("hea_m_110539", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsFacialNerveCanal { get; set; }

        #endregion

        #region Orbita

        [RadioReportId("hea_m_1102332-l", InstanceName = nameof(ChandlerClassificationLocalizationType), IsExportable = false)]
        public ChandlerClassificationFullType ChandlerClassificationLocalizationType { get; set; }

        [RadioReportId("hea_m_110364", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsLacrimalBone { get; set; }

        [RadioReportId("hea_m_110366", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsInfraorbitalGroove { get; set; }

        [RadioReportId("hea_m_110369", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsIntraconalSpace { get; set; }

        [RadioReportId("hea_m_110370", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsExtraconalSpace { get; set; }

        [RadioReportId("hea_m_110372", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsBulbusOculi { get; set; }

        [RadioReportId("hea_m_110458", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsAnteriorChamber { get; set; }

        [RadioReportId("hea_m_110459", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsLens { get; set; }

        [RadioReportId("hea_m_1104265", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsPosteriorChamber { get; set; }

        [RadioReportId("hea_m_110460", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsCiliaryBody { get; set; }

        [RadioReportId("hea_m_110461", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsVitreousBody { get; set; }

        [RadioReportId("hea_m_110462", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsSclera { get; set; }

        [RadioReportId("hea_m_110563", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsOpticNerveIIOther { get; set; }

        [RadioReportId("hea_m_110469", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsObliquusInferiorMuscle { get; set; }

        [RadioReportId("hea_m_110560", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsFissuraOrbitalisSuperior { get; set; }

        [RadioReportId("hea_m_110561", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsFissuraOrbitalisInferior { get; set; }

        [RadioReportId("hea_m_110564", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsTrigeminalNerveV { get; set; }

        [RadioReportId("hea_m_110565", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsMeningeaRecurrensArtery { get; set; }

        [RadioReportId("hea_m_110566", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsSuperiorOphthalmicVein { get; set; }

        [RadioReportId("hea_m_110567", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsLacrimalGland { get; set; }

        [RadioReportId("hea_m_1102105", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsEdema { get; set; }

        [RadioReportId("hea_m_110388", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public int? MaxDiameterMuscleBelly { get; set; }

        [RadioReportId("hea_m_110396", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsIntracranialSpread { get; set; }

        [RadioReportId("hea_m_110399", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsDiffuseFusiform { get; set; }

        [RadioReportId("hea_m_110478", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsRetinalDetachment { get; set; }

        [RadioReportId("hea_m_1102115", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public OrbitaDiagnosisType OrbitaDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_1102118", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public OrbitaDiagnosisType OrbitaDiagnosis2Type { get; set; }

        [RadioReportId("hea_m_1102121", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public OrbitaDiagnosisType OrbitaDiagnosis3Type { get; set; }

        [RadioReportId("hea_m_1103101-l", InstanceName = nameof(ChandlerClassificationDiagnosisType), IsExportable = false)]
        public ChandlerClassificationFullType ChandlerClassificationDiagnosisType { get; set; }
        
        #endregion

        #region ParanasalSinusesVariant

        [RadioReportId("hea_m_1102124", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsDeviatedNasalSeptum { get; set; }
        
        [RadioReportId("hea_m_1103107", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsConchaBullosa { get; set; }

        [RadioReportId("hea_m_1103109", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsConchaBullosaRight { get; set; }

        [RadioReportId("hea_m_1103110", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsConchaBullosaLeft { get; set; }

        [RadioReportId("hea_m_1103112", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public LevelType LevelType { get; set; }

        [RadioReportId("hea_m_1103115", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? ConchaBullosaSize { get; set; }

        [RadioReportId("hea_m_1103118", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? ConchaBullosa2NdPlane { get; set; }

        [RadioReportId("hea_m_1103121", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? ConchaBullosa3RdPlane { get; set; }

        [RadioReportId("hea_m_110484", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsInfraorbitalHallerCell { get; set; }

        [RadioReportId("hea_m_110486", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsInfraorbitalHallerRight { get; set; }

        [RadioReportId("hea_m_110487", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsInfraorbitalHallerLeft { get; set; }

        [RadioReportId("hea_m_110490", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? InfraorbitalHallerCellSize { get; set; }

        [RadioReportId("hea_m_110493", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? InfraorbitalHallerCell2NdPlane { get; set; }

        [RadioReportId("hea_m_110496", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? InfraorbitalHallerCell3RdPlane { get; set; }

        [RadioReportId("hea_m_110586", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsOnodiCells { get; set; }

        [RadioReportId("hea_m_110588", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsOnodiCellsRight { get; set; }

        [RadioReportId("hea_m_110589", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsOnodiCellsLeft { get; set; }

        [RadioReportId("hea_m_110592", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? OnodiCellsSize { get; set; }

        [RadioReportId("hea_m_110595", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? OnodiCells2NdPlane { get; set; }

        [RadioReportId("hea_m_110598", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? OnodiCells3RdPlane { get; set; }

        [RadioReportId("hea_m_1102128", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsAggerNasiCells { get; set; }

        [RadioReportId("hea_m_1102336", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsAggerNasiRight { get; set; }

        [RadioReportId("hea_m_1102337", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsAggerNasiLeft { get; set; }

        [RadioReportId("hea_m_1102338", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsAggerNasiMedian { get; set; }

        [RadioReportId("hea_m_1102131", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? AggerNasiCellsSize { get; set; }

        [RadioReportId("hea_m_1102134", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? AggerNasiCells2NdPlane { get; set; }

        [RadioReportId("hea_m_1102137", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public int? AggerNasiCells3RdPlane { get; set; }

        [RadioReportId("hea_m_1103124", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsSkullBase { get; set; }

        [RadioReportId("hea_m_1103125", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsAsymmetryOfTheSkullBase { get; set; }

        [RadioReportId("hea_m_1103126", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public bool IsDehiscenceOfTheSkullBase { get; set; }

        [RadioReportId("hea_m_1103128", InstanceName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        public AssessmentType AssessmentType { get; set; }

        #endregion

        #region ParanasalSinuses
        
        public ConchaeType ConchaeType { get; set; }

        [RadioReportId("hea_m_1104105", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsPalatineBone { get; set; }

        [RadioReportId("hea_m_1104107", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsNasalBone { get; set; }

        [RadioReportId("hea_m_1104108", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsVomer { get; set; }

        [RadioReportId("hea_m_1105102", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsEthmoidInfundibulum { get; set; }

        [RadioReportId("hea_m_1105103", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsUncinateProcess { get; set; }

        [RadioReportId("hea_m_1105104", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsHiatusSemilunaris { get; set; }

        [RadioReportId("hea_m_1105105", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsNasofrontalDuct { get; set; }

        [RadioReportId("hea_m_1105106", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsOstiomeatalComplex { get; set; }

        [RadioReportId("hea_m_1105107", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsLaminaePapyraceae { get; set; }

        [RadioReportId("hea_m_1105111", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsCavernosusSinus { get; set; }

        [RadioReportId("hea_m_1105112", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsNasalSeptum { get; set; }

        [RadioReportId("hea_m_1103155", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsInStructuresOutsideSinus { get; set; }

        [RadioReportId("hea_m_1104123", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsFungusBall { get; set; }

        [RadioReportId("hea_m_1104125", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public int? MaxDiameterFungusBall { get; set; }

        [RadioReportId("hea_m_1105123", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsThickeningOfTheMaxillarySinusWalls { get; set; }

        [RadioReportId("hea_m_1105124", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsCervicalLymphadenopathy { get; set; }

        [RadioReportId("hea_m_1102171", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsOrbitalComplications { get; set; }

        [RadioReportId("hea_m_1102173", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public ChandlerClassificationType ChandlerClassificationType { get; set; }

        [RadioReportId("hea_m_1102174", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsBrainAbscess { get; set; }

        [RadioReportId("hea_m_1102176", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public int? MaxDiameterBrainAbscess { get; set; }

        [RadioReportId("hea_m_1102178", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsSubduralEmpyema { get; set; }

        [RadioReportId("hea_m_1102180", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public int? MaxDiameterSubduralEmpyema { get; set; }

        [RadioReportId("hea_m_1102182", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsEpiduralAbscess { get; set; }

        [RadioReportId("hea_m_1102184", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public int? MaxDiameterEpiduralAbscess { get; set; }

        [RadioReportId("hea_m_1104129", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public ParanasalSinusesDiagnosisType ParanasalSinusesDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_1104132", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public ParanasalSinusesDiagnosisType ParanasalSinusesDiagnosis2Type { get; set; }

        [RadioReportId("hea_m_1104135", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public ParanasalSinusesDiagnosisType ParanasalSinusesDiagnosis3Type { get; set; }
        
        #endregion

        #region OralCavity

        [RadioReportId("hea_m_1104139", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsHardPalate { get; set; }

        [RadioReportId("hea_m_1104140", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsSoftPalate { get; set; }

        [RadioReportId("hea_m_1104142", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsTrigonumSubmandibulare { get; set; }

        [RadioReportId("hea_m_1104143", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsUvula { get; set; }

        [RadioReportId("hea_m_1104144", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsPalatineTonsils { get; set; }

        [RadioReportId("hea_m_1104145", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsConstrictorPharyngisSuperiorMuscle { get; set; }

        [RadioReportId("hea_m_1104146", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsMaxilla { get; set; }

        [RadioReportId("hea_m_1104147", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsMaxillaAlveolarRidge { get; set; }

        [RadioReportId("hea_m_1104148", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsMandibularBone { get; set; }

        [RadioReportId("hea_m_1104150", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsUpperLip { get; set; }

        [RadioReportId("hea_m_1104149", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsUpperLipAlveolarRidge { get; set; }

        [RadioReportId("hea_m_1104151", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsLowerLip { get; set; }

        [RadioReportId("hea_m_1105130", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsOropharynx { get; set; }

        [RadioReportId("hea_m_1105132", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsPosteriorWall { get; set; }

        [RadioReportId("hea_m_1105133", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsLateralWall { get; set; }

        [RadioReportId("hea_m_1105134", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsPeritonsillarSpace { get; set; }

        [RadioReportId("hea_m_1105135", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsLateralPharyngealWall { get; set; }

        [RadioReportId("hea_m_1105136", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsFloor { get; set; }

        [RadioReportId("hea_m_1105137", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsBaseOfTongue { get; set; }

        [RadioReportId("hea_m_1105138", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsFrenulumLinguae { get; set; }

        [RadioReportId("hea_m_1105139", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsTongueBaseTonsil { get; set; }

        [RadioReportId("hea_m_1105140", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsEpiglottisUpperMargin { get; set; }

        [RadioReportId("hea_m_1105141", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsValleculae { get; set; }

        [RadioReportId("hea_m_1103196", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsInflitrationMusculatureOfFloorOfMouth { get; set; }

        [RadioReportId("hea_m_1103203", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public OralCavityDiagnosisType OralCavityDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_1103206", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public OralCavityDiagnosisType OralCavityDiagnosis2Type { get; set; }

        [RadioReportId("hea_m_1103209", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public OralCavityDiagnosisType OralCavityDiagnosis3Type { get; set; }
        
        #endregion

        #region JawTeeth

        [RadioReportId("hea_m_1104172", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsRamusMandibulae { get; set; }

        [RadioReportId("hea_m_1104173", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsCondylarProcess { get; set; }

        [RadioReportId("hea_m_1104174", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsCoronoidProcess { get; set; }

        [RadioReportId("hea_m_1104175", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsCorpusMandibulae { get; set; }

        [RadioReportId("hea_m_1104176", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsAlveolarRidge { get; set; }

        [RadioReportId("hea_m_1104177", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsCorpusMaxillae { get; set; }

        [RadioReportId("hea_m_1104178", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsAlveolarProcess { get; set; }

        [RadioReportId("hea_m_1102234", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsRightUpperJaw { get; set; }

        [RadioReportId("hea_m_1102235", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is11 { get; set; }

        [RadioReportId("hea_m_1102236", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is12 { get; set; }

        [RadioReportId("hea_m_1102237", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is13 { get; set; }

        [RadioReportId("hea_m_1102238", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is14 { get; set; }

        [RadioReportId("hea_m_1102239", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is15 { get; set; }

        [RadioReportId("hea_m_1102240", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is16 { get; set; }

        [RadioReportId("hea_m_1102241", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is17 { get; set; }

        [RadioReportId("hea_m_1102242", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is18 { get; set; }

        [RadioReportId("hea_m_1103214", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsLeftUpperJaw { get; set; }

        [RadioReportId("hea_m_1103215", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is21 { get; set; }

        [RadioReportId("hea_m_1103216", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is22 { get; set; }

        [RadioReportId("hea_m_1103217", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is23 { get; set; }

        [RadioReportId("hea_m_1103218", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is24 { get; set; }

        [RadioReportId("hea_m_1103219", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is25 { get; set; }

        [RadioReportId("hea_m_1103220", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is26 { get; set; }

        [RadioReportId("hea_m_1103221", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is27 { get; set; }

        [RadioReportId("hea_m_1103222", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is28 { get; set; }

        [RadioReportId("hea_m_1104179", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsRightLowerJaw { get; set; }

        [RadioReportId("hea_m_1104180", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is31 { get; set; }

        [RadioReportId("hea_m_1104181", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is32 { get; set; }

        [RadioReportId("hea_m_1104182", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is33 { get; set; }

        [RadioReportId("hea_m_1104183", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is34 { get; set; }

        [RadioReportId("hea_m_1104184", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is35 { get; set; }

        [RadioReportId("hea_m_1104185", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is36 { get; set; }

        [RadioReportId("hea_m_1104186", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is37 { get; set; }

        [RadioReportId("hea_m_1104187", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is38 { get; set; }

        [RadioReportId("hea_m_1105154", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsLeftLowerJaw { get; set; }

        [RadioReportId("hea_m_1105155", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is41 { get; set; }

        [RadioReportId("hea_m_1105156", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is42 { get; set; }

        [RadioReportId("hea_m_1105157", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is43 { get; set; }

        [RadioReportId("hea_m_1105158", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is44 { get; set; }

        [RadioReportId("hea_m_1105159", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is45 { get; set; }

        [RadioReportId("hea_m_1105160", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is46 { get; set; }

        [RadioReportId("hea_m_1105161", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is47 { get; set; }

        [RadioReportId("hea_m_1105162", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool Is48 { get; set; }

        public JawTeethType JawTeethType { get; set; }

        public ToothAnomaliesType ToothAnomaliesType { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        public OtherNonOdontogenicCystType OtherNonOdontogenicCystType { get; set; }

        [RadioReportId("hea_m_1104189", InstanceName = nameof(FacialSkullFindingType.JawTeeth), CustomConditionName = nameof(JawTeethType.JawCyst))]
        [RadioReportId("hea_m_1105174", InstanceName = nameof(FacialSkullFindingType.JawTeeth), CustomConditionName = nameof(JawTeethType.OsteomyelitisMandible))]
        public JawTeethDiagnosisType JawTeethDiagnosisType { get; set; }

        public ClassificationType ClassificationType { get; set; }

        [RadioReportId("hea_m_1104191", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscDisplacement { get; set; }

        public DiscDisplacementType DiscDisplacementType { get; set; }

        [RadioReportId("hea_m_1104266", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscusReduction { get; set; }

        [RadioReportId("hea_m_1104267", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscusReductionSuspicionOf { get; set; }

        [RadioReportId("hea_m_1104197", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscDeformation { get; set; }

        [RadioReportId("hea_m_1104199", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscDeformationDistinct { get; set; }

        [RadioReportId("hea_m_1104195", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscDeformationPerforation { get; set; }

        [RadioReportId("hea_m_1104196", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscDeformationResorption { get; set; }

        [RadioReportId("hea_m_1104198", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsDiscDeformationSuspicionOf { get; set; }

        [RadioReportId("hea_m_1105165", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsOsseousChanges { get; set; }

        public OsseousChangesType OsseousChangesType { get; set; }

        [RadioReportId("hea_m_1104201", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
		public bool IsBoneEdema { get; set; }

        [RadioReportId("hea_m_1104202", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsPoorlyDemarcatedOsteolysis { get; set; }

        [RadioReportId("hea_m_1104203", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsBoneMarrowContrastEnhancement { get; set; }

        [RadioReportId("hea_m_1104204", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsSequester { get; set; }

        [RadioReportId("hea_m_1104206", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public int? SequesterMaxDiameter { get; set; }

        [RadioReportId("hea_m_1104209", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public int? SequesterSize2ndPlane { get; set; }

        [RadioReportId("hea_m_1104212", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public int? SequesterSize3rdPlane { get; set; }

        [RadioReportId("hea_m_1105169", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsPeriostealReaction { get; set; }

        [RadioReportId("hea_m_1105170", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        public bool IsSoftTissueFistula { get; set; }

        public JawTeethAssessmentType JawTeethAssessmentType { get; set; }

        #endregion

        #region SalivaryGlands

        [RadioReportId("hea_m_1104218", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsDeepMedialLobe { get; set; }

        [RadioReportId("hea_m_1104219", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsParotidDuctStenonSDuct { get; set; }

        [RadioReportId("hea_m_1104220", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsFacialNerve { get; set; }

        [RadioReportId("hea_m_1104221", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsSubmandibularGland { get; set; }

        [RadioReportId("hea_m_1104222", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsSubmandibularFossa { get; set; }

        [RadioReportId("hea_m_1104223", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsSubmandibularMandible { get; set; }

        [RadioReportId("hea_m_1104224", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsSubmandibularDuctWhartonSDuct { get; set; }

        [RadioReportId("hea_m_1104225", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsCarunculaSublingualis { get; set; }

        [RadioReportId("hea_m_1105176", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsSublingualGland { get; set; }

        [RadioReportId("hea_m_1105177", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsMinorSalivaryGlands { get; set; }

        [RadioReportId("hea_m_1103286", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public SalivaryGlandsDiagnosisType SalivaryGlandsDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_1103289", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public SalivaryGlandsDiagnosisType SalivaryGlandsDiagnosis2Type { get; set; }
        
        #endregion

        #region Skull

        [RadioReportId("hea_m_1103294", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_m_1103295", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_m_1103296", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_m_1103297", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_m_1104246", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSubperiosteal { get; set; }

        public CorticalisType CorticalisType { get; set; }

        [RadioReportId("hea_m_1104262", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsGaleaHaematoma { get; set; }

        [RadioReportId("hea_m_1104263", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsCephalhaematoma { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(FacialSkullFindingType.SkullBase) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.TemporalBone) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.Orbita) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.ParanasalSinusesVariant) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.ParanasalSinuses) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.OralCavity) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.JawTeeth) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.SalivaryGlands) => FindingType.ToString() == customConditionId,
                nameof(FacialSkullFindingType.Skull) => FindingType.ToString() == customConditionId,
                nameof(JawTeethType.JawCyst) => JawTeethType.ToString() == customConditionId,
                nameof(JawTeethType.OsteomyelitisMandible) => JawTeethType.ToString() == customConditionId,
                _ => false
            };
    }
}
