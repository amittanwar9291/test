using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum AffectedVesselUreterType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0902202", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        AbdominalAorta = 1,

        [RadioReportId("pel_m_0902203", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        CommonIliacArtery = 2,

        [RadioReportId("pel_m_0902204", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        ExternalIliacArtery = 3,

        [RadioReportId("pel_m_0902205", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        InternalIliacArtery = 4,

        [RadioReportId("pel_m_0902206", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        InferiorVenaCava = 5,

        [RadioReportId("pel_m_0902207", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        CommonIliacVein = 6,

        [RadioReportId("pel_m_0902208", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        ExternalIliacVein = 7,

        [RadioReportId("pel_m_0902209", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        Ureter = 8
    }
}