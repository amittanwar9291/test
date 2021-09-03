using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum LocalizationThighType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_080310", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        Ventral = 1,
        
        [RadioReportId("hip_m_080311", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        Medial = 2,
        
        [RadioReportId("hip_m_080312", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        Lateral = 3,
        
        [RadioReportId("hip_m_080313", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        Dorsal = 4
    }
}