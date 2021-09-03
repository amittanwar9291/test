using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("SpineCT/SoftTissues")]
    public class SoftTissuesPage : PageModelBase<SoftTissuesPage>
    {
        [RadioReportId("spi_c_080103-l", InstanceName = InstanceNames.SoftTissues, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<SoftTissuesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtSoftTissues;
    }
}
