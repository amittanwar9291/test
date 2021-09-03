using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageModel("ShoulderMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        // 2.1 Trauma
        [RadioReportId("sho_m_020105")]
        public bool IsLuxation { get; set; }
        public FrequencyType Frequency { get; set; }
        public AnamnesisDetailsType Details { get; set; }
        public TherapyType Therapy { get; set; }
        [RadioReportId("sho_m_020119")]
        public byte MonthOfLuxation { get; set; }
        [RadioReportId("sho_m_020120")]
        public int YearOfLuxation { get; set; }

        [RadioReportId("sho_m_020201")]
        public bool IsFracture { get; set; }
        [RadioReportId("sho_m_020203")]
        public bool IsLocalizationHumeralHead { get; set; }
        [RadioReportId("sho_m_020204")]
        public bool IsLocalizationScapula { get; set; }
        [RadioReportId("sho_m_020205")]
        public bool IsGlenoid { get; set; }
        [RadioReportId("sho_m_020206")]
        public bool IsLocalizationClavicle { get; set; }
        [RadioReportId("sho_m_020208")]
        public byte MonthOfFracture { get; set; }
        [RadioReportId("sho_m_020209")]
        public int YearOfFracture { get; set; }

        // 2.2 Pre-Operation
        [RadioReportId("sho_m_020305")]
        public bool IsTeresMinor { get; set; }
        [RadioReportId("sho_m_020306")]
        public bool IsSubscapularis { get; set; }
        [RadioReportId("sho_m_020307")]
        public bool IsInfraspinatus { get; set; }
        [RadioReportId("sho_m_020308")]
        public bool IsSupraspinatus { get; set; }
        [RadioReportId("sho_m_020309")]
        public bool IsBicepsCaputLongum { get; set; }

        [RadioReportId("sho_m_020311")]
        public bool IsLabralReconstruction { get; set; }
        [RadioReportId("sho_m_020312")]
        public bool IsBalloonSpacer { get; set; }
        [RadioReportId("sho_m_020313")]
        public bool IsAcromioplasty { get; set; }

        [RadioReportId("sho_m_020402")]
        public bool IsOsteosynthesisHumeralHead { get; set; }
        [RadioReportId("sho_m_020403")]
        public bool IsOsteosynthesisClavicle { get; set; }
        [RadioReportId("sho_m_020409")]
        public bool IsOsteosynthesisScapula { get; set; }

        [RadioReportId("sho_m_020404")]
        public bool IsEndoprosthesis { get; set; }
        public EndoprosthesisType Endoprosthesis { get; set; }

        [RadioReportId("sho_m_020408")]
        public bool IsOther { get; set; }

        [RadioReportId("sho_m_020503")]
        public bool IsInstability { get; set; }
        public InstabilityType Instability { get; set; }

        [RadioReportId("sho_m_020506")]
        public bool IsImpingement { get; set; }

        [RadioReportId("sho_m_020508")]
        public bool IsProfessionalOverheadWork { get; set; }
        [RadioReportId("sho_m_020509")]
        public bool IsPowerSports { get; set; }
        [RadioReportId("sho_m_020510")]
        public bool AreOverheadSports { get; set; }

        [RadioReportId("sho_m_020512")]
        public byte MonthOfMRIPreliminaryExamination { get; set; }
        [RadioReportId("sho_m_020513")]
        public int YearOfMRIPreliminaryExamination { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ShoulderMrtAnamnesis;
    }
}
