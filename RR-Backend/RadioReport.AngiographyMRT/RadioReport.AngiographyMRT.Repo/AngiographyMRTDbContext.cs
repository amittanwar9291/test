using Microsoft.EntityFrameworkCore;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.AngiographyMRT.Repo.Configurations;
using RadioReport.AngiographyMRT.Repo.Seeds;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.AngiographyMRT.Repo
{
    public class AngiographyMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public AngiographyMRTDbContext(DbContextOptions<AngiographyMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));
            
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new AbdomenPageConfiguration());
            modelBuilder.ApplyConfiguration(new AbdomenFindingConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisFindingConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new AortaPageConfiguration());
            modelBuilder.ApplyConfiguration(new AortaFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new PelvisLegArteriesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new PelvisLegArteriesPageConfiguration());
            modelBuilder.ApplyConfiguration(new SupraaorticVesselsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SupraaorticVesselsPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new SequenceConfiguration());
            modelBuilder.ApplyConfiguration(new UpperArteriesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new UpperArteriesPageConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            await SaveChangesAsync();
        }
    }
}
