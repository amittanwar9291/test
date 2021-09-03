using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageModel("KneeMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        // 2.1 Trauma
        [RadioReportId("kne_m_020105")]
        public bool IsTrauma { get; set; }

        public TraumaType TraumaType { get; set; }

        public TraumaVelocityType TraumaVelocityType { get; set; }

        [RadioReportId("kne_m_020112")]
        public byte MonthOfPeriodTrauma { get; set; }

        [RadioReportId("kne_m_020113")]
        public int YearOfPeriodTrauma { get; set; }

        [RadioReportId("kne_m_020201")]
        public bool IsLuxationPatella { get; set; }

        [RadioReportId("kne_m_020203")]
        public byte MonthOfLuxation { get; set; }

        [RadioReportId("kne_m_020204")]
        public int YearOfLuxation { get; set; }

        [RadioReportId("kne_m_020205")]
        public bool IsFracture { get; set; }

        [RadioReportId("kne_m_020207")]
        public bool IsFemur { get; set; }

        [RadioReportId("kne_m_020208")]
        public bool IsTibia { get; set; }

        [RadioReportId("kne_m_020209")]
        public bool IsFibula { get; set; }

        [RadioReportId("kne_m_020210")]
        public bool IsPatella { get; set; }

        // 2.0 Pre-Operation
        [RadioReportId("kne_m_020303")]
        public bool IsLigamentReconstruction { get; set; }

        [RadioReportId("kne_m_020305")]
        public bool IsAnteriorCruciateLigament { get; set; }

        [RadioReportId("kne_m_020306")]
        public bool IsMedialCollateralLigament { get; set; }

        [RadioReportId("kne_m_020307")]
        public bool IsLateralCollateralLigament { get; set; }

        [RadioReportId("kne_m_020308")]
        public bool IsPosteriorCruciateLigament { get; set; }

        [RadioReportId("kne_m_020309")]
        public bool IsOsteosynthesis { get; set; }

        [RadioReportId("kne_m_020310")]
        public bool IsIntramedullaryNailingOsteosynthesis { get; set; }

        [RadioReportId("kne_m_020311")]
        public bool IsEndoprosthesis { get; set; }

        [RadioReportId("kne_m_020312")]
        public bool IsCartilageTransplantation { get; set; }

        public CartilageTransplantationType CartilageTransplantationType { get; set; }

        [RadioReportId("kne_m_020315")]
        public bool IsSubchondralDrilling { get; set; }

        [RadioReportId("kne_m_020316")]
        public bool IsLateralRetinacularRelease { get; set; }

        [RadioReportId("kne_m_020317")]
        public bool IsOther { get; set; }

        [RadioReportId("kne_m_020401")]
        public bool IsMeniscusSurgery { get; set; }

        [RadioReportId("kne_m_020402")]
        public bool IsResection { get; set; }

        [RadioReportId("kne_m_020404")]
        public MeniscusSurgeryLocations ResectionLocation { get; set; }

        [RadioReportId("kne_m_020405")]
        public bool IsSuture { get; set; }

        [RadioReportId("kne_m_020407")]
        public MeniscusSurgeryLocations SutureLocation { get; set; }

        // 2.3 Clinic

        [RadioReportId("kne_m_020503")]
        public bool IsInstability { get; set; }

        [RadioReportId("kne_m_020504", InstanceName = nameof(InstabilityLocalizationType), IsExportable = false)]
        public AnamnesisLocalizationType InstabilityLocalizationType { get; set; }

        [RadioReportId("kne_m_020509")]
        public bool IsKneePain { get; set; }

        [RadioReportId("kne_m_020510", InstanceName = nameof(KneePainLocalizationType), IsExportable = false)]
        public AnamnesisLocalizationType KneePainLocalizationType { get; set; }

        [RadioReportId("kne_m_020516")]
        public byte MonthOfMRIPreliminaryExamination { get; set; }

        [RadioReportId("kne_m_020517")]
        public int YearOfMRIPreliminaryExamination { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtAnamnesis;
    }
}
