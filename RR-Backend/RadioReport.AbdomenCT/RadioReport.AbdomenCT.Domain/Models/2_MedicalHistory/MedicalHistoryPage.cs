using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenCT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenCT/MedicalHistory")]
    public class MedicalHistoryPage : PageModelBase<MedicalHistoryPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenCtMedicalHistory;
        
        public IEnumerable<MedicalHistoryClinic> Clinics     { get; set; }
        public IEnumerable<MedicalHistoryIndication> Indications { get; set; }
        
        [RadioReportId("abd_c_020503")]
        public bool IsMRIAbdomen { get; set; }
        
        [RadioReportId("abd_c_020505")]
        public byte? MonthOfMRI { get; set; }

        [RadioReportId("abd_c_020506")]
        public int? YearOfMRI { get; set; }
        
        [RadioReportId("abd_c_020507")]
        public bool IsCTAbdomen { get; set; }
        
        [RadioReportId("abd_c_020509")]
        public byte? MonthOfCT { get; set; }

        [RadioReportId("abd_c_020510")]
        public int? YearOfCT { get; set; }
        
        [RadioReportId("abd_c_020511")]
        public bool IsSonographyAbdomen { get; set; }
		
        [RadioReportId("abd_c_020513")]
        public byte? MonthOfSonography { get; set; }

        [RadioReportId("abd_c_020514")]
        public int? YearOfSonography { get; set; }
        
        [RadioReportId("abd_c_020515")]
        public bool IsPetCT { get; set; }
		
        [RadioReportId("abd_c_020517")]
        public byte? MonthOfPetCT { get; set; }

        [RadioReportId("abd_c_020518")]
        public int? YearOfPetCT { get; set; }
    }
}