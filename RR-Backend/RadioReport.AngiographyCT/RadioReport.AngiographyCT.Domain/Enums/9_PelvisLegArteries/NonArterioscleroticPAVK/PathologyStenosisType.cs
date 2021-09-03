using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum PathologyStenosisType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090357", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        HourglassSign = 1,

        [RadioReportId("ang_c_090358", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        ScimitarSign = 2,
    }
}