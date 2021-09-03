using System;

namespace RadioReport.Common.Helpers
{
    public static class PatientHelper
    {
        public static byte CalculateAge(DateTime birthDate, DateTime referenceDate)
        {
            var age = referenceDate.Year - birthDate.Year;
            if (birthDate.Date > referenceDate.AddYears(-age))
            {
                age--;
            }

            return (byte) age;
        }
    }
}
