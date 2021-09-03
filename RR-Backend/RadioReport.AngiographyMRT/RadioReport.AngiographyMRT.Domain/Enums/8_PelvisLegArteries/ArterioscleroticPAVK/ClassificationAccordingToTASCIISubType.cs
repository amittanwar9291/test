using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
    public enum ClassificationAccordingToTASCIISubType : byte
    {
        None = 0,

        [RadioReportId("ang_m_080315", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac))]
        [RadioReportId("ang_m_080324", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal))]
        [RadioReportId("ang_m_080332", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal))]
        TypeA = 1,

        [RadioReportId("ang_m_080316", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac))]
        [RadioReportId("ang_m_080325", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal))]
        [RadioReportId("ang_m_080333", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal))]
        TypeB = 2,

        [RadioReportId("ang_m_080317", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac))]
        [RadioReportId("ang_m_080326", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal))]
        [RadioReportId("ang_m_080334", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal))]
        TypeC = 3,

        [RadioReportId("ang_m_080318", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac))]
        [RadioReportId("ang_m_080327", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal))]
        [RadioReportId("ang_m_080335", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal))]
        TypeD = 4,

        [RadioReportId("ang_m_080319", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        LerichSyndrome = 5
    }
}
