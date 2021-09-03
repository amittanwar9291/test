using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum TypeCDetailsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090427", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        BilateralCommonIliacArtery = 1,

        [RadioReportId("ang_c_090428", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        BilateralEIAStenoses = 2,

        [RadioReportId("ang_c_090429", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UnilateralEIAStenosis = 3,

        [RadioReportId("ang_c_090430", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        HeavenlyCalcifiedUnilateral = 4,
        
        [RadioReportId("ang_c_090462", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        StenosisFrom1To4CmLength = 5,

        [RadioReportId("ang_c_090463", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OcclusionFrom1To2CmLenght = 6,

        [RadioReportId("ang_c_090464", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        HighGradeAndLongDistanceTrifurcationStenosis = 7,

        [RadioReportId("ang_c_090453", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MultipleStenoses = 8,

        [RadioReportId("ang_c_090454", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        RecurrentStenosis = 9,
    }
}