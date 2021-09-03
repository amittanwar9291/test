using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum CysticFibrosisType : byte
	{
		None = 0,

		[RadioReportId("tho_m_050205", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        QuantitativeEichingerScore = 1,

        [RadioReportId("tho_m_050206", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        Descriptive = 2
    }
}
