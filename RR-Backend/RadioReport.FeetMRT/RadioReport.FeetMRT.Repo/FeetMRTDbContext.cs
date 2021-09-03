using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.FeetMRT.Domain.Models;
using RadioReport.FeetMRT.Repo.Configurations;
using RadioReport.FeetMRT.Repo.Seeds;
using System;
using System.Threading.Tasks;

namespace RadioReport.FeetMRT.Repo
{
    public class FeetMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public FeetMRTDbContext(DbContextOptions<FeetMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));
            
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisIndicationConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFindingPreset>());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectConfiguration());
            modelBuilder.ApplyConfiguration(new SequenceConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new LigamentsAndTendonsPageConfiguration());
            modelBuilder.ApplyConfiguration(new LigamentsAndTendonsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFindingPreset>());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());
            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftTissueFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
