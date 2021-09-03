using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Anamnesis
{
	public enum DetailsInterventionType : byte
	{
		None = 0,

		[RadioReportId("spi_c_020421", InstanceName = nameof(PreviousInterventionType.StatusPostBoneCementImplantation))]
        Vertebroplasty = 1,

		[RadioReportId("spi_c_020422", InstanceName = nameof(PreviousInterventionType.StatusPostBoneCementImplantation))]
        Kyphoplasty = 2
	}
}
