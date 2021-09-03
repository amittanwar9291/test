using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadMRT.Domain.Models
{
    [GeneratedControllerPageModel("HeadMRT/Examination")]
    public class ExaminationPage: PageModelBase<ExaminationPage>
    {

        public PatientInformation PatientInformation { get; set; }

        [RadioReportId("hea_m_010104")]
        public bool IsBrainMRI { get; set; }

        [RadioReportId("hea_m_010105")]
        public bool IsBrainstemMRI { get; set; }

        [RadioReportId("hea_m_010106")]
        public bool IsPituitaryMRI { get; set; }

        [RadioReportId("hea_m_010107")]
        public bool IsOrbitaMRI { get; set; }

        [RadioReportId("hea_m_010108")]
        public bool IsParanasalSinusMRI { get; set; }

        public IEnumerable<ExaminationIndicationFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadMrtExamination;

    }
}
