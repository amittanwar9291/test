using RadioReport.AbdomenCT.Domain.Enums.Technology;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.AbdomenCT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenCT/Technology")]
    public class TechnologyPage : TechnologyCTPageBase<CMSideEffect, Acquisition, Reconstruction, TechnologyPage>
    {
        #region CMReinforced

        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous => CMReinforcedType == CMReinforcedType.Yes;

        #endregion

        [RadioReportId("abd_c_030505")]
        public bool IsEnteroclysis { get; set; }

        [RadioReportId("abd_c_030506")]
        public bool IsOralContrast { get; set; }

        [RadioReportId("abd_c_030508")]
        public bool IsRectalContrast { get; set; }

        [RadioReportId("abd_c_030509")]
        public bool IsVaginalContrast { get; set; }

        [RadioReportId("abd_c_030510")]
        public bool IsRetrogradeCystography { get; set; }

        [RadioReportId("abd_c_030511")]
        public bool IsViaInsertedDrain { get; set; }

        [RadioReportId("abd_c_030512")]
        public bool IsViaInsertedTube { get; set; }

        [RadioReportId("abd_c_030513")]
        public bool IsFistulaTract { get; set; }

        [RadioReportId("abd_c_030515")]
        public SpasmolysisType SpasmolysisType { get; set; }

        [RadioReportId("uni_x_030524")]
        public ImageQualityType ImageQualityType { get; set; }

        [RadioReportId("uni_xc_030504")]
        public bool IsBeamHardeningArtefacts { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenCtTechnology;
    }
}