using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public IEnumerable<AnamnesisIndication> AnamnesisIndications { get; set; }

        public IEnumerable<PreviousIntervention> PreviousInterventions { get; set; }

        [RadioReportId("spi_c_020503")]
        public bool IsCT { get; set; }

        [RadioReportId("spi_c_020505")]
        public byte MonthOfCT { get; set; }

        [RadioReportId("spi_c_020506")]
        public int YearOfCT { get; set; }

        [RadioReportId("spi_c_020507")]
        public bool IsMRI { get; set; }

        [RadioReportId("spi_c_020509")]
        public byte MonthOfMRI { get; set; }

        [RadioReportId("spi_c_020510")]
        public int YearOfMRI { get; set; }

        [RadioReportId("spi_c_020511")]
        public bool IsXRay { get; set; }

        [RadioReportId("spi_c_020513")]
        public byte MonthOfXRay { get; set; }

        [RadioReportId("spi_c_020514")]
        public int YearOfXRay { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtAnamnesis;
    }
}
