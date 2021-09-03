using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Domain.Interfaces
{
    public interface IPatientEncryptedManager : IManager<PatientEncrypted>
    {
        PatientEncrypted GetByExternalIdentifierHash(string externalIdentifierHash);
        Task<List<PatientEncrypted>> GetByFirstNameInitial(char initial, Expression<Func<PatientEncrypted, bool>> predicate);
        Task<List<PatientEncrypted>> GetByLastNameInitial(char initial, Expression<Func<PatientEncrypted, bool>> predicate);
        Task<List<PatientEncrypted>> GetByFilterOptions(PatientEncryptedFilterOptions options);
    }
}
