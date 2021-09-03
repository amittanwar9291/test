using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum CourseType : byte
	{
		None = 0,
		
		[RadioReportId("ang_c_040307", InstanceName = nameof(CoronaryArteriesFinding.RcaFromLeftCoronarySinusType))]
		[RadioReportId("ang_c_040312", InstanceName = nameof(CoronaryArteriesFinding.CourseRcxType))]
		[RadioReportId("ang_c_040317", InstanceName = nameof(CoronaryArteriesFinding.CourseRivaType))]
		[RadioReportId("ang_c_040322", InstanceName = nameof(CoronaryArteriesFinding.LcaFromRightCoronarySinusType))]
		Prepulmonary = 1,
		
		[RadioReportId("ang_c_040308", InstanceName = nameof(CoronaryArteriesFinding.RcaFromLeftCoronarySinusType))]
		[RadioReportId("ang_c_040313", InstanceName = nameof(CoronaryArteriesFinding.CourseRcxType))]
		[RadioReportId("ang_c_040318", InstanceName = nameof(CoronaryArteriesFinding.CourseRivaType))]
		[RadioReportId("ang_c_040323", InstanceName = nameof(CoronaryArteriesFinding.LcaFromRightCoronarySinusType))]
		Interarterial = 2,
		
		[RadioReportId("ang_c_040309", InstanceName = nameof(CoronaryArteriesFinding.RcaFromLeftCoronarySinusType))]
		[RadioReportId("ang_c_040314", InstanceName = nameof(CoronaryArteriesFinding.CourseRcxType))]
		[RadioReportId("ang_c_040319", InstanceName = nameof(CoronaryArteriesFinding.CourseRivaType))]
		[RadioReportId("ang_c_040324", InstanceName = nameof(CoronaryArteriesFinding.LcaFromRightCoronarySinusType))]
		Retroaortic = 3,
		
		[RadioReportId("ang_c_040310", InstanceName = nameof(CoronaryArteriesFinding.RcaFromLeftCoronarySinusType))]
		[RadioReportId("ang_c_040315", InstanceName = nameof(CoronaryArteriesFinding.CourseRcxType))]
		[RadioReportId("ang_c_040320", InstanceName = nameof(CoronaryArteriesFinding.CourseRivaType))]
		[RadioReportId("ang_c_040325", InstanceName = nameof(CoronaryArteriesFinding.LcaFromRightCoronarySinusType))]
		Septal = 4
	}
}