using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Repository.Repositories
{
    public abstract class PresetRepositoryBase<TModel> : RepositoryBase<TModel>
        where TModel : ModelBase
    {
        protected PresetRepositoryBase(DbContext context) : base(context)
        { 
        }

        protected abstract Expression<Func<TModel, bool>> DdWhereExpr { get; }

        protected abstract Expression<Func<TModel, string>> DdSelectExpr { get; }

        public virtual async Task<IEnumerable<string>> GetAllAvailableDiagnosis()
        {
            return await DataContext.Set<TModel>().Where(DdWhereExpr).Select(DdSelectExpr).ToListAsync();
        }
    }
}
