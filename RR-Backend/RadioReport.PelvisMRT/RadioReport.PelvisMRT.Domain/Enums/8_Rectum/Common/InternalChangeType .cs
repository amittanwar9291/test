using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum InternalChangeType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080443", InstanceName = nameof(RectumFinding.InternalChangeType))]
        [RadioReportId("pel_m_080537", InstanceName = nameof(RectumFinding.CmEnhancementInternalChangeType))]
        [RadioReportId("pel_m_0802100", InstanceName = nameof(RectumFinding.AppendicitisInternalChangeType))]
        [RadioReportId("pel_m_0804122", InstanceName = nameof(RectumFinding.FistulaInternalChangeType))]
        Homogeneous = 1,

		[RadioReportId("pel_m_080444", InstanceName = nameof(RectumFinding.InternalChangeType))]
        [RadioReportId("pel_m_080538", InstanceName = nameof(RectumFinding.CmEnhancementInternalChangeType))]
        [RadioReportId("pel_m_0802101", InstanceName = nameof(RectumFinding.AppendicitisInternalChangeType))]
        [RadioReportId("pel_m_0804123", InstanceName = nameof(RectumFinding.FistulaInternalChangeType))]
        Heterogeneous = 2,

        [RadioReportId("pel_m_0804124", InstanceName = nameof(RectumFinding.FistulaInternalChangeType))]
        FistulaWall = 3
	}
}
