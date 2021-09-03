using RadioReport.AngiographyCT.Domain.Enums.Aorta;
using RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyCT.Domain.Enums.Abdomen;
using RadioReport.Common.Logic.Attributes;
using RadioReport.AngiographyCT.Domain.Enums.UpperArteries;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080357", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_0803126", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_c_050459", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_0504152", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0603119", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060419", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_c_070210", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070263", InstanceName = nameof(AortaFindingType.Aortitis))]
        [RadioReportId("ang_c_090337", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
		Saccular = 1,

        [RadioReportId("ang_c_080358", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_0803127", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_c_050460", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_0504153", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0603120", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060420", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_c_070211", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070262", InstanceName = nameof(AortaFindingType.Aortitis))]
        [RadioReportId("ang_c_090338", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
		Fusiform = 2,

        [RadioReportId("ang_c_050461", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_0504154", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        FalseAneurysm = 3
    }
}
