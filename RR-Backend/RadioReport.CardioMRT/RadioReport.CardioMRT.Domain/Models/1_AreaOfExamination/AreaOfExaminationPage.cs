using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageModel("CardioMRT/AreaOfExamination")]
    public class AreaOfExaminationPage : PageModelBase<AreaOfExaminationPage>
    {
        [RadioReportId("car_m_010104")]
        public bool IsSpecificHeartMRT { get; set; }

        public PatientInformation PatientInformation { get; set; }

        [RadioReportId("car_m_010402")]
        public float BSA => (float)Math.Round(Math.Sqrt((PatientInformation.Height * PatientInformation.Weight) / 3600f), 1);

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtAreaOfExamination;
    }
}
