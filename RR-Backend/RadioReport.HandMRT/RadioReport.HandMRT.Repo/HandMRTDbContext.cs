using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.HandMRT.Domain.Models;
using RadioReport.HandMRT.Repo.Configurations;
using RadioReport.HandMRT.Repo.Seeds;
using System;
using System.Threading.Tasks;

namespace RadioReport.HandMRT.Repo
{
    public class HandMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public HandMRTDbContext(DbContextOptions<HandMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));
            
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AnamnesisIndication>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AnamnesisPreviousSurgeries>());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFindingPreset>());
            modelBuilder.ApplyConfiguration(new CapsuleAndRibbonsPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CapsuleAndRibbonsFinding>());
            modelBuilder.ApplyConfiguration(new TendinopathyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<TendinopathyFinding>());
            modelBuilder.ApplyConfiguration(new NerveCompressionPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<NerveCompressionFinding>());
            modelBuilder.ApplyConfiguration(new SoftTissuePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFindingPreset>());
            modelBuilder.ApplyConfiguration(new EvaluationPageConfiguration());
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
