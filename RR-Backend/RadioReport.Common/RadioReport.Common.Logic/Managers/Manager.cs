using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Logic.Managers
{
    public class Manager<TModel, TRepository> : IManager<TModel>
        where TModel : ModelBase
        where TRepository : IRepository<TModel>
    {
        protected TRepository Repository { get; }

        public Manager(TRepository repository)
        {
            Repository = repository;
        }

        public virtual async Task<TModel> GetByIdAsync(Guid id, Expression<Func<TModel, bool>> predicate = null) =>
            await Repository.GetByIdAsync(id, predicate);

        public virtual async Task<TModel> GetByIdAsync(Guid id, string[] includes, Expression<Func<TModel, bool>> predicate = null) =>
            await Repository.GetByIdAsync(id, includes, predicate);

        public virtual async Task<List<TModel>> GetByIdsAsync(List<Guid> ids, Expression<Func<TModel, bool>> predicate = null) =>
            await Repository.GetByIdsAsync(ids, predicate);

        public virtual async Task<TModel> GetAsNoTrackingAsync(Guid id) => await Repository.GetAsNoTrackingAsync(id);

        public virtual async Task<TModel> GetAsNoTrackingAsync(Guid id, string[] includes) => await Repository.GetAsNoTrackingAsync(id, includes);

        public virtual async Task<List<TModel>> GetAllAsync() => await Repository.GetAllAsync();

        public virtual IQueryable<TModel> GetManyQueryable(Expression<Func<TModel, bool>> predicate) => Repository.GetManyQueryable(predicate);

        public virtual async Task<List<TModel>> GetManyAsync(Expression<Func<TModel, bool>> predicate) => await Repository.GetManyAsync(predicate);

        public virtual async Task<TModel> GetFirstOrDefaultAsync(Expression<Func<TModel, bool>> predicate, string[] includes = null) =>
            await Repository.GetFirstOrDefaultAsync(predicate, includes);

        public virtual async Task<TModel> GetSingleAsync(Expression<Func<TModel, bool>> predicate, string[] includes) =>
            await Repository.GetSingleAsync(predicate, includes);

        public async Task<TModel> GetSingleOrDefaultAsync(Expression<Func<TModel, bool>> predicate) => await Repository.GetSingleOrDefaultAsync(predicate);

        public virtual async Task<bool> AnyAsync(Guid id) => await Repository.AnyAsync(id);

        public async Task<bool> AnyAsync(Expression<Func<TModel, bool>> predicate) => await Repository.AnyAsync(predicate);

        public virtual async Task<int> CountAsync(Expression<Func<TModel, bool>> predicate) => await Repository.CountAsync(predicate);

        public virtual async Task<TModel> AddAsync(TModel model, bool keepId = false)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            model.Id = keepId && !model.Id.IsEmpty() ? model.Id : Guid.Empty;
            var result = Repository.Add(model);
            await Repository.SaveChangesAsync();

            return result;
        }

        public virtual async Task AddRangeAsync(IEnumerable<TModel> models)
        {
            await Repository.AddRangeAsync(models);
            await Repository.SaveChangesAsync();
        }

        public virtual async Task<TModel> UpdateAsync(TModel model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            if (model.Id == Guid.Empty)
            {
                throw new NotFoundException("Model with Id = 0 cannot be found and updated.");
            }

            var result = Repository.Update(model);
            await Repository.SaveChangesAsync();

            return result;
        }

        public Task UpdateByPropertiesAsync(TModel model, IEnumerable<string> properties) => Repository.UpdateByPropertiesAsync(model, properties);

        public virtual async Task RemoveAsync(Guid id)
        {
            Repository.Delete(id);
            await Repository.SaveChangesAsync();
        }

        public async Task RemoveAllAsync()
        {
            Repository.DeleteAll();
            await Repository.SaveChangesAsync();
        }

        public virtual async Task<IEnumerable<RadioReportValue>> GetValuesForReport(Guid id)
        {
            var result = new List<RadioReportValue>();
            var model = await GetByIdAsync(id);
            if (model != null)
            {
                result.AddRange(RadioReportIdAttributeReader.GetValuesFromAllProperties(model));
            }

            return result;
        }

        public virtual async Task<bool> IsAlive()
        {
            var result = true;
            try
            {
                await Repository.GetByIdAsync(Guid.NewGuid());
            }
            catch
            {
                result = false;
            }

            return result;
        }
    }
}
