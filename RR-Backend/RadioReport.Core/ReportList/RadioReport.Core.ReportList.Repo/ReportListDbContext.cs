using System;
using Microsoft.EntityFrameworkCore;
using RadioReport.Core.ReportList.Repo.Configurations;
using RadioReport.Common.Repository;

namespace RadioReport.Core.ReportList.Repo
{
    public class ReportListDbContext : DbContextBase
    {
        public ReportListDbContext(DbContextOptions<ReportListDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            modelBuilder.ApplyConfiguration(new ReportEntryConfiguration());
        }
    }
}
