using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums.Summary;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public List<SummaryFinding> Findings { get; set; }

        [RadioReportId("hea_m_120108")]
        public bool IsCta { get; set; }

        [RadioReportId("hea_m_120109")]
        public bool IsMra { get; set; }

        [RadioReportId("hea_m_120110")]
        public bool IsMriWithIvContrastAgent { get; set; }

        [RadioReportId("hea_m_120111")]
        public bool IsPetCt { get; set; }

        [RadioReportId("hea_m_120114")]
        public bool IsScintigraphy { get; set; }

        [RadioReportId("hea_m_120112")]
        public bool IsCcdSonographyNeckVessels { get; set; }

        [RadioReportId("hea_m_120113")]
        public bool IsBiopsy { get; set; }

        public PeriodType PeriodType { get; set; }

        [RadioReportId("hea_m_120358")]
        public bool IsNeurology { get; set; }

        [RadioReportId("hea_m_120359")]
        public bool IsNeurosurgery { get; set; }

        [RadioReportId("hea_m_120360")]
        public bool IsEnt { get; set; }

        [RadioReportId("hea_m_120361")]
        public bool IsOphthalmology { get; set; }

        [RadioReportId("hea_m_120364")]
        public bool IsCardiology { get; set; }

        [RadioReportId("hea_m_120365")]
        public bool IsInternalMedicine { get; set; }

        public CourseType CourseType { get; set; }

        public RegressiveType RegressiveType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtSummary;
    }
}
