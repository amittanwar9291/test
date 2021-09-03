using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.FeetMRT.Domain.Models.Anamnesis
{
    [GeneratedControllerPageModel("FeetMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.FeetMrtAnamnesis;

        public IEnumerable<AnamnesisIndication> Indications { get; set; }
                
        [RadioReportId("anc_m_020307")]
        public bool IsXRay { get; set; }

        [RadioReportId("anc_m_020309")]
        public byte XRayMonth { get; set; }

        [RadioReportId("anc_m_020310")]
        public int XRayYear { get; set; }
 
        [RadioReportId("anc_m_020311")]
        public bool IsCT { get; set; }

        [RadioReportId("anc_m_020313")]
        public byte CTMonth { get; set; }

        [RadioReportId("anc_m_020314")]
        public int CTYear { get; set; }

        [RadioReportId("anc_m_020315")]
        public bool IsMRI { get; set; }

        [RadioReportId("anc_m_020317")]
        public byte MRIMonth { get; set; }

        [RadioReportId("anc_m_020318")]
        public int MRIYear { get; set; }
    }
}
