using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {    
        public IEnumerable<AnamnesisIndication> Indications { get; set; }

        public IEnumerable<AnamnesisPreviousSurgeries> PreviousSurgeries { get; set; }
		
		[RadioReportId("han_m_020503")]
		public bool IsXRay { get; set; }
		
		[RadioReportId("han_m_020505")]
        public byte MonthOfXRay { get; set; }
		
		[RadioReportId("han_m_020506")]
        public int YearOfXRay { get; set; }
		
		[RadioReportId("han_m_020507")]
		public bool IsCT { get; set; }
		
		[RadioReportId("han_m_020509")]
		public byte MonthOfCT { get; set; }
		
		[RadioReportId("han_m_020510")]
        public int YearOfCT { get; set; }
		
		[RadioReportId("han_m_020511")]
		public bool IsMri { get; set; }
		
		[RadioReportId("han_m_020513")]
		public byte MonthOfMri { get; set; }
		
		[RadioReportId("han_m_020514")]
        public int YearOfMri { get; set; }

		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtAnamnesis;
    }
}
