using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IRepository<T> where T : ModelBase
    {
        T Add(T model);
        Task AddRangeAsync(IEnumerable<T> models);
        Task UpdateByPropertiesAsync(T model, IEnumerable<string> properties);
        T Update(T model);
        Task<int> CountAsync(Expression<Func<T, bool>> predicate);
        void Delete(Guid id);
        void DeleteAll();
        T GetById(Guid id, Expression<Func<T, bool>> predicate = null);
        T GetById(Guid id, string[] includes, Expression<Func<T, bool>> predicate = null);
        Task<T> GetFirstOrDefaultAsync(Expression<Func<T, bool>> predicate, string[] includes = null);
        T GetFirstOrDefaultAsNoTracking(Expression<Func<T, bool>> predicate);
        Task<T> GetByIdAsync(Guid id, Expression<Func<T, bool>> predicate = null);
        Task<T> GetByIdAsync(Guid id, string[] includes, Expression<Func<T, bool>> predicate = null);
        Task<List<T>> GetByIdsAsync(List<Guid> ids, Expression<Func<T, bool>> predicate = null);
        Task<List<T>> GetByIdsAsync(List<Guid> ids, string[] includes, Expression<Func<T, bool>> predicate = null);
        Task<T> GetAsNoTrackingAsync(Guid id);
        Task<T> GetAsNoTrackingAsync(Guid id, string[] includes);
        Task<List<T>> GetAllAsync();
        IQueryable<T> GetManyQueryable(Expression<Func<T, bool>> predicate);
        Task<List<T>> GetManyAsync(Expression<Func<T, bool>> predicate);
        Task<T> GetSingleAsync(Expression<Func<T, bool>> predicate, string[] includes = null);
        Task<T> GetSingleOrDefaultAsync(Expression<Func<T, bool>> predicate, string[] includes = null);
        Task<bool> AnyAsync(Guid id);
        Task<bool> AnyAsync(Expression<Func<T, bool>> predicate);
        Task<int> SaveChangesAsync();
    }
}
