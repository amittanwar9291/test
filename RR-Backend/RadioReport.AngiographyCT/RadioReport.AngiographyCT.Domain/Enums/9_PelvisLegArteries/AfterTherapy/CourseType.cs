using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum CourseType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0904111", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Improvement = 1,

        [RadioReportId("ang_c_0904112", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        NoChange = 2,

        [RadioReportId("ang_c_0904113", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Deterioration = 3,
    }
}