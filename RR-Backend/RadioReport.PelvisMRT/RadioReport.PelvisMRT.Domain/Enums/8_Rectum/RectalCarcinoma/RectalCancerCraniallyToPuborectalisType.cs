using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum RectalCancerCraniallyToPuborectalisType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080220", InstanceName = nameof(RectumFinding.RectalCancerCraniallyToPuborectalisType))]
		[RadioReportId("pel_m_080227", InstanceName = nameof(RectumFinding.LowRectalCancerType))]
		T1 = 1,

		[RadioReportId("pel_m_080221", InstanceName = nameof(RectumFinding.RectalCancerCraniallyToPuborectalisType))]
		[RadioReportId("pel_m_080228", InstanceName = nameof(RectumFinding.LowRectalCancerType))]
		T2 = 2,

		[RadioReportId("pel_m_080222", InstanceName = nameof(RectumFinding.RectalCancerCraniallyToPuborectalisType))]
		[RadioReportId("pel_m_080229", InstanceName = nameof(RectumFinding.LowRectalCancerType))]
		T3 = 3,

		[RadioReportId("pel_m_080223", InstanceName = nameof(RectumFinding.RectalCancerCraniallyToPuborectalisType))]
		[RadioReportId("pel_m_080230", InstanceName = nameof(RectumFinding.LowRectalCancerType))]
		T4 = 4,

		[RadioReportId("pel_m_080224", InstanceName = nameof(RectumFinding.RectalCancerCraniallyToPuborectalisType))]
		[RadioReportId("pel_m_080231", InstanceName = nameof(RectumFinding.LowRectalCancerType))]
		Tx = 5
	}
}
