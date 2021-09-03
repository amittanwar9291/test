using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.HeadCT.Domain.Enums.Technology;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/Technology")]
    public class TechnologyPage : TechnologyCTPageBase<CMSideEffect, Acquisition, Reconstruction, TechnologyPage>
    {
        #region CMReinforced

        [RadioReportId("uni_y_030214")]
        public bool IsIntravenous { get; set; }

        [RadioReportId("uni_xc_030211")]
        public bool IsIntrathecal { get; set; }

        #endregion

        #region Sequences

        [RadioReportId("hea_c_030501")]
        public bool IsBeamHardeningArtifact { get; set; }

        [RadioReportId("uni_x_030524")]
        public ImageQualityType ImageQualityType { get; set; }

        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtTechnology;
    }
}
