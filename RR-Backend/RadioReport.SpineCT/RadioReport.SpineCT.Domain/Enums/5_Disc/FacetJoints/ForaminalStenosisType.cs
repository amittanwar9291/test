using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum ForaminalStenosisType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0505229", InstanceName = nameof(DiscFinding.FacetJointArthrosisForaminalStenosisType))]
        [RadioReportId("spi_c_0503219", InstanceName = nameof(DiscFinding.UncovertebralArthrosisForaminalStenosisType))]
        Moderate = 1,

		[RadioReportId("spi_c_0505230", InstanceName = nameof(DiscFinding.FacetJointArthrosisForaminalStenosisType))]
        [RadioReportId("spi_c_0503220", InstanceName = nameof(DiscFinding.UncovertebralArthrosisForaminalStenosisType))]
        HighGrade = 2
	}
}
