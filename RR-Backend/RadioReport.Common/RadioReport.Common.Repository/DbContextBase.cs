using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.Common.Repository
{
    public abstract class DbContextBase : DbContext
    {
        protected DbContextBase(DbContextOptions options) : base(options)
        {
        }

        public void MigrateAndSeed(IServiceProvider serviceProvider)
        {
            Database.Migrate();
            Seed(serviceProvider).Wait();
        }

        protected virtual Task Seed(IServiceProvider serviceProvider) => Task.CompletedTask;

        protected void UpdatePresets<T>(IEnumerable<T> presets) where T : class, IEquatable<T>
        {
            var newFindingPresets = presets
                .Where(p => !Set<T>().ToList().Any(t => t.Equals(p)));

            if (newFindingPresets.Any())
            {
                Set<T>().AddRange(newFindingPresets);
            }

            var deletedFindingPresets = Set<T>().ToList()
                .Where(p => !presets.Any(t => t.Equals(p)));

            if (deletedFindingPresets.Any())
            {
                Set<T>().RemoveRange(deletedFindingPresets);
            }
        }
    }
}
