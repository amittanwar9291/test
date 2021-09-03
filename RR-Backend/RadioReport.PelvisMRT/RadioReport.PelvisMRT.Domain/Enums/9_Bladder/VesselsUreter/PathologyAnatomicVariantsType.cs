using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum PathologyAnatomicVariantsType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0903217", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        Occlusion = 1,

        [RadioReportId("pel_m_0903218", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        LeftSidedInferiorVenaCava = 2,

        [RadioReportId("pel_m_0903219", InstanceName = nameof(BladderFindingType.VesselsUreter))]
        DuplicatedInferiorVenaCava = 3
    }
}