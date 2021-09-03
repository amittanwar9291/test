using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageModel("NeckMRT/Indication")]
    public class IndicationPage : PageModelBase<IndicationPage>
    {
		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtIndication;

        public IEnumerable<Indication> Indications { get; set; }

        public IEnumerable<PreviousTherapy> PreviousTherapies { get; set; }
		
		[RadioReportId("nec_m_020503")]
		public bool IsMRI { get; set; }
		
		[RadioReportId("nec_m_020505")]
        public byte MonthOfMRI { get; set; }
		
		[RadioReportId("nec_m_020506")]
        public int YearOfMRI { get; set; }
		
		[RadioReportId("nec_m_020507")]
		public bool IsCT { get; set; }
		
		[RadioReportId("nec_m_020509")]
		public byte MonthOfCT { get; set; }
		
		[RadioReportId("nec_m_020510")]
        public int YearOfCT { get; set; }
		
		[RadioReportId("nec_m_020511")]
		public bool IsSonography { get; set; }
		
		[RadioReportId("nec_m_020513")]
		public byte MonthOfSonography { get; set; }
		
		[RadioReportId("nec_m_020514")]
        public int YearOfSonography { get; set; }
    }
}
