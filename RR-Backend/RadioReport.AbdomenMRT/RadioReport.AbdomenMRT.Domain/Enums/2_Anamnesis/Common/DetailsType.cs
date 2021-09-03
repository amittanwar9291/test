using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Anamnesis
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_020314", InstanceName = nameof(AnamnesisIndicationType.Mass))]
		[RadioReportId("abd_m_020323", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		[RadioReportId("abd_m_020330", InstanceName = nameof(AnamnesisIndicationType.Concrement))]
		[RadioReportId("abd_m_020341", InstanceName = nameof(AnamnesisIndicationType.Trauma))]
		SuspicionOf = 1,

		[RadioReportId("abd_m_020315", InstanceName = nameof(AnamnesisIndicationType.Mass))]
		[RadioReportId("abd_m_020324", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		[RadioReportId("abd_m_020331", InstanceName = nameof(AnamnesisIndicationType.Concrement))]
		[RadioReportId("abd_m_020342", InstanceName = nameof(AnamnesisIndicationType.Trauma))]
		Exclusion = 2,

		[RadioReportId("abd_m_020316", InstanceName = nameof(AnamnesisIndicationType.Mass))]
		[RadioReportId("abd_m_020325", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		[RadioReportId("abd_m_020332", InstanceName = nameof(AnamnesisIndicationType.Concrement))]
		[RadioReportId("abd_m_020343", InstanceName = nameof(AnamnesisIndicationType.Trauma))]
		FollowUp = 3
	}
}