using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum SuspicionOfType : byte
	{
		None = 0,

		[RadioReportId("tho_m_050302", InstanceName = nameof(LungParenchymaFindingType.LungParenchymaPathology))]
        ConsolidationOrAtelectasis = 1,

        [RadioReportId("tho_m_050303", InstanceName = nameof(LungParenchymaFindingType.LungParenchymaPathology))]
        Mass = 2
    }
}
