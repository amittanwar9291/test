using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Models;
using RadioReport.Common.Repository;
using RadioReport.Core.PatientManager.Domain.Interfaces;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Repo.Repositories
{
    public class PatientEncryptedRepository : RepositoryBase<PatientEncrypted>, IPatientEncryptedRepository
    {
        private readonly HttpAuthContext _httpAuthContext;

        public PatientEncryptedRepository(PatientManagerDbContext dbContext, HttpAuthContext httpAuthContext) : base(dbContext)
        {
            _httpAuthContext = httpAuthContext;
        }

        public PatientEncrypted GetByExternalIdentifierHash(Guid instituteId, string externalIdentifierHash) =>
            DataContext.Set<PatientEncrypted>().SingleOrDefault(p => p.InstituteId == instituteId && p.ExternalIdentifierHash == externalIdentifierHash);

        public async Task<List<PatientEncrypted>> GetByFirstNameInitial(char initial, Expression<Func<PatientEncrypted, bool>> predicate) =>
            await DataContext.Set<PatientEncrypted>()
                .Where(predicate)
                .Where(p => p.FirstNameInitial == initial.ToString())
                .ToListAsync();

        public async Task<List<PatientEncrypted>> GetByLastNameInitial(char initial, Expression<Func<PatientEncrypted, bool>> predicate) =>
            await DataContext.Set<PatientEncrypted>()
                .Where(predicate)
                .Where(p => p.LastNameInitial == initial.ToString())
                .ToListAsync();

        [SuppressMessage("ReSharper", "SpecifyStringComparison")]
        [SuppressMessage("ReSharper", "CA1304")]
        public async Task<List<PatientEncrypted>> GetByFilterOptions(PatientEncryptedFilterOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            return await DataContext.Set<PatientEncrypted>()
                .Where(patient =>
                    patient.InstituteId == _httpAuthContext.InstituteId &&
                    (string.IsNullOrEmpty(options.BirthDateHash) || options.BirthDateHash.ToUpper() == patient.BirthDateHash.ToUpper()) &&
                    (string.IsNullOrEmpty(options.FirstNameInitial) || options.FirstNameInitial.ToUpper() == patient.FirstNameInitial.ToUpper()) &&
                    (string.IsNullOrEmpty(options.FirstNameInitial) || options.FirstNameInitial.ToUpper() == patient.FirstNameInitial.ToUpper()))
                .ToListAsync();
        }
    }
}
