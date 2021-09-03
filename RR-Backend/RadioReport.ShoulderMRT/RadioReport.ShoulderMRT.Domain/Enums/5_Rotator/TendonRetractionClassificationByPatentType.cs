using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TendonRetractionClassificationByPatentType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050421", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        StageI = 1,

        [RadioReportId("sho_m_050422", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        StageII = 2,

        [RadioReportId("sho_m_050423", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        StageIII = 3,
    }
}
