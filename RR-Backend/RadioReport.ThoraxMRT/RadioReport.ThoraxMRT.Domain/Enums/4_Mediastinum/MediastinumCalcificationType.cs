using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum MediastinumCalcificationType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040510", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		Complete = 1,

		[RadioReportId("tho_m_040511", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        EggshellPattern = 2
    }
}
