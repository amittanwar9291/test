using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Repository.Configurations.ReportGenerator;
using RadioReport.Common.Repository;
using System;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Repository.DbContexts.ReportGenerator
{
    public class ReportGeneratorDbContext : DbContextBase
    {
        public DbSet<ReportSchema> ReportSchemas { get; set; }
        public ReportGeneratorDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }

            modelBuilder.ApplyConfiguration(new ReportSchemaConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSchemaSessionConfiguration());
            modelBuilder.ApplyConfiguration(new FindingLocalizerConfiguration());
        }

        protected void SeedLocalizers(List<FindingLocalizer> localizers)
        {
            Set<FindingLocalizer>().RemoveRange(Set<FindingLocalizer>());
            Set<FindingLocalizer>().AddRange(localizers);
        }
    }
}
