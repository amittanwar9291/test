using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtAnamnesis;

        [RadioReportId("tho_m_020503")]
        public bool IsMRIPreliminaryExamination { get; set; }

        [RadioReportId("tho_m_020505")]
        public byte? MRIPreliminaryExaminationMonth { get; set; }

        [RadioReportId("tho_m_020506")]
        public int? MRIPreliminaryExaminationYear { get; set; }

        [RadioReportId("tho_m_020507")]
        public bool IsCTPreliminaryExamination { get; set; }

        [RadioReportId("tho_m_020509")]
        public byte? CTPreliminaryExaminationMonth { get; set; }

        [RadioReportId("tho_m_020510")]
        public int? CTPreliminaryExaminationYear { get; set; }

        public IEnumerable<AnamnesisFinding> AnamnesisFindings { get; set; }

        public IEnumerable<IndicationFinding> IndicationFindings { get; set; }

    }
}
