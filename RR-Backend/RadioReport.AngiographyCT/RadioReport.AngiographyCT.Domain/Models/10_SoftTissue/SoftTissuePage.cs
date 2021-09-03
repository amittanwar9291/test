using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/SoftTissue")]
    public class SoftTissuePage : PageModelBase<SoftTissuePage>
    {
        public IEnumerable<SoftTissueFinding> Findings { get; set; }
        
        [RadioReportId("ang_c_100104-l", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtSoftTissue;
    }
}
