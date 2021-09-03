using System;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Repository;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.Repo.Configurations;
using RadioReport.InstituteManager.Repo.Configurations;

namespace RadioReport.Core.InstituteManager.Repo
{
    public class InstituteManagerDbContext : DbContextBase
    {
        public DbSet<Institute> Institutes { get; set; }
        public DbSet<Feature> Addresses { get; set; }
        public DbSet<Geometry> Geometries { get; set; }
        public DbSet<Properties> Properties { get; set; }

        public InstituteManagerDbContext(DbContextOptions<InstituteManagerDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }
            
            modelBuilder.ApplyConfiguration(new InstituteConfiguration());
            modelBuilder.ApplyConfiguration(new AddressConfiguration());
            modelBuilder.ApplyConfiguration(new GeometryConfiguration());
            modelBuilder.ApplyConfiguration(new PropertiesConfiguration());
        }
    }
}
