using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        [RadioReportId("tho_c_020105")]
        public IndicationType IndicationType { get; set; }

        [RadioReportId("tho_c_020106")]
        public bool IsSuspected { get; set; }

        public PCRTestForSARSCoV2Type PCRTestForSARSCoV2Type { get; set; }

        [RadioReportId("tho_c_020206")]
        public int? AgeOfTestInDays { get; set; }

        [RadioReportId("tho_c_020502")]
        public bool IsCTPreliminaryExamination { get; set; }

        [RadioReportId("tho_c_020503")]
        public byte? CTPreliminaryExaminationMonth { get; set; }

        [RadioReportId("tho_c_020504")]
        public int? CTPreliminaryExaminationYear { get; set; }

        [RadioReportId("tho_c_020505")]
        public bool IsMRIPreliminaryExamination { get; set; }

        [RadioReportId("tho_c_020506")]
        public byte? MRIPreliminaryExaminationMonth { get; set; }

        [RadioReportId("tho_c_020507")]
        public int? MRIPreliminaryExaminationYear { get; set; }

        public IEnumerable<AnamnesisFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtAnamnesis;
    }
}
