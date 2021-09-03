using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Constants;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum PageType : byte
    {
        None = 0,

        [RadioReportId("hip_m_070203", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        [RadioReportId("hip_m_070203", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        [RadioReportId("hip_m_070203", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        [RadioReportId("hip_m_080203", InstanceName = InstanceNames.SoftTissue)]
        [RadioReportId("hip_m_050205")]
        Right = 1,

        [RadioReportId("hip_m_070204", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        [RadioReportId("hip_m_070204", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        [RadioReportId("hip_m_070204", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        [RadioReportId("hip_m_080204", InstanceName = InstanceNames.SoftTissue)]
        [RadioReportId("hip_m_050206")]
        Left = 2
    }
}