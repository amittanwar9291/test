using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum ChronicLesionsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090315", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), 
            CustomConditionName = 
                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        [RadioReportId("ang_c_090324", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), 
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        [RadioReportId("ang_c_090332", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        TypeA = 1,

        [RadioReportId("ang_c_090316", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        [RadioReportId("ang_c_090325", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        [RadioReportId("ang_c_090333", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        TypeB = 2,

        [RadioReportId("ang_c_090317", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        [RadioReportId("ang_c_090326", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        [RadioReportId("ang_c_090334", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        TypeC = 3,

        [RadioReportId("ang_c_090318", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        [RadioReportId("ang_c_090327", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        [RadioReportId("ang_c_090335", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        TypeD = 4,

        [RadioReportId("ang_c_090319", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        LerichSyndrome = 5,
    }
}