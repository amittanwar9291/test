using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum EmphysemaType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603147", InstanceName = nameof(LungInterstitiumFindingType.Emphysema))]
        Centrilobular = 1,

        [RadioReportId("tho_c_0603149", InstanceName = nameof(LungInterstitiumFindingType.Emphysema))]
        Paraseptal = 2,

        [RadioReportId("tho_c_0603150", InstanceName = nameof(LungInterstitiumFindingType.Emphysema))]
        Panlobular = 3,

        [RadioReportId("tho_c_0603151", InstanceName = nameof(LungInterstitiumFindingType.Emphysema))]
        Bullous = 4
    }
}
