using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum TypeType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0903164", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		Indirect = 1,

		[RadioReportId("abd_m_0903165", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		Direct = 2,

		[RadioReportId("abd_m_0903171", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		TreitzSHernia = 3,

		[RadioReportId("abd_m_0903172", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		ParaduodenalHernia = 4,

		[RadioReportId("abd_m_0903176", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		BursaOmentalis = 3,

		[RadioReportId("abd_m_0903177", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		IleocecalHernia = 4,

		[RadioReportId("abd_m_0903178", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		TransmesentericHernia = 5,

		[RadioReportId("abd_m_0903179", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		MesentericDefectSigmoid = 6
	}
}