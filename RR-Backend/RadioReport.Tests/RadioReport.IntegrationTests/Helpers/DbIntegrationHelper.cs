using System;
using Microsoft.EntityFrameworkCore;

namespace RadioReport.IntegrationTests.Helpers
{
    public static class DbIntegrationHelper
    {
        public static T CreateDbContext<T>(string connectionString) where T : DbContext
        {
            var optionsBuilder = new DbContextOptionsBuilder<T>();
            optionsBuilder.UseSqlServer(connectionString);

            return Activator.CreateInstance(typeof(T), optionsBuilder.Options) as T;
        }
    }
}
