using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum DiseaseOfTheSynoviaType : byte
    {
        None = 0,
 
        [RadioReportId("anc_m_060240", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060240", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        Diffuse = 1,

        [RadioReportId("anc_m_060241", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060241", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        Focus = 2
    }
}