using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum DetailsCongenitalVascularRingsType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040441", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        CommonOriginLeftCommonCarotidArteryAndRightBrachiocephalicArtery = 1,

        [RadioReportId("tho_m_040442", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        LeftCommonCarotidArteryOriginatesFromRightBrachiocephalicArtery = 2,

        [RadioReportId("tho_m_040443", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        LeftVertebralArteryOriginatesDirectlyFromAorticArc = 3,

        [RadioReportId("tho_m_040444", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        AberrantRightSubclavianArteryALusoria = 4,

        [RadioReportId("tho_m_040445", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        RightAorticArchWithAberrantLeftSubclavianArtery = 5,

        [RadioReportId("tho_m_040446", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        DoubleAorticArch = 6
    }
}

