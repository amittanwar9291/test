using RadioReport.AngiographyMRT.Domain.Enums.Abdomen;
using RadioReport.AngiographyMRT.Domain.Enums.Aorta;
using RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyMRT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("ang_m_0404117", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404117", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404117", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404117", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404117", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_m_0503119", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050419", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_m_060210", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        [RadioReportId("ang_m_070357", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_0703126", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080337", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        Saccular = 1,

        [RadioReportId("ang_m_0404118", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404118", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404118", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404118", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404118", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        [RadioReportId("ang_m_0503120", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050420", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_m_060211", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        [RadioReportId("ang_m_070358", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_0703127", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        [RadioReportId("ang_m_080338", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        Fusiform = 2,

        [RadioReportId("ang_m_0404119", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404119", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404119", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404119", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404119", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        FalseAneurysm = 3
    }
}
