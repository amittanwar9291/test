using System.Collections.Generic;

namespace RadioReport.Core.ExportInterface.Domain.Consts
{
    public class HtmlTemplatePlaceholder
    {
        public static string InstituteName = $"%%{nameof(InstituteName)}%%";
        public static string InstituteAddressStreet = $"%%{nameof(InstituteAddressStreet)}%%";
        public static string InstituteAddressCity = $"%%{nameof(InstituteAddressCity)}%%";
        public static string InstituteAddressCountryCode = $"%%{nameof(InstituteAddressCountryCode)}%%";
        public static string InstituteAddressCountry = $"%%{nameof(InstituteAddressCountry)}%%";
        public static string InstituteAddressPostCode = $"%%{nameof(InstituteAddressPostCode)}%%";
        public static string InstituteAddressHouseNumber = $"%%{nameof(InstituteAddressHouseNumber)}%%";
        public static string InstituteAddressState = $"%%{nameof(InstituteAddressState)}%%";
        public static string InstituteLogo = $"%%{nameof(InstituteLogo)}%%";
        
        public static string PatientFirstName = $"%%{nameof(PatientFirstName)}%%";
        public static string PatientLastName = $"%%{nameof(PatientLastName)}%%";
        public static string PatientBirthday = $"%%{nameof(PatientBirthday)}%%";
        public static string PatientGender = $"%%{nameof(PatientGender)}%%";
        
        public static string DoctorFirstName = $"%%{nameof(DoctorFirstName)}%%";
        public static string DoctorLastName = $"%%{nameof(DoctorLastName)}%%";
        public static string DoctorTitle = $"%%{nameof(DoctorTitle)}%%";
        public static string DoctorDisciplin = $"%%{nameof(DoctorDisciplin)}%%";
        public static string DoctorSignature = $"%%{nameof(DoctorSignature)}%%";
        
        public static string CurrentDate = $"%%{nameof(CurrentDate)}%%";
        public static string ReportDate = $"%%{nameof(ReportDate)}%%";

        public static string ReportText = $"%%{nameof(ReportText)}%%";
        public static string PageNumber = $"%%{nameof(PageNumber)}%%";
        public static string TotalPages = $"%%{nameof(TotalPages)}%%";
    }
}


