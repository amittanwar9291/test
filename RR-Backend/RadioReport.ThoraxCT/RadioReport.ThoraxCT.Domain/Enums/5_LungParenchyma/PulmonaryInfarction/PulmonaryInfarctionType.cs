using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum PulmonaryInfarctionType : byte
    {
        None = 0,

        [RadioReportId("tho_c_050359", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        DomeShapedPleuralBasedBubblyOpafication = 1,

        [RadioReportId("tho_c_050360", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        ConvexPleuralBasedConsolidation = 2,

        [RadioReportId("tho_c_050361", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        RoundedPleuralBasedConsolidation = 3
    }
}
