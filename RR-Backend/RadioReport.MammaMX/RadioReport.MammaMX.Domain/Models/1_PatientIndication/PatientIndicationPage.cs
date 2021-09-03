using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/PatientIndication")]
    public class PatientIndicationPage : PageModelBase<PatientIndicationPage>
    {
        public PatientInformation PatientInformation { get; set; }

        public MXMammaType MXMammaType { get; set; }

        [RadioReportId("mam_mx_010116")]
        public byte? MonthOfLastMX { get; set; }

        [RadioReportId("mam_mx_010117")]
        public int? YearOfLastMX { get; set; }

        [RadioReportId("mam_mx_010118-l", InstanceName = nameof(MammographyDetails), IsExportable = false)]
        public MammographyDetailsType MammographyDetails { get; set; }

        [RadioReportId("mam_mx_010201")]
        public bool WasMammography { get; set; }

        [RadioReportId("mam_mx_010203")]
        public byte? MonthOfLastMammography { get; set; }

        [RadioReportId("mam_mx_010204")]
        public int? YearOfLastMammography { get; set; }

        [RadioReportId("mam_mx_010201-l", InstanceName = nameof(MammasonographyDetails), IsExportable = false)]
        public MammographyDetailsType MammasonographyDetails { get; set; }

        [RadioReportId("mam_mx_010301")]
        public bool WasMammasonography { get; set; }

        [RadioReportId("mam_mx_010303")]
        public byte? MonthOfLastMammosonography { get; set; }

        [RadioReportId("mam_mx_010304")]
        public int? YearOfLastMammosonography { get; set; }

        [RadioReportId("mam_mx_010301-l", InstanceName = nameof(MammographyMRTDetails), IsExportable = false)]
        public MammographyDetailsType MammographyMRTDetails { get; set; }

        public IEnumerable<PatientIndicationFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMxPatientIndication;
    }
}
