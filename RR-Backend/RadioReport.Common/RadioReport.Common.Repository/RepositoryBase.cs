using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Extensions;

namespace RadioReport.Common.Repository
{
    public abstract class RepositoryBase<T> : IRepository<T> where T : ModelBase
    {
        protected DbContext DataContext { get; }

        protected RepositoryBase(DbContext dbContext)
        {
            DataContext = dbContext;
        }

        public virtual T Add(T model)
        {
            var result = DataContext.Set<T>().Add(model);

            return result.Entity;
        }

        public virtual Task AddRangeAsync(IEnumerable<T> models) => DataContext.Set<T>().AddRangeAsync(models);

        public virtual async Task UpdateByPropertiesAsync(T model, IEnumerable<string> properties)
        {
            if (properties.IsNullOrEmpty()) return;

            DataContext.Set<T>().Attach(model);
            var entity = DataContext.Entry(model);
            foreach (var property in properties)
            {
                entity.Property(property).IsModified = true;
            }
            await SaveChangesAsync();
            entity.State = EntityState.Detached;
        }

        public virtual T Update(T model)
        {
            if (model == null)
            {
                return null;
            }

            DataContext.Attach(model);
            var result = DataContext.Set<T>().Update(model);
            UpdateCollections(model);

            return result.Entity;
        }

        public virtual async Task<int> CountAsync(Expression<Func<T, bool>> predicate) => await DataContext.Set<T>().CountAsync(predicate);

        public virtual void Delete(Guid id)
        {
            var toRemove = GetById(id);
            if (toRemove != null)
            {
                DataContext.Remove(toRemove);
            }
        }

        public virtual async void DeleteAll()
        {
            var toRemove = await GetAllAsync();
            if (!toRemove.IsNullOrEmpty())
            {
                DataContext.RemoveRange(toRemove);
            }
        }

        public virtual T GetById(Guid id, Expression<Func<T, bool>> predicate = null) => GetById(id, null, predicate);

        public virtual T GetById(Guid id, string[] includes, Expression<Func<T, bool>> predicate = null)
        {
            var query = DataContext.Set<T>().AsQueryable();
            if (includes == null || includes.Length <= 0)
            {
                return predicate == null
                    ? query.FirstOrDefault(m => m.Id == id)
                    : query.Where(predicate).FirstOrDefault(m => m.Id == id);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return predicate == null
                ? query.FirstOrDefault(m => m.Id == id)
                : query.Where(predicate).FirstOrDefault(m => m.Id == id);
        }

        public virtual Task<List<T>> GetByIdsAsync(List<Guid> ids, Expression<Func<T, bool>> predicate = null) => GetByIdsAsync(ids, null, predicate);

        public virtual Task<List<T>> GetByIdsAsync(List<Guid> ids, string[] includes, Expression<Func<T, bool>> predicate = null)
        {
            var query = DataContext.Set<T>().AsQueryable();
            if (includes == null || includes.Length <= 0)
            {
                return predicate == null
                    ? query.Where(m => ids.Contains(m.Id)).ToListAsync()
                    : query.Where(predicate).Where(m => ids.Contains(m.Id)).ToListAsync();
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return predicate == null
                ? query.Where(m => ids.Contains(m.Id)).ToListAsync()
                : query.Where(predicate).Where(m => ids.Contains(m.Id)).ToListAsync();
        }

        public async Task<T> GetFirstOrDefaultAsync(Expression<Func<T, bool>> predicate, string[] includes = null)
        {
            var query = DataContext.Set<T>().AsQueryable();

            if (includes == null || includes.Length <= 0)
            {
                return await query.FirstOrDefaultAsync(predicate);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return await query.FirstOrDefaultAsync(predicate);
        }

        public virtual T GetFirstOrDefaultAsNoTracking(Expression<Func<T, bool>> predicate) =>
            DataContext.Set<T>().AsNoTracking().Where(predicate).FirstOrDefault();

        public virtual async Task<T> GetByIdAsync(Guid id, Expression<Func<T, bool>> predicate = null) => await GetByIdAsync(id, null, predicate);

        public virtual async Task<T> GetByIdAsync(Guid id, string[] includes, Expression<Func<T, bool>> predicate = null)
        {
            var query = DataContext.Set<T>().AsQueryable();
            if (includes == null || includes.Length <= 0)
            {
                return predicate == null
                    ? await query.FirstOrDefaultAsync(m => m.Id == id)
                    : await query.Where(predicate).FirstOrDefaultAsync(m => m.Id == id);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return predicate == null
                ? await query.FirstOrDefaultAsync(m => m.Id == id)
                : await query.Where(predicate).FirstOrDefaultAsync(m => m.Id == id);
        }

        public virtual IQueryable<T> GetManyQueryable(Expression<Func<T, bool>> predicate) => DataContext.Set<T>().Where(predicate);

        public virtual async Task<List<T>> GetManyAsync(Expression<Func<T, bool>> predicate) => await DataContext.Set<T>().Where(predicate).ToListAsync();

        public virtual async Task<T> GetSingleAsync(Expression<Func<T, bool>> predicate, string[] includes = null)
        {
            var query = DataContext.Set<T>().AsQueryable();

            if (includes == null || includes.Length <= 0)
            {
                return await query.SingleAsync(predicate);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return await query.SingleAsync(predicate);
        }

        public async Task<T> GetSingleOrDefaultAsync(Expression<Func<T, bool>> predicate, string[] includes = null)
        {
            var query = DataContext.Set<T>().AsQueryable();

            if (includes == null || includes.Length <= 0)
            {
                return await query.SingleOrDefaultAsync(predicate);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return await query.SingleOrDefaultAsync(predicate);
        }

        public virtual async Task<bool> AnyAsync(Guid id) => await DataContext.Set<T>().AnyAsync(m => m.Id == id);

        public async Task<bool> AnyAsync(Expression<Func<T, bool>> predicate) => await DataContext.Set<T>().AnyAsync(predicate);

        public virtual async Task<T> GetAsNoTrackingAsync(Guid id) => await GetAsNoTrackingAsync(id, null);

        public virtual async Task<T> GetAsNoTrackingAsync(Guid id, string[] includes)
        {
            var query = DataContext.Set<T>().AsNoTracking().AsQueryable();

            if (includes == null || includes.Length <= 0)
            {
                return await query.FirstOrDefaultAsync(m => m.Id == id);
            }

            query = includes.Aggregate(query, (current, item) => current.Include(item));

            return await query.FirstOrDefaultAsync(m => m.Id == id);
        }

        public virtual async Task<T> GetFirstOrDefaultAsNoTrackingAsync(Expression<Func<T, bool>> predicate) =>
            await DataContext.Set<T>().AsNoTracking().Where(predicate).FirstOrDefaultAsync();

        public virtual async Task<List<T>> GetAllAsync() => await DataContext.Set<T>().ToListAsync();

        public virtual async Task<int> SaveChangesAsync() => await DataContext.SaveChangesAsync();

        protected virtual void UpdateCollections(T model)
        {
        }

        protected virtual void UpdateCollection<TDeletable>(IEnumerable<TDeletable> collection)
            where TDeletable : ModelBase, IDeletableItem
        {
            foreach (var item in collection?.Where(i => i != null) ?? Enumerable.Empty<TDeletable>())
            {
                if (DataContext.Entry(item).State == EntityState.Added)
                {
                    if (item.IsDeleted)
                    {
                        DataContext.Entry(item).State = EntityState.Detached;
                    }
                    continue;
                }
                if (item.IsDeleted)
                {
                    if (DataContext.Set<TDeletable>().Any(f => f.Id == item.Id))
                    {
                        DataContext.Set<TDeletable>().Remove(item);
                    }
                }
                else
                {
                    DataContext.Set<TDeletable>().Update(item);
                }
            }
        }

        protected virtual void SetUpdateForModelProperty<TModel, TProperty>(TModel model, Expression<Func<TModel, TProperty>> propertyExpression)
            where TModel : ModelBase
            where TProperty : ModelBase
        {
            if (propertyExpression == null) throw new ArgumentNullException(nameof(propertyExpression));

            var propertyValue = propertyExpression.Compile()(model);

            if (propertyValue != null && DataContext.Entry(propertyValue).State != EntityState.Added)
            {
                DataContext.Set<TProperty>().Update(propertyValue);
            }
            else if (propertyValue == null)
            {
                DataContext.Entry(model).Reference(propertyExpression).IsModified = true;
            }
        }

        protected virtual void SetDeleteForModelProperty<TModel, TProperty>(TModel model, Expression<Func<TModel, TProperty>> propertyExpression)
            where TModel : ModelBase
            where TProperty : ModelBase
        {
            if (propertyExpression == null) throw new ArgumentNullException(nameof(propertyExpression));

            var propertyValue = propertyExpression.Compile()(model);
            if (propertyValue != null && DataContext.Entry(propertyValue).State != EntityState.Added)
            {
                DataContext.Set<TProperty>().Remove(propertyValue);
            }
        }
    }
}
