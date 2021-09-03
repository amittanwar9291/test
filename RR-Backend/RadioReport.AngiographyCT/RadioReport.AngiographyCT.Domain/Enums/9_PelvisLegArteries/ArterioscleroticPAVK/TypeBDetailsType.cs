using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum TypeBDetailsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090424", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ShortStenosis = 1,

        [RadioReportId("ang_c_090425", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UnilateralCommonIliacArtery = 2,

        [RadioReportId("ang_c_090426", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UnilateralEIAStenosisStenoses = 3,
        
        [RadioReportId("ang_c_090460", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        [RadioReportId("ang_c_090447", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        MultipleStenoses = 4,

        [RadioReportId("ang_c_090461", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OneOrTwoStenoses = 5,

        [RadioReportId("ang_c_090448", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularStenosisOcclusion = 6,

        [RadioReportId("ang_c_090449", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingleOrMultipleLesionsWithImprovedPerfusion = 7,

        [RadioReportId("ang_c_090450", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OcclusionWithHeavyCalcifications = 8,

        [RadioReportId("ang_c_090451", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularPoplitealArteryStenosis = 9,
    }
}