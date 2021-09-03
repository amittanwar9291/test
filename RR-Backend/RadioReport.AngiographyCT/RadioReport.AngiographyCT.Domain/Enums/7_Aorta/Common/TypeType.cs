using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum TypeType : byte
	{
		None = 0,


		[RadioReportId("ang_c_070448", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_0703104", InstanceName = nameof(AortaFindingType.Aortitis))]
		AneurysmVerum = 1,

		[RadioReportId("ang_c_070449", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_0703105", InstanceName = nameof(AortaFindingType.Aortitis))]
		AneurysmSpurium = 2,

		[RadioReportId("ang_c_070450", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_0703106", InstanceName = nameof(AortaFindingType.Aortitis))]
		AneurysmDissecans = 3
	}
}