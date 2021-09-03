using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.Interfaces;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Domain.Managers
{
    public class PatientHttpManager : IPatientHttpManager
    {
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IPatientEncryptedManager _patientEncryptedManager;
        private readonly IEntityEncryptionService<Patient, PatientEncrypted> _encryptionService;

        public PatientHttpManager(
            HttpAuthContext httpAuthContext,
            IPatientEncryptedManager patientEncryptedManager,
            IEntityEncryptionService<Patient,
                PatientEncrypted> encryptionService)
        {
            _httpAuthContext = httpAuthContext;
            _patientEncryptedManager = patientEncryptedManager;
            _encryptionService = encryptionService;
        }

        public async Task<PatientDto> AddAsync(PatientDto dto)
        {
            if (dto == null) throw new ArgumentNullException(nameof(dto));

            var patient = dto.MapToPatient(_httpAuthContext);
            var patientEncrypted = await _encryptionService.EncryptAsync(patient);
            await _patientEncryptedManager.AddAsync(patientEncrypted);

            return patient.MapToDto();
        }

        public async Task<PatientDto> GetByIdAsync(Guid id)
        {
            var patientEncrypted = await _patientEncryptedManager.GetByIdAsync(id);
            if (patientEncrypted == null) throw new PatientNotFoundException(id);

            var patient = await _encryptionService.DecryptAsync(patientEncrypted);

            return patient.MapToDto();
        }

        public async Task<List<PatientDto>> GetBySubStringOfFirstName(string subString)
        {
            if (subString.IsNullOrEmpty()) throw new ArgumentException("Empty search string");

            var patientsEncrypted = await _patientEncryptedManager.GetByFirstNameInitial(subString.First(), p => p.InstituteId == _httpAuthContext.InstituteId);
            if (!patientsEncrypted.Any()) return new List<PatientDto>();

            var patientsDecrypted = await _encryptionService.DecryptRangeAsync(patientsEncrypted);

            return patientsDecrypted
                .Where(p => p.FirstName.Contains(subString, StringComparison.InvariantCultureIgnoreCase))
                .Select(p => p.MapToDto())
                .ToList();
        }

        public async Task<List<PatientDto>> GetBySubStringOfLastName(string subString)
        {
            if (subString.IsNullOrEmpty()) throw new ArgumentException("Empty search string");

            var patientsEncrypted = await _patientEncryptedManager.GetByLastNameInitial(subString.First(), p => p.InstituteId == _httpAuthContext.InstituteId);
            if (!patientsEncrypted.Any()) return new List<PatientDto>();

            var patientsDecrypted = await _encryptionService.DecryptRangeAsync(patientsEncrypted);
            return patientsDecrypted
                .Where(p => p.LastName.Contains(subString, StringComparison.InvariantCultureIgnoreCase))
                .Select(p => p.MapToDto())
                .ToList();
        }

        public Task RemoveAsync(Guid id) => _patientEncryptedManager.RemoveAsync(id);
    }
}
