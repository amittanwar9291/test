using System;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Repository;
using RadioReport.Core.LicenseManager.Domain.Models;

namespace RadioReport.Core.LicenseManager.Repo
{
    public class LicenseManagerDbContext : DbContextBase
    {
        public DbSet<LicenseFraction> LicenseFractions { get; set; }
        public DbSet<CurrentCreditScore> CurrentCreditScores { get; set; }

        public LicenseManagerDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
