using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum DiffuseLesionType : byte
	{
		None = 0,

		[RadioReportId("tho_m_0603102", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        HepaticSteatosis = 1,

		[RadioReportId("tho_m_0603103", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        HepatitisCirrhosis = 2,

		[RadioReportId("tho_m_0603104", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        Hemosiderosis = 3,

        [RadioReportId("tho_m_0603105", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        NotFurtherSpecified = 4
    }
}
