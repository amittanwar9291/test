using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum DilatationDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070501", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		BicuspidAorticValve = 1,

		[RadioReportId("ang_c_070502", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		MarfanSyndrome = 2
	}
}