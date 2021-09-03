using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Models.Technology;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageModel("NeckMRT/Technology")]
    public class TechnologyPage : TechnologyMRTPageBase<CMSideEffect, Sequence, TechnologyPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtTechnology;
        
        #region CMReinforced
        
        [RadioReportId("uni_y_030209")]
        public bool IsIntravenous { get; set; }
        
        #endregion
        #region Sequence
        
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }
        
        [RadioReportId("uni_y_030502")]
        public bool IsSusceptibilityArtifacts { get; set; }
        
        #endregion
    }
}
