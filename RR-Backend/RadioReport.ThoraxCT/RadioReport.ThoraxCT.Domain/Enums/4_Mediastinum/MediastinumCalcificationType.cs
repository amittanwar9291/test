using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum MediastinumCalcificationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040510", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		Complete = 1,

		[RadioReportId("tho_c_040511", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        EggshellPattern = 2,

        [RadioReportId("tho_c_040528", InstanceName = nameof(MediastinumFindingType.Mass))]
        Diffuse = 3,

        [RadioReportId("tho_c_040529", InstanceName = nameof(MediastinumFindingType.Mass))]
        Central = 4,

        [RadioReportId("tho_c_040530", InstanceName = nameof(MediastinumFindingType.Mass))]
        Eccentrically = 5
    }
}
