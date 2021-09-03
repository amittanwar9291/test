using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.Interfaces;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Domain.Managers
{
    public class PatientEncryptedManager : Manager<PatientEncrypted, IPatientEncryptedRepository>, IPatientEncryptedManager
    {
        private readonly HttpAuthContext _httpAuthContext;

        public PatientEncryptedManager(IPatientEncryptedRepository repository, HttpAuthContext httpAuthContext) : base(repository)
        {
            _httpAuthContext = httpAuthContext;
        }

        public override Task<PatientEncrypted> AddAsync(PatientEncrypted model, bool keepId = false)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            if (model.Id.IsEmpty()) throw new ArgumentException("Patient encrypted should have guid preset");

            return base.AddAsync(model, true);
        }

        public PatientEncrypted GetByExternalIdentifierHash(string externalIdentifierHash) =>
            Repository.GetByExternalIdentifierHash(_httpAuthContext.InstituteId, externalIdentifierHash);

        public async Task<List<PatientEncrypted>> GetByFirstNameInitial(char initial, Expression<Func<PatientEncrypted, bool>> predicate) =>
            await Repository.GetByFirstNameInitial(initial, predicate);

        public async Task<List<PatientEncrypted>> GetByLastNameInitial(char initial, Expression<Func<PatientEncrypted, bool>> predicate) =>
            await Repository.GetByLastNameInitial(initial, predicate);

        public async Task<List<PatientEncrypted>> GetByFilterOptions(PatientEncryptedFilterOptions options) => await Repository.GetByFilterOptions(options);
    }
}
