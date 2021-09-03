using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum TypeDDetailsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090431", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        InfrarenalAortoiliacOcclusion = 1,

        [RadioReportId("ang_c_090432", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        DiffuseDisease = 2,

        [RadioReportId("ang_c_090433", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        DiffuseMultipleStenoses = 3,

        [RadioReportId("ang_c_090434", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UnilateralOcclusionOfTheCIAAndEIA = 4,

        [RadioReportId("ang_c_090512", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        BilateralOcclusionsOfTheEIA = 5,

        [RadioReportId("ang_c_090513", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        IliacStenosis = 6,

        [RadioReportId("ang_c_090514", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        LesionsThatRequireOpenSurgery = 7,
        
        [RadioReportId("ang_c_090465", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        Occlusion = 8,

        [RadioReportId("ang_c_090466", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MultipleAndLongDistanceStenoses = 9,

        [RadioReportId("ang_c_090456", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicOcclusionOfTheCommonFemoralArtery = 10,

        [RadioReportId("ang_c_090457", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicOcclusionOfThePoplitealArtery = 11,
    }
}