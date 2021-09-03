using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;

namespace RadioReport.Core.PatientManager.Domain.Interfaces
{
    public interface IPatientHttpManager
    {
        Task<PatientDto> AddAsync(PatientDto dto);
        Task<List<PatientDto>> GetBySubStringOfFirstName(string subString);
        Task<List<PatientDto>> GetBySubStringOfLastName(string subString);
        Task<PatientDto> GetByIdAsync(Guid id);
        Task RemoveAsync(Guid id);
    }
}
