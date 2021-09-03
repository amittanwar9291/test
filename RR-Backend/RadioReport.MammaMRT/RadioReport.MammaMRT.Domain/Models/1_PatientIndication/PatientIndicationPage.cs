using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/PatientIndication")]
    public class PatientIndicationPage : PageModelBase<PatientIndicationPage>
    {
        public PatientInformation PatientInformation { get; set; }

        public MRIMammaType MRIMammaType { get; set; }

        [RadioReportId("mam_m_010116")]
        public byte? MonthOfLastMRT { get; set; }

        [RadioReportId("mam_m_010117")]
        public int? YearOfLastMRT { get; set; }

        [RadioReportId("mam_m_010201")]
        public bool WasMammography { get; set; }

        [RadioReportId("mam_m_010203")]
        public byte? MonthOfLastMammography { get; set; }

        [RadioReportId("mam_m_010204")]
        public int? YearOfLastMammography { get; set; }

        [RadioReportId("mam_m_010201-l", InstanceName = nameof(MammographyDetails), IsExportable = false)]
        public MammographyDetails MammographyDetails { get; set; }

        [RadioReportId("mam_m_010301")]
        public bool WasMammasonography { get; set; }

        [RadioReportId("mam_m_010303")]
        public byte? MonthOfLastMammosonography { get; set; }

        [RadioReportId("mam_m_010304")]
        public int? YearOfLastMammosonography { get; set; }

        [RadioReportId("mam_m_010301-l", InstanceName = nameof(MammasonographyDetails), IsExportable = false)]
        public MammographyDetails MammasonographyDetails { get; set; }

        public IEnumerable<PatientIndicationFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtPatientIndication;
    }
}
