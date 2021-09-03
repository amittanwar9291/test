using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/Examination")]
    public class ExaminationPage: PageModelBase<ExaminationPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtExamination;

        public PatientInformation PatientInformation { get; set; }

        [RadioReportId("hea_c_010104")]
        public bool IsBrainMRI { get; set; }

        [RadioReportId("hea_c_010105")]
        public bool IsBrainstemMRI { get; set; }

        [RadioReportId("hea_c_010106")]
        public bool IsPituitaryMRI { get; set; }

        [RadioReportId("hea_c_010107")]
        public bool IsOrbitaMRI { get; set; }

        [RadioReportId("hea_c_010108")]
        public bool IsParanasalSinusMRI { get; set; }

        [RadioReportId("hea_c_010109")]
        public bool IsTemporalBone { get; set; }

        public IEnumerable<ExaminationIndicationFinding> Findings { get; set; }

    }
}
