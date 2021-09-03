using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Constants;
using RadioReport.PelvisMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/FemaleGender")]
    public class FemaleGenderPage : PageModelBase<FemaleGenderPage>
    {
        [RadioReportId("pel_m_060103-l", InstanceName = InstanceNames.FemaleGender, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<FemaleGenderFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtFemaleGender;
    }
}
