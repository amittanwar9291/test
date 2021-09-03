using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/Localization")]
    public class LocalizationPage : PageModelBase<LocalizationPage>
    {
        [RadioReportId("kne_m_010104")]
        public KneeLocation KneeLocation { get; set; }

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtLocalization;

        public new static LocalizationPage GetEmpty() =>
            new LocalizationPage
            {
                PatientInformation = new PatientInformation
                {
                    Age = 45,
                    Gender = Common.Logic.Enums.Gender.Female,
                    Height = 180,
                    Weight = 70
                },
                KneeLocation = KneeLocation.Left
            };
    }
}
