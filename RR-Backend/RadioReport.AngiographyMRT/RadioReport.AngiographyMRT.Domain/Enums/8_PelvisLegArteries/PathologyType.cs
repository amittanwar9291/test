using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
    public enum PathologyType : byte
	{
		None = 0,

        [RadioReportId("ang_m_080206", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        VascularStenosis = 1,

        [RadioReportId("ang_m_080207", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        VascularPathology = 2,

        [RadioReportId("ang_m_080221", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        Embolism = 3,

        [RadioReportId("ang_m_080222", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        EntrapmentSyndrome = 4,

        [RadioReportId("ang_m_080223", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        CysticAdventitialDegeneration = 5,

        [RadioReportId("ang_m_080224", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        ThrombangiitisObliterans = 6
    }
}
