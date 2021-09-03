using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum CmEnhancementType : byte
    {
        None = 0,

        [RadioReportId("anc_m_0603130", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        No = 1,

        [RadioReportId("anc_m_0603131", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        Low = 2,

        [RadioReportId("anc_m_0603132", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        Strong = 3
    }
}
