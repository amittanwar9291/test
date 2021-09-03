using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum SynoviaFormType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060530", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        Multilobulated = 1,

        [RadioReportId("anc_m_060531", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        SynovialNodulus = 2,

        [RadioReportId("anc_m_060547", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        SynovialProliferations = 3

    }
}