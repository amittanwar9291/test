using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum PartialAnomalousPulmonaryVenousConnectionType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100335", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        DrainageOfRightSuperiorPulmonaryVeinIntoRightAtriumVCS = 1,

        [RadioReportId("ang_c_100336", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        ScimitarSyndrome = 2,
    }
}