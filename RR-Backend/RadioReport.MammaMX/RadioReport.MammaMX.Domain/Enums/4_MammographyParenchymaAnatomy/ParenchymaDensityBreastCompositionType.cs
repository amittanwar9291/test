
using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Enums.MammographyParenchymaAnatomy
{
    public enum ParenchymaDensityBreastCompositionType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_040303", InstanceName = nameof(MammographyParenchymaAnatomyPage.RightParenchymaDensityBreastCompositionType))]
        [RadioReportId("mam_mx_040402", InstanceName = nameof(MammographyParenchymaAnatomyPage.LeftParenchymaDensityBreastCompositionType))]
        EntirelyFatty = 1,

        [RadioReportId("mam_mx_040304", InstanceName = nameof(MammographyParenchymaAnatomyPage.RightParenchymaDensityBreastCompositionType))]
        [RadioReportId("mam_mx_040403", InstanceName = nameof(MammographyParenchymaAnatomyPage.LeftParenchymaDensityBreastCompositionType))]
        ScatteredAreasOfFibroglandularDensity = 2,

        [RadioReportId("mam_mx_040305", InstanceName = nameof(MammographyParenchymaAnatomyPage.RightParenchymaDensityBreastCompositionType))]
        [RadioReportId("mam_mx_040404", InstanceName = nameof(MammographyParenchymaAnatomyPage.LeftParenchymaDensityBreastCompositionType))]
        HeterogeneouslyDense = 3,

        [RadioReportId("mam_mx_040306", InstanceName = nameof(MammographyParenchymaAnatomyPage.RightParenchymaDensityBreastCompositionType))]
        [RadioReportId("mam_mx_040405", InstanceName = nameof(MammographyParenchymaAnatomyPage.LeftParenchymaDensityBreastCompositionType))]
        ExtremelyDense = 4
    }
}
