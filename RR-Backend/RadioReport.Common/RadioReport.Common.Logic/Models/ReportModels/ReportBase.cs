using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public abstract class ReportBase : ModelBase
    {
        public Guid PatientId { get; set; }
        public Guid UserId { get; set; }
        public Guid InstituteId { get; set; }
        public string PresetCode { get; set; }
        public DateTime CreationDate { get; set; }

        [RadioReportId("rep_x_000001")]
        public string StudyInstanceUID { get; set; }

        [RadioReportId("rep_x_000002")]
        public DateTime ExaminationDate { get; set; }

        [RadioReportId("rep_x_000003")]
        public string AccessionNumber { get; set; }

        public string ExaminationType { get; set; }
        public DateTime FindingsDate { get; set; }
        public ReportStatus Status { get; set; }
        public byte PatientAge { get; set; }
        public string FreeField { get; set; }
        public string Language { get; set; }
        public string Evaluation { get; set; }
        public bool IsLocked { get; set; }

        protected ReportBase()
        {
            CreationDate = DateTime.Now;
        }
    }
}
