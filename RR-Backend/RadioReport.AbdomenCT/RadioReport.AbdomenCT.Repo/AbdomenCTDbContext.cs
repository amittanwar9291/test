using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.AbdomenCT.Repo.Configurations;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;

namespace RadioReport.AbdomenCT.Repo
{
    public class AbdomenCTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public AbdomenCTDbContext(DbContextOptions<AbdomenCTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new AreaOfInvestigationPageConfiguration());
            modelBuilder.ApplyConfiguration(new MedicalHistoryPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectConfiguration());
            modelBuilder.ApplyConfiguration(new AcquisitionConfiguration());
            modelBuilder.ApplyConfiguration(new ReconstructionConfiguration());
            modelBuilder.ApplyConfiguration(new SpleenPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SpleenFinding>());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            await SaveChangesAsync();
        }
    }
}