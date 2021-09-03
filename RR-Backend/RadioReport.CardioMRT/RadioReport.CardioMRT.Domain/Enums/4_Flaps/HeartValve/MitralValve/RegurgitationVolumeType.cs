using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum RegurgitationVolumeType : byte
    {
        None = 0,

		[RadioReportId("car_m_040426", InstanceName = nameof(HeartValve.RegurgitationVolumeTypeInMl), CustomConditionName = nameof(HeartValveFindingType.MitralValve))]
        [RadioReportId("car_m_040430", InstanceName = nameof(HeartValve.RegurgitationVolumeTypeInPercent), CustomConditionName = nameof(HeartValveFindingType.MitralValve))]
        LowMl = 1,

        [RadioReportId("car_m_040427", InstanceName = nameof(HeartValve.RegurgitationVolumeTypeInMl), CustomConditionName = nameof(HeartValveFindingType.MitralValve))]
        [RadioReportId("car_m_040431", InstanceName = nameof(HeartValve.RegurgitationVolumeTypeInPercent), CustomConditionName = nameof(HeartValveFindingType.MitralValve))]
        Moderate = 2,

        [RadioReportId("car_m_040428", InstanceName = nameof(HeartValve.RegurgitationVolumeTypeInMl), CustomConditionName = nameof(HeartValveFindingType.MitralValve))]
        [RadioReportId("car_m_040432", InstanceName = nameof(HeartValve.RegurgitationVolumeTypeInPercent), CustomConditionName = nameof(HeartValveFindingType.MitralValve))]
        SevereMl = 3
	}
}