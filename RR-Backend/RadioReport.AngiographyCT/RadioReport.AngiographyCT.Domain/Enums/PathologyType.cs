using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyCT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum PathologyType : byte
	{
		None = 0,

        [RadioReportId("ang_c_050305", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050309", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050314", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050318", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050322", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0602116", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060301", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        StenosisOrOcclusion = 1,

        [RadioReportId("ang_c_050306", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050310", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050315", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050319", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050323", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0602117", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060302", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        Dissection = 2,

        [RadioReportId("ang_c_050307", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050311", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050316", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050320", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050324", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
		InflammatoryChanges = 3,

        [RadioReportId("ang_c_050312", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050325", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0602100", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060303", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        Aneurysm = 4,

        [RadioReportId("ang_c_050563", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        PartialThrombosis = 5,

        [RadioReportId("ang_c_050564", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        CompleteThrombosis = 6,

        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060304", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        VascularMalformation = 7,

        [RadioReportId("ang_c_060305", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060305", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060305", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        HemodialysisShunt = 8
    }
}
