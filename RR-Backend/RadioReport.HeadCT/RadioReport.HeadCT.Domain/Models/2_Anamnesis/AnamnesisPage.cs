using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public IEnumerable<ClinicalSymptomFinding> ClinicalSymptomFindings { get; set; }

        [RadioReportId("hea_c_020109")]
        public int? Hours { get; set; }

        [RadioReportId("hea_c_020111")]
        public int? Days { get; set; }

        [RadioReportId("hea_c_020113")]
        public int? Months { get; set; }

        [RadioReportId("hea_c_020115")]
        public int? Years { get; set; }

        public IEnumerable<PreviousInterventionsTherapiesFinding> PreviousInterventionsTherapiesFindings { get; set; }

        [RadioReportId("hea_c_020503")]
        public bool IsMRI { get; set; }

        [RadioReportId("hea_c_020505")]
        public byte MonthOfMRI { get; set; }

        [RadioReportId("hea_c_020506")]
        public int YearOfMRI { get; set; }

        [RadioReportId("hea_c_020507")]
        public bool IsCT { get; set; }

        [RadioReportId("hea_c_020509")]
        public byte MonthOfCT { get; set; }

        [RadioReportId("hea_c_020510")]
        public int YearOfCT { get; set; }

        [RadioReportId("hea_c_020511")]
        public bool IsPETCT { get; set; }

        [RadioReportId("hea_c_020513")]
        public byte MonthOfPETCT { get; set; }

        [RadioReportId("hea_c_020514")]
        public int YearOfPETCT { get; set; }

        [RadioReportId("hea_c_020515")]
        public bool IsDSA { get; set; }

        [RadioReportId("hea_c_020517")]
        public byte MonthOfDSA { get; set; }

        [RadioReportId("hea_c_020518")]
        public int YearOfDSA { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtAnamnesis;
    }
}
