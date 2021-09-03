using System.Reflection;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Repository;

namespace RadioReport.Core.ImportInterface.Repo
{
    public class ImportInterfaceDbContext : DbContextBase
    {
        public DbSet<CVI42Imports> CVI42Imports { get; set; }

        public ImportInterfaceDbContext(DbContextOptions<ImportInterfaceDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.Entity<CVI42Imports>().HasIndex(i => new { i.InstituteId, i.StudyInstanceUid }).IsUnique();
        }
    }
}