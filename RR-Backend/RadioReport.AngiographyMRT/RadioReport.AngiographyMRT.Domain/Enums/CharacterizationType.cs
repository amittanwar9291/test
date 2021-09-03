using RadioReport.AngiographyMRT.Domain.Enums.Abdomen;
using RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyMRT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("ang_m_0504108", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505120", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505120", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505120", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505120", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505120", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_070447", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070437", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080468", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        Dissecans = 1,

        [RadioReportId("ang_m_0504109", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505121", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505121", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505121", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505121", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505121", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_070448", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070440", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080469", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        Spurium = 2,

        [RadioReportId("ang_m_0504110", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505122", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505122", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505122", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505122", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505122", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_070449", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070441", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080471", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        Verum = 3
    }
}
