using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Constants;
using RadioReport.ShoulderMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ShoulderMRT/JointAndBursae")]
    public class JointAndBursaePage : PageModelBase<JointAndBursaePage>
    {
        [RadioReportId("sho_m_070103", InstanceName = InstanceNames.JointAndBursae, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<JointAndBursaeFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ShoulderMrtJointAndBursae;
    }
}
