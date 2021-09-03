using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum MorphologyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100472", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        NormalShape = 1,

        [RadioReportId("ang_c_100473", InstanceName = nameof(SoftTissueFindingType.Lymphadenopathy))]
        Round = 2,
    }
}