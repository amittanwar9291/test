using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum CystsType : byte
	{
		None = 0,

        [RadioReportId("tho_m_040250", InstanceName = nameof(MediastinumFindingType.Mass))]
        Simple = 1,

        [RadioReportId("tho_m_040251", InstanceName = nameof(MediastinumFindingType.Mass))]
        Complex = 2

    }
}
