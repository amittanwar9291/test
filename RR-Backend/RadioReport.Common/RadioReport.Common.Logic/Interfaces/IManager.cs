using RadioReport.Common.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.Common.Logic.Interfaces
{
    public interface IManager<T> where T : ModelBase
    {
        Task<T> GetByIdAsync(Guid id, Expression<Func<T, bool>> predicate = null);
        Task<T> GetByIdAsync(Guid id, string[] includes, Expression<Func<T, bool>> predicate = null);
        Task<List<T>> GetByIdsAsync(List<Guid> ids, Expression<Func<T, bool>> predicate = null);
        Task<T> GetAsNoTrackingAsync(Guid id);
        Task<List<T>> GetAllAsync();
        IQueryable<T> GetManyQueryable(Expression<Func<T, bool>> predicate);
        Task<List<T>> GetManyAsync(Expression<Func<T, bool>> predicate);
        Task<T> GetFirstOrDefaultAsync(Expression<Func<T, bool>> predicate, string[] includes = null);
        Task<T> GetSingleAsync(Expression<Func<T, bool>> predicate, string[] includes = null);
        Task<T> GetSingleOrDefaultAsync(Expression<Func<T, bool>> predicate);
        Task<bool> AnyAsync(Guid id);
        Task<bool> AnyAsync(Expression<Func<T, bool>> predicate);
        Task<T> AddAsync(T model, bool keepId = false);
        Task AddRangeAsync(IEnumerable<T> models);
        Task<T> UpdateAsync(T model);
        Task UpdateByPropertiesAsync(T model, IEnumerable<string> properties);
        Task RemoveAsync(Guid id);
        Task RemoveAllAsync();
        Task<int> CountAsync(Expression<Func<T, bool>> predicate);
        Task<bool> IsAlive();
    }
}
