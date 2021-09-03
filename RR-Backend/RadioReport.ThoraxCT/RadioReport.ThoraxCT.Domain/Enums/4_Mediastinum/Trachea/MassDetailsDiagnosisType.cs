using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum MassDetailsDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0403103", InstanceName = nameof(MediastinumFindingType.Trachea))]
        BenignLesionNotFurtherSpecified = 1,

        [RadioReportId("tho_c_0403104", InstanceName = nameof(MediastinumFindingType.Trachea))]
        MalignantLesionNotFurtherSpecified = 2,

        [RadioReportId("tho_c_0403105", InstanceName = nameof(MediastinumFindingType.Trachea))]
		DignityUnclear = 3,

        [RadioReportId("tho_c_0403106", InstanceName = nameof(MediastinumFindingType.Trachea))]
		Polyp = 4,

        [RadioReportId("tho_c_0403107", InstanceName = nameof(MediastinumFindingType.Trachea))]
		Papillomatosis = 5
    }
}
