using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum DetailsPulmonaryHypertensionType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040331", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Group1PulmonaryArterialHypertension = 1,

        [RadioReportId("tho_c_040332", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Group2DueToLeftHeartDisease = 2,

        [RadioReportId("tho_c_040333", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Group2DueToLungDiseasesAndOrHypoxia = 3,

        [RadioReportId("tho_c_040334", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		GroupChronicThromboembolic = 4
    }
}
