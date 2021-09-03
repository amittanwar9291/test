namespace RadioReport.Common.Logic.Models.ReportList
{
    public class FilterOptions
    {
        public PatientFilterOptions PatientOptions { get; set; }
        public ReportFilterOptions ReportOptions { get; set; }

        public FilterOptions()
        {
            PatientOptions = new PatientFilterOptions();
            ReportOptions = new ReportFilterOptions();
        }
    }
}
