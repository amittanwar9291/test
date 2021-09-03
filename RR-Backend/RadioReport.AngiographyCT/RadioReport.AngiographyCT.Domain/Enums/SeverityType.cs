using RadioReport.AngiographyCT.Domain.Enums.Aorta;
using RadioReport.AngiographyCT.Domain.Enums.Abdomen;
using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyCT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum SeverityType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080402", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_0803133", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        [RadioReportId("ang_c_050415", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050429", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050469", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050498", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504127", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0603101", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604112", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
		[RadioReportId("ang_c_070366", InstanceName = nameof(AortaFindingType.Aortitis))]
        Mild = 1,

        [RadioReportId("ang_c_080403", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_0803134", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        [RadioReportId("ang_c_050416", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050430", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050470", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050499", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504128", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0603102", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604113", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
		[RadioReportId("ang_c_070367", InstanceName = nameof(AortaFindingType.Aortitis))]
        Moderate = 2,

        [RadioReportId("ang_c_080404", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_0803135", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        [RadioReportId("ang_c_050417", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050431", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050471", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504100", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504129", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0603103", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604114", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
		[RadioReportId("ang_c_070368", InstanceName = nameof(AortaFindingType.Aortitis))]
        Severe = 3,

        [RadioReportId("ang_c_080405", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_0803136", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        [RadioReportId("ang_c_050418", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050432", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050472", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504101", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504130", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_c_0603104", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604115", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
		[RadioReportId("ang_c_070369", InstanceName = nameof(AortaFindingType.Aortitis))]
        CompleteOcclusion = 4
    }
}
