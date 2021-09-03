using System;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Repository;
using RadioReport.Core.PatientManager.Domain.Models;

namespace RadioReport.Core.PatientManager.Repo
{
    public class PatientManagerDbContext : DbContextBase
    {
        public DbSet<PatientEncrypted> PatientsEncrypted { get; set; }

        public PatientManagerDbContext(DbContextOptions<PatientManagerDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.Entity<PatientEncrypted>().HasIndex(p => new { p.InstituteId, p.ExternalIdentifierHash }).IsUnique();
        }
    }
}
