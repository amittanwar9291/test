
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum ModalityType: byte
    {
        None = 0,

        [RadioReportId("ang_c_110204", InstanceName = nameof(SummaryPage.ModalityTypeFurtherExaminationType))]
        [RadioReportId("ang_c_110303", InstanceName = nameof(SummaryPage.ModalityTypeFollowUpType))]
        MRAngiography = 1,

        [RadioReportId("ang_c_110205", InstanceName = nameof(SummaryPage.ModalityTypeFurtherExaminationType))]
        [RadioReportId("ang_c_110304", InstanceName = nameof(SummaryPage.ModalityTypeFollowUpType))]
        CTAngiography = 2,

        [RadioReportId("ang_c_110206", InstanceName = nameof(SummaryPage.ModalityTypeFurtherExaminationType))]
        [RadioReportId("ang_c_110305", InstanceName = nameof(SummaryPage.ModalityTypeFollowUpType))]
        ColorDuplexUltrasound = 3,

        [RadioReportId("ang_c_110207", InstanceName = nameof(SummaryPage.ModalityTypeFurtherExaminationType))]
        [RadioReportId("ang_c_110306", InstanceName = nameof(SummaryPage.ModalityTypeFollowUpType))]
        DigitalSubtractionAngiographyDSA = 4
    }
}
 