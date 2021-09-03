using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Models
{
    [GeneratedControllerPageModel("SpineMRT/Configuration")]
    public class ConfigurationPage : PageModelBase<ConfigurationPage>
    {    
        [RadioReportId("spi_m_040103-l", InstanceName = InstanceNames.Configuration, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<ConfigurationFinding> Findings { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.SpineMrtConfiguration;
    }
}
