using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.SpineCT.Domain.Models;
using RadioReport.SpineCT.Repo.Configurations;
using RadioReport.SpineCT.Repo.Seeds;

namespace RadioReport.SpineCT.Repo
{
    public class SpineCTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public SpineCTDbContext(DbContextOptions<SpineCTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());

            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AnamnesisIndication>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PreviousIntervention>());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new AcquisitionConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Reconstruction>());
            modelBuilder.ApplyConfiguration(new ConfigurationPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<ConfigurationFinding>());
            modelBuilder.ApplyConfiguration(new DiscPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<DiscFinding>());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFindingPreset>());
            modelBuilder.ApplyConfiguration(new MyelonSpinalCanalPageConfiguration());
            modelBuilder.ApplyConfiguration(new MyelonSpinalCanalFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissuesFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissuesFindingPreset>());
            modelBuilder.ApplyConfiguration(new SacroiliacJointPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SacroiliacJointFinding>());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftTissuesFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
