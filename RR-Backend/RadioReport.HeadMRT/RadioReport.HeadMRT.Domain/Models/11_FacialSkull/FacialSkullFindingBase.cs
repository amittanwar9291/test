using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class FacialSkullFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_110106")]
        public FacialSkullFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_m_110204", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110240", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102334", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public FacialSkullDiagnosisType DifferentialDiagnosis1LocalizationType { get; set; }

        [RadioReportId("hea_m_110282", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public OrbitaDiagnosisType OrbitaDiagnosis1LocalizationType { get; set; }

        [RadioReportId("hea_m_1102141", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public ParanasalSinusesDiagnosisType ParanasalSinusesDiagnosis1LocalizationType { get; set; }

        [RadioReportId("hea_m_1102188", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public OralCavityDiagnosisType OralCavityDiagnosis1LocalizationType { get; set; }

        [RadioReportId("hea_m_1102333", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public SalivaryGlandsDiagnosisType SalivaryGlandsDiagnosis1LocalizationType { get; set; }

        [RadioReportId("hea_m_110313-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_110318-l", InstanceName = nameof(FacialSkullFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_110321-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_110416", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110444", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110471", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104110", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104153", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104227", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104248", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public SignalTypeExtended T1wSignalType { get; set; }

        [RadioReportId("hea_m_110418", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110446", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110473", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104112", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104155", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104229", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104250", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public SignalTypeExtended T2wSignalType { get; set; }

        [RadioReportId("hea_m_110420", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110448", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110475", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104114", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104157", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104231", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104252", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public SignalTypeExtended FlairSignalType { get; set; }

        [RadioReportId("hea_m_110516", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110541", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110569", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105115", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105143", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105179", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105192", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("hea_m_110516-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_110520", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110545", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110573", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105119", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105147", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105183", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1105196", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("hea_m_110521-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public ContrastQuantitativeType ContrastEnhancementType { get; set; }

        [RadioReportId("hea_m_110524-l", InstanceName = nameof(FacialSkullFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_m_110527-l", InstanceName = InstanceNames.FacialSkull, IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set; }

        [RadioReportId("hea_m_110219", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110255", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102103", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102162", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102209", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102266", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102313", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_110223", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110259", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102108", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102166", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102213", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102270", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102317", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsNecroses { get; set; }

        [RadioReportId("hea_m_110227", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110263", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102112", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102321", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsPepperAndSaltSign { get; set; }

        [RadioReportId("hea_m_110423", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110451", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110480", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105122", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105149", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105185", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104255", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsLocalOsteodestruction { get; set; }

        [RadioReportId("hea_m_110425", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110452", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1104261", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsCompressionBrainstem { get; set; }

        [RadioReportId("hea_m_110429", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110455", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110483", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105125", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105153", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105171", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1105189", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104257", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_m_110426", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110453", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110481", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1104116", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104159", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104233", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1104258", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_110562", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1105109", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsFossaPterygopalatina { get; set; }

        [RadioReportId("hea_m_110224", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110260", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102109", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102167", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102214", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102271", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102318", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hea_m_110226", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110262", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102111", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102169", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102216", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102273", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102320", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsMirrorFormation { get; set; }

        [RadioReportId("hea_m_110329", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110355", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110392", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103154", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103195", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103279", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103311", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_m_1103158", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103197", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103281", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsAdjacentStructuralChangesDueToPressure { get; set; }

        [RadioReportId("hea_m_1104117", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1104160", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1104234", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsDiffuseWideningOfTheMucosa { get; set; }

        [RadioReportId("hea_m_1105121", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1105148", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105184", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsThinningOfTheBonyBoundary { get; set; }

        [RadioReportId("hea_m_1105150", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105186", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsOsteomyelitis { get; set; }

        [RadioReportId("hea_m_1105152", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1105188", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsOsteomyelitisMandible { get; set; }

        [RadioReportId("hea_m_110220", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110256", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102104", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102163", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102210", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102267", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102314", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_m_110225", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110261", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102110", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102168", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102215", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102272", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102319", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_110221", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110257", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_1102106", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102164", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102211", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102268", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1102315", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_1103157", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103198", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103282", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsPerineuralSpread { get; set; }

        [RadioReportId("hea_m_110328", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110354", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110391", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1103153", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1103194", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1103278", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        [RadioReportId("hea_m_1103310", InstanceName = nameof(FacialSkullFindingType.Skull))]
        public bool IsDisplacement { get; set; }

        #endregion

        #region SkullBase

        [RadioReportId("hea_m_110402", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsMiddleCranialFossa { get; set; }

        [RadioReportId("hea_m_110403", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsSphenoidBoneMiddle { get; set; }

        [RadioReportId("hea_m_110502", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsPosteriorFossa { get; set; }

        [RadioReportId("hea_m_110504", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsTemporalBonePosterior { get; set; }

        [RadioReportId("hea_m_110506", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        public bool IsForamenMagnum { get; set; }

        #endregion

        #region TemporalBone

        [RadioReportId("hea_m_110435", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsInternalAcousticCanal { get; set; }

        [RadioReportId("hea_m_110436", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsPorusAcusticusInternus { get; set; }

        [RadioReportId("hea_m_110437", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsMiddleEarTympanum { get; set; }

        [RadioReportId("hea_m_110438", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsEpitympanon { get; set; }

        [RadioReportId("hea_m_110439", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsMesotympanum { get; set; }

        [RadioReportId("hea_m_110440", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsHypotympanon { get; set; }

        [RadioReportId("hea_m_110432", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsInnerEarLabyrinth { get; set; }

        [RadioReportId("hea_m_110535", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsMastoid { get; set; }

        [RadioReportId("hea_m_110536", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        public bool IsAntrum { get; set; }

        #endregion

        #region Orbita

        [RadioReportId("hea_m_110371", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsOpticNerveIICompartment { get; set; }

        [RadioReportId("hea_m_110464", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsRectusSuperiorMuscle { get; set; }

        [RadioReportId("hea_m_110465", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsRectusInferiorMuscle { get; set; }

        [RadioReportId("hea_m_110466", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsRectusLateralisMuscle { get; set; }

        [RadioReportId("hea_m_110467", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsRectusMedialisMuscle { get; set; }

        [RadioReportId("hea_m_110468", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsObliquusSuperiorMuscle { get; set; }

        [RadioReportId("hea_m_110387", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsMuscleBellyThickening { get; set; }

        [RadioReportId("hea_m_110397", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        public bool IsTubular { get; set; }

        #endregion

        #region ParanasalSinuses

        [RadioReportId("hea_m_1103135", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsEethmoidAirCells { get; set; }

        [RadioReportId("hea_m_1103136", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsMaxillarySinus { get; set; }

        [RadioReportId("hea_m_1103138", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsSphenoidSinus { get; set; }

        [RadioReportId("hea_m_1105110", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsInfratemporalFossa { get; set; }

        [RadioReportId("hea_m_1103137", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsFrontalSinus { get; set; }

        [RadioReportId("hea_m_1104121", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsRetentionCysts { get; set; }

        [RadioReportId("hea_m_1104122", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        public bool IsMucosalPolyps { get; set; }

        #endregion

        #region OralCavity

        [RadioReportId("hea_m_1103175", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsOralMucosalSpaceOms { get; set; }

        [RadioReportId("hea_m_1103176", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsSublingualSpaceSls { get; set; }

        [RadioReportId("hea_m_1103177", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsSubmandibularSpaceSms { get; set; }

        [RadioReportId("hea_m_1103178", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        public bool IsRootOfTheTongueRot { get; set; }

        #endregion

        #region SalivaryGlands

        [RadioReportId("hea_m_1104216", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsParotidGland { get; set; }

        [RadioReportId("hea_m_1104217", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        public bool IsSuperficialLobe { get; set; }

        #endregion
    }
}
