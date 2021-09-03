using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenMRT/ExaminationRegion")]
    public class ExaminationRegionPage : PageModelBase<ExaminationRegionPage>
    {
        [RadioReportId("abd_m_010105")]
        public bool IsMRIAbdomen { get; set; }

        [RadioReportId("abd_m_010106")]
        public bool IsMRIUpperAbdomen { get; set; }

        [RadioReportId("abd_m_010107")]
        public bool IsMRILiver { get; set; }

        [RadioReportId("abd_m_010108")]
        public bool IsMRIPancreas { get; set; }

        [RadioReportId("abd_m_010109")]
        public bool IsMRCP { get; set; }

        [RadioReportId("abd_m_010110")]
        public bool IsMRISellink { get; set; }

        [RadioReportId("abd_m_010111")]
        public bool IsMRIKidneys { get; set; }

        [RadioReportId("abd_m_010112")]
        public bool IsMRIAdrenalGlands { get; set; }

        [RadioReportId("abd_m_010113")]
        public bool IsMRIRetroperitoneum { get; set; }

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtExaminationRegion;
    }
}
