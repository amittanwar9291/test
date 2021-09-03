using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.SpineCT.Domain.Models
{
    [GeneratedControllerPageModel("SpineCT/Configuration")]
    public class ConfigurationPage : PageModelBase<ConfigurationPage>
    {
        [RadioReportId("spi_c_040103-l", InstanceName = InstanceNames.Configuration, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        public IEnumerable<ConfigurationFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineCtConfiguration;
    }
}
