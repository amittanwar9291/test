using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum AnastomoticAneurysmType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0904116", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Proximal = 1,

        [RadioReportId("ang_c_0904117", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Distal = 2,
    }
}