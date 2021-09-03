using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.BasalNuclei
{
    public enum DistributionType : byte
    {
        None = 0,

        [RadioReportId("hea_c_070332", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Symmetrical = 1,

        [RadioReportId("hea_c_070333", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Asymmetric = 2
    }
}