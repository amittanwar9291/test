using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum DissectionType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0905123", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        HemodynamicallyRelevant = 1,

        [RadioReportId("ang_c_0905124", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        AgainstTheFlow = 2,
    }
}