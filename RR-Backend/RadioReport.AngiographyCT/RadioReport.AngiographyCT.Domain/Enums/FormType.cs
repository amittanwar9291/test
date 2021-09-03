using RadioReport.AngiographyCT.Domain.Enums.Aorta;
using RadioReport.AngiographyCT.Domain.Enums.Abdomen;
using RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;
using RadioReport.Common.Logic.Attributes;
using RadioReport.AngiographyCT.Domain.Enums.UpperArteries;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080517", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080506", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_c_050508", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050518", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050529", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050539", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050549", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0604101", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0605107", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_c_070410", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070440", InstanceName = nameof(AortaFindingType.Aortitis))]
        [RadioReportId("ang_c_090502", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        Concentric = 1,

        [RadioReportId("ang_c_080518", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080507", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_c_050509", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050519", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050530", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050540", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050550", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0604102", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0605108", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_c_070411", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070441", InstanceName = nameof(AortaFindingType.Aortitis))]
        [RadioReportId("ang_c_090503", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        Eccentric = 2
    }
}
