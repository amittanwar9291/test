using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum PathologyNoFractureType : byte
    {
        None = 0,

        [RadioReportId("tho_m_070522", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        HeightReductionAnatomicVariation = 1,

        [RadioReportId("tho_m_070523", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        ScheuermannsDisease = 2,

        [RadioReportId("tho_m_070525", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        VertebralBodyRemodeling = 3,

        [RadioReportId("tho_m_070527", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        NotochordRemnant = 4
    }
}
