using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.AbdomenMRT.Repo.Configurations;
using RadioReport.AbdomenMRT.Repo.Seeds;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;

namespace RadioReport.AbdomenMRT.Repo
{
    public class AbdomenMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public AbdomenMRTDbContext(DbContextOptions<AbdomenMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ExaminationRegionPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new LiverPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<LiverFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<LiverFindingPreset>());
            modelBuilder.ApplyConfiguration(new SpleenPageConfiguration());
            modelBuilder.ApplyConfiguration(new SpleenFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SpleenFindingPreset>());
            modelBuilder.ApplyConfiguration(new PancreasPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PancreasFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PancreasFindingPreset>());
            modelBuilder.ApplyConfiguration(new KidneysPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<KidneysFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<KidneysFindingPreset>());
            modelBuilder.ApplyConfiguration(new AdrenalGlandsPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AdrenalGlandsFinding>());
            modelBuilder.ApplyConfiguration(new GastrointestinalTractPageConfiguration());
            modelBuilder.ApplyConfiguration(new GastrointestinalTractFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<GastrointestinalTractFindingPreset>());
            modelBuilder.ApplyConfiguration(new PeritonealCavityPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PeritonealCavityFinding>());
            modelBuilder.ApplyConfiguration(new LymphaticSystemPageConfiguration());
            modelBuilder.ApplyConfiguration(new LymphaticSystemFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<LymphNodeStationsFinding>());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(SpleenFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(LiverFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(KidneysFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(GastrointestinalTractFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(PancreasFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}