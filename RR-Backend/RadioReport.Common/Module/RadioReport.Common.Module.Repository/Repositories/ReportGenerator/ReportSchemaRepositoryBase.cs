using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Exceptions;
using Npgsql;

namespace RadioReport.Common.Module.Repository.Repositories.ReportGenerator
{
    public class ReportSchemaRepositoryBase : RepositoryBase<ReportSchema>, IReportSchemaRepository
    {
        public ReportSchemaRepositoryBase(DbContext dbContext) : base(dbContext)
        {
        }

        public override async Task<List<ReportSchema>> GetAllAsync() =>
            await DataContext.Set<ReportSchema>().Select(r => new ReportSchema
                {
                    Id = r.Id,
                    ReportTypeName = r.ReportTypeName,
                    IsDefault = r.IsDefault,
                    VersionName = r.VersionName,
                    BuildVersion = r.BuildVersion,
                    Session = r.Session
                })
                .ToListAsync()
                ;

        public override async Task<ReportSchema> GetByIdAsync(Guid id, Expression<Func<ReportSchema, bool>> predicate = null) =>
            await DataContext.Set<ReportSchema>().FirstOrDefaultAsync(r => r.Id == id);

        public async Task<ReportSchema> GetByReportTypeNameAsync(string reportTypeName) =>
            await DataContext.Set<ReportSchema>().FirstOrDefaultAsync(r => r.ReportTypeName == reportTypeName && r.IsDefault);

        public async Task<IEnumerable<ReportSchema>> GetSelected(IEnumerable<Guid> ids) =>
            await DataContext.Set<ReportSchema>().Where(r => ids.Contains(r.Id)).ToListAsync();

        public override ReportSchema Add(ReportSchema model)
        {
            if (model is null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            var defaultModel = GetFirstOrDefaultAsNoTracking(m => m.ReportTypeName == model.ReportTypeName
                                                                  && m.IsDefault);
            if (defaultModel != null && model.IsDefault)
            {
                defaultModel.IsDefault = false;
                base.Update(defaultModel);
            }
            else if (defaultModel == null)
            {
                // if only one model exists it is always default
                model.IsDefault = true;
            }

            model.BuildVersion = 0;

            return base.Add(model);
        }

        public override ReportSchema Update(ReportSchema model)
        {
            if (model is null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            if (model.IsDefault)
            {
                var otherDefaultModel = GetFirstOrDefaultAsNoTracking(m => m.ReportTypeName == model.ReportTypeName
                                                                           && m.IsDefault
                                                                           && m.Id != model.Id);
                if (otherDefaultModel != null)
                {
                    otherDefaultModel.IsDefault = false;
                    base.Update(otherDefaultModel);
                }
            }

            var currentModel = GetFirstOrDefaultAsNoTracking(m => m.Id == model.Id);
            model.BuildVersion = currentModel.BuildVersion + 1;

            return base.Update(model);
        }

        public new async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id);
            if (toRemove != null)
            {
                DataContext.Remove(toRemove);
            }
        }

        public override async Task<int> SaveChangesAsync()
        {
            try
            {
                return await base.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                var sqlException = e.InnerException as PostgresException;
                if (sqlException?.SqlState == "23505")
                {
                    throw new DuplicatedReportSchemaException(sqlException.Message, e);
                }

                throw;
            }
        }
    }
}
