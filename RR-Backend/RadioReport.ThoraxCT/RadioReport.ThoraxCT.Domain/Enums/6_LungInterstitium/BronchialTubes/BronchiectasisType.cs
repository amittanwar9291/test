using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum BronchiectasisType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603173", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        Cylindrical = 1,

        [RadioReportId("tho_c_0603174", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        Varicose = 2,

        [RadioReportId("tho_c_0603175", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        Cystic = 3
    }
}
