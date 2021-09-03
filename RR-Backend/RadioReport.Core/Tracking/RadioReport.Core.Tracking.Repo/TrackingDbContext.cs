using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Repository;
using RadioReport.Core.Tracking.Domain.Models;
using RadioReport.Core.Tracking.Domain.Models.Statistics;

namespace RadioReport.Core.Tracking.Repo
{
    public class TrackingDbContext : DbContextBase
    {
        public DbSet<TrackingEntity> Trackings { get; set; }
        
        public virtual DbSet<ReportStatistic> ReportStatistics { get; set; }
        public virtual DbSet<AverageTimeStatistic> AverageTimeStatistics { get; set; }
        public virtual DbSet<ReportPerRadiologistStatistic> ReportPerRadiologistStatistics { get; set; }

        public TrackingDbContext(DbContextOptions<TrackingDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            // hack to disable creating table on migrations
            modelBuilder.Entity<ReportStatistic>().HasNoKey().ToView(null);
            modelBuilder.Entity<AverageTimeStatistic>().HasNoKey().ToView(null);
            modelBuilder.Entity<ReportPerRadiologistStatistic>().HasNoKey().ToView(null);
        }
    }
}