using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/Technology")]
    public class TechnologyPage : TechnologyCTPageBase<CMSideEffect, Acquisition, Reconstruction, TechnologyPage>
    {
        #region CMReinforced

        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous => CMReinforcedType == CMReinforcedType.Yes;

        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtTechnology;
    }
}
