using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum NormVariantVesselsVariantsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100332", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        RightAccessoryPulmonaryVein = 1,

        [RadioReportId("ang_c_100333", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        LeftAccessoryPulmonaryVein = 2,

        [RadioReportId("ang_c_100334", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PartialAnomalousPulmonaryVenousConnection = 3,
    }
}