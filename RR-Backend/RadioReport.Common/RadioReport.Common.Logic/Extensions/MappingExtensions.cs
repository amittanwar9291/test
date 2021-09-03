using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Extensions
{
    public static class MappingExtensions
    {
        public static PatientDto MapToDto(this Patient patient) => new PatientDto(patient);

        public static Patient MapToPatient(this PatientDto dto, HttpAuthContext httpAuthContext) => Patient.Create(httpAuthContext, dto);
    }
}
