using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.MaleGender;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class MaleGenderFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_050106")]
        public MaleGenderFindingType FindingType { get; set; }

        [RadioReportId("pel_m_050245", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_050245", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsSignalLossFlowVoid { get; set; }

        [RadioReportId("pel_m_050333", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_050462", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        [RadioReportId("pel_m_050441", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
        public bool IsMarginalCMEnhancement { get; set; }

        [RadioReportId("pel_m_050438", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_050516", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        [RadioReportId("pel_m_0502144", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
        public bool IsEpididymis { get; set; }

        [RadioReportId("pel_m_050334", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_050463", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        [RadioReportId("pel_m_050536", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("pel_m_050248", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        [RadioReportId("pel_m_050248", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsNecrosis { get; set; }

        public SignalLossFlowVoidType SignalLossFlowVoidType { get; set; }

        public MainFeaturesLocalizationType MainFeaturesLocalizationType { get; set; }

        public UrethraType UrethraType { get; set; }

        [RadioReportId("pel_m_050511", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        public SignalType SignalT1wSliderType { get; set; }

        [RadioReportId("pel_m_050513", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
        public SignalType SignalT2wSliderType { get; set; }

        [RadioReportId("pel_m_050245-l", InstanceName = nameof(PenisMassCMEnhancementType), IsExportable = false)]
        public CMEnhancementType PenisMassCMEnhancementType { get; set; }

        [RadioReportId("pel_m_050231-l", InstanceName = nameof(ScrotumMassLocalizationType), IsExportable = false)]
        public ScrotumMassLocalizationType ScrotumMassLocalizationType { get; set; }

        [RadioReportId("pel_m_050511", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public SignalType ScrotumMassSignalT1wSliderType { get; set; }

        [RadioReportId("pel_m_050513", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public SignalType ScrotumMassSignalT2wSliderType { get; set; }

        [RadioReportId("pel_m_0502130", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsSeptations { get; set; }

        public SeptationsType SeptationsType { get; set; }

        [RadioReportId("pel_m_050373", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsLiquidLevel { get; set; }

        [RadioReportId("pel_m_050374", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsCysticChanges { get; set; }

        [RadioReportId("pel_m_050376", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsCentralNidus { get; set; }

        [RadioReportId("pel_m_050377", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
        public bool IsVascularAccumulation { get; set; }

        [RadioReportId("pel_m_050452-l", InstanceName = nameof(ScrotumMassCMEnhancementType), IsExportable = false)]
        public CMEnhancementType ScrotumMassCMEnhancementType { get; set; }

        [RadioReportId("pel_m_050423-l", InstanceName = nameof(ScrotumMassHomogeneity01Type), IsExportable = false)]
        public HomogeneityType ScrotumMassHomogeneity01Type { get; set; }

        [RadioReportId("pel_m_050455-l", InstanceName = nameof(ScrotumMassHomogeneity02Type), IsExportable = false)]
        public HomogeneityType ScrotumMassHomogeneity02Type { get; set; }
    }
}
