using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum TearType : byte
	{
		None = 0,

		[RadioReportId("elb_m_060307", InstanceName = nameof(TendonsAndMusclesFinding.TearOfDeepExtensorType))]
        [RadioReportId("elb_m_0604101", InstanceName = nameof(TendonsAndMusclesFinding.TendonTearType))]
		PartialTear = 1,

		[RadioReportId("elb_m_060308", InstanceName = nameof(TendonsAndMusclesFinding.TearOfDeepExtensorType))]
		[RadioReportId("elb_m_0604102", InstanceName = nameof(TendonsAndMusclesFinding.TendonTearType))]
		CompleteTear = 2
	}
}
