using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum HistologyKnownType : byte
    {
        None = 0,
        
        [RadioReportId("anc_m_060559", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604157", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        Benigne = 1,

        [RadioReportId("anc_m_060560", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604158", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        Maligne = 2
    }
}