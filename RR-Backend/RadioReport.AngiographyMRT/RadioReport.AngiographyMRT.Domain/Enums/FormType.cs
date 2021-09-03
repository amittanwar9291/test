using RadioReport.AngiographyMRT.Domain.Enums.Abdomen;
using RadioReport.AngiographyMRT.Domain.Enums.Aorta;
using RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyMRT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("ang_m_040518", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040518", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040518", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040518", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040518", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_m_0504101", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505107", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505107", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505107", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505107", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505107", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_060410", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060440", InstanceName = nameof(AortaFindingType.Aortitis))]
        [RadioReportId("ang_m_070517", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070506", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080502", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        Concentric = 1,

        [RadioReportId("ang_m_040519", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040519", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040519", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040519", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040519", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_m_0504102", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505108", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505108", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505108", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505108", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505108", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_060411", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060441", InstanceName = nameof(AortaFindingType.Aortitis))]
        [RadioReportId("ang_m_070518", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070507", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080503", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        Eccentric = 2
    }
}
