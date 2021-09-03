using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.PelvisMRT.Domain.Constants;
using RadioReport.PelvisMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/MaleGender")]
    public class MaleGenderPage : PageModelBase<MaleGenderPage>
    {
        [RadioReportId("pel_m_050103-l", InstanceName = InstanceNames.MaleGender, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<MaleGenderFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtMaleGender;
    }
}
