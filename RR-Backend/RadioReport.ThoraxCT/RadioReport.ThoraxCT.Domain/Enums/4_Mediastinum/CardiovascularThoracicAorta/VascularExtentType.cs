using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum VascularExtentType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040246", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        Ectasia = 1,

        [RadioReportId("tho_c_040247", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        Aneurysm = 2
    }
}
