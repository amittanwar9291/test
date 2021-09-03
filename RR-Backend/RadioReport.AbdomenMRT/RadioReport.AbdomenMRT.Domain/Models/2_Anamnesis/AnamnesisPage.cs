using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtAnamnesis;
        public IEnumerable<AnamnesisClinic> Clinics { get; set; }
        public IEnumerable<AnamnesisIndication> Indications { get; set; }

		[RadioReportId("abd_m_020503")]
		public bool IsMRIAbdomen { get; set; }

		[RadioReportId("abd_m_020505")]
		public byte? MonthOfMRI { get; set; }

		[RadioReportId("abd_m_020506")]
		public int? YearOfMRI { get; set; }

		[RadioReportId("abd_m_020507")]
		public bool IsCTAbdomen { get; set; }
		
		[RadioReportId("abd_m_020509")]
		public byte? MonthOfCT { get; set; }

		[RadioReportId("abd_m_020510")]
		public int? YearOfCT { get; set; }
		
		[RadioReportId("abd_m_020511")]
		public bool IsSonographyAbdomen { get; set; }
		
		[RadioReportId("abd_m_020513")]
		public byte? MonthOfSonography { get; set; }

		[RadioReportId("abd_m_020514")]
		public int? YearOfSonography { get; set; }

		[RadioReportId("abd_m_020515")]
		public bool IsPetCT { get; set; }
		
		[RadioReportId("abd_m_020517")]
		public byte? MonthOfPetCT { get; set; }

		[RadioReportId("abd_m_020518")]
		public int? YearOfPetCT { get; set; }
    }
}
