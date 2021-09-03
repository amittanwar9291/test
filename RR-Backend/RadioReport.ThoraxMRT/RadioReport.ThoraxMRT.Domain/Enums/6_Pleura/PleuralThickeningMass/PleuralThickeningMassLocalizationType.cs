using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum PleuralThickeningMassLocalizationType : byte
	{
		None = 0,

		[RadioReportId("tho_m_0603121", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
		Diffuse = 1,

		[RadioReportId("tho_m_0603122", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        Local = 2
	}
}
