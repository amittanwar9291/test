using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum AortaCharacterizationType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070230", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070259", InstanceName = nameof(AortaFindingType.Aortitis))]
		Ectasia = 1,

		[RadioReportId("ang_c_070231", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070260", InstanceName = nameof(AortaFindingType.Aortitis))]
		Aneurysm = 2
	}
}