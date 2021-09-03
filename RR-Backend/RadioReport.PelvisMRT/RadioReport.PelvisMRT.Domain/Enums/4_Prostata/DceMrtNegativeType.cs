using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum DceMrtNegativeType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040227")]
		NoEarlyOrSimultaneousKmEnhancement = 1,

		[RadioReportId("pel_m_040228")]
		DiffuseKmEnhancementWithoutSuspectCorrelateInT2w = 2,

		[RadioReportId("pel_m_040229")]
		FocalKmEnhancementForTypicalBphNodeInT2w = 3


	}
}
