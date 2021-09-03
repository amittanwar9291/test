using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/AnatomyEnhancement")]
    public class AnatomyEnhancementPage : PageModelBase<AnatomyEnhancementPage>
    {
        public BIRADS BIRADS { get; set; }
        public GlandularBody GlandularBody { get; set; }
        public ParenchymaType ParenchymaType { get; set; }

        /// <summary>
        /// 5.4 Artefact
        /// </summary>       
        public Artefact Artefact { get; set; }

        [RadioReportId("mam_m_050203-1", InstanceName = nameof(AnatomyEnhancementPage.ArtefactFinding1), IsExportable = false)]
        public ArtefactFindingType ArtefactFinding1 { get; set; }

        [RadioReportId("mam_m_050206-1")]
        public BreastLocations ArtefactFinding1Location { get; set; }

        [RadioReportId("mam_m_050203-2", InstanceName = nameof(AnatomyEnhancementPage.ArtefactFinding2), IsExportable = false)]
        public ArtefactFindingType ArtefactFinding2 { get; set; }

        [RadioReportId("mam_m_050206-2")]
        public BreastLocations ArtefactFinding2Location { get; set; }

        /// <summary>
        /// 5.5 Silicone implant(s)
        /// </summary>
        public SiliconeImplant SiliconeImplant { get; set; }

        [RadioReportId("mam_m_050304-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1), IsExportable = false)]
        public SiliconeImplantFinding SiliconeImplantFinding1 { get; set; }

        [RadioReportId("mam_m_050304-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2), IsExportable = false)]
        public SiliconeImplantFinding SiliconeImplantFinding2 { get; set; }

        /// <summary>
        ///5.6 Mamille(n)
        /// </summary>        
        public Mamille Mamille { get; set; }

        [RadioReportId("mam_m_050403-1", InstanceName = nameof(AnatomyEnhancementPage.MamillaFinding1), IsExportable = false)]
        public MamillaFinding MamillaFinding1 { get; set; }

        [RadioReportId("mam_m_050403-2", InstanceName = nameof(AnatomyEnhancementPage.MamillaFinding2), IsExportable = false)]
        public MamillaFinding MamillaFinding2 { get; set; }

        /// <summary>
        /// 5.7 Gland Parenchyma Contrast Media <SubTitle>Dynamic Phase, Both Sides
        /// </summary>
        public ParenchymaDynamicContrastType ParenchymaDynamicContrastType { get; set; }

        /// <summary>
        /// 5.8 Findings without Enhancement
        /// </summary>
        public NonEnhancingFindingsType NonEnhancingFindingsType { get; set; }

        [RadioReportId("mam_m_050515")]
        public bool IsFindingsLocalizationRight { get; set; }

        [RadioReportId("mam_m_050516")]
        public bool IsFindingsLocalizationLeft { get; set; }

        /// <summary>
        /// 5.9 Level parenchymales Background-Enhancement
        /// </summary>
        public LevelParenchymalesSide LevelParenchymalesSide { get; set; }

        /// <summary>
        /// 5.9 Level parenchymales Background-Enhancement - on both sides
        /// </summary>
        [RadioReportId("mam_m_050504-2", InstanceName = nameof(AnatomyEnhancementPage.OnBothSides), IsExportable = false)]
        public LevelParenchymales OnBothSides { get; set; }

        /// <summary>
        /// 5.9 Level parenchymales Background-Enhancement - Right
        /// </summary>
        [RadioReportId("mam_m_050504-3", InstanceName = nameof(AnatomyEnhancementPage.Right), IsExportable = false)]
        public LevelParenchymales Right { get; set; }

        /// <summary>
        /// 5.9 Level parenchymales Background-Enhancement - Left
        /// </summary>
        [RadioReportId("mam_m_050504-4", InstanceName = nameof(AnatomyEnhancementPage.Left), IsExportable = false)]
        public LevelParenchymales Left { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtAnatomyEnhancement;
    }
}
