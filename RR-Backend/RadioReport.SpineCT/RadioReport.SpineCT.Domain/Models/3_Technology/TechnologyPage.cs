using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.SpineCT.Domain.Enums.Technology;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Technology")]
    public class TechnologyPage : TechnologyCTPageBase<CMSideEffect, Acquisition, Reconstruction, TechnologyPage>
    {
        #region CMReinforced

        [RadioReportId("uni_y_030214")]
        public bool IsIntravenous { get; set; }

        [RadioReportId("spi_c_030201")]
        public bool IsIntradural { get; set; }

        #endregion

        #region Sequences

        [RadioReportId("uni_x_030524")]
        public ImageQualityType ImageQualityType { get; set; }

        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtTechnology;
    }
}
