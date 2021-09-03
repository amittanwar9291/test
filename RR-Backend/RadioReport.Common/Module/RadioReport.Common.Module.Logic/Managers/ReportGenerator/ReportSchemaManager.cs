using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public class ReportSchemaManager : Manager<ReportSchema, IReportSchemaRepository>, IReportSchemaManager
    {
        private readonly IReportSchemaSessionManager _sessionManager;


        public ReportSchemaManager(IReportSchemaRepository repository, IReportSchemaSessionManager sessionManager)
            : base(repository)
        {
            _sessionManager = sessionManager;
        }

        public override async Task<ReportSchema> GetByIdAsync(Guid id, Expression<Func<ReportSchema, bool>> predicate = null)
        {
            var reportSchema = await Repository.GetByIdAsync(id);
            
            if (reportSchema != null)
            {
                // cannot use standard db include here because during get operation 
                // session manager performs additional operations
                reportSchema.Session = await _sessionManager.GetByReportId(reportSchema.Id);
            }
  
            return reportSchema;
        }

        public override async Task<ReportSchema> GetAsNoTrackingAsync(Guid id)
        {
            var reportSchema = await Repository.GetAsNoTrackingAsync(id);

            // cannot use standard db include here because during get operation 
            // session manager performs additional operations
            reportSchema.Session = await _sessionManager.GetByReportId(reportSchema.Id);

            return reportSchema;
        }

        public async Task<IEnumerable<ReportSchema>> GetSelected(IEnumerable<Guid> ids) =>
            await Repository.GetSelected(ids);

        public override async Task<ReportSchema> AddAsync(ReportSchema reportSchema, bool keepId = false)
        {
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }

            var session = reportSchema.Session;

            // session must be added separately because during add operation 
            // session manager performs additional operations
            reportSchema.Session = null;

            var addedReportSchema = await base.AddAsync(reportSchema);
            if (session != null)
            {
                session.ReportSchemaId = addedReportSchema.Id;
                addedReportSchema.Session = await _sessionManager.AddAsync(session);
            }

            return addedReportSchema;
        }

        public override async Task<ReportSchema> UpdateAsync(ReportSchema reportSchema)
        {
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }
            
            // only user with valid session can save changes in report schema
            if (!await CheckIfSessionIsValidAsync(reportSchema))
            {
                throw new ReportSchemaInvalidSessionException();
            }

            await _sessionManager.UpdateAsync(reportSchema.Session);
            return await base.UpdateAsync(reportSchema);
        }

        public override async Task RemoveAsync(Guid id)
        {
            if (await CheckIfReportCanBeDeletedAsync(id))
            {
                await Repository.Delete(id);
                await Repository.SaveChangesAsync();
            }
            else
            {
                throw new ReportSchemaDeletionNotPermittedException();
            }
        }

        public IList<Language> GetLanguages()
        {
            return new List<Language>()
            {
                new Language()
                {
                    Name = "English",
                    Code = "en-GB"
                },
                new Language()
                {
                    Name = "German",
                    Code = "de-DE"
                },
                new Language()
                {
                    Name = "French",
                    Code = "fr-FR"
                }
            };
        }

        private async Task<bool> CheckIfReportCanBeDeletedAsync(Guid id)
        {
            // report can be deleted if is not default or if is default and there are no other reports
            var report = await Repository.GetByIdAsync(id);
            if (report != null && report.IsDefault)
            {
                var otherReports = await Repository.GetManyAsync(r => r.ReportTypeName == report.ReportTypeName
                                                                      && r.Id != report.Id);
                return !otherReports.Any();
            }
            return true;
        }

        private async Task<bool> CheckIfSessionIsValidAsync(ReportSchema reportSchema)
        {
            var activeSession = await _sessionManager.GetByReportId(reportSchema.Id);
            return activeSession != null && reportSchema.Session?.Id == activeSession.Id;
        }
    }
}
