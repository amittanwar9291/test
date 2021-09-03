using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.SpineMRT.Repo.Configurations;
using RadioReport.SpineMRT.Repo.Seeds;
using System.Linq;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.SpineMRT.Domain.Models;
using RadioReport.SpineMRT.Technology.Domain.Models;

namespace RadioReport.SpineMRT.Repo
{
    public class SpineMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public SpineMRTDbContext(DbContextOptions<SpineMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new InterventionConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new ConfigurationPageConfiguration());
            modelBuilder.ApplyConfiguration(new ConfigurationFindingConfiguration());
            modelBuilder.ApplyConfiguration(new DiscPageConfiguration());
            modelBuilder.ApplyConfiguration(new DiscFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SacroiliacJointFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SacroiliacJointFindingPreset>());
            modelBuilder.ApplyConfiguration(new SacroiliacJointPageConfiguration());
            modelBuilder.ApplyConfiguration(new ScoreConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuesPageConfiguration());
            modelBuilder.ApplyConfiguration(new SpinalCanalPageConfiguration());
            modelBuilder.ApplyConfiguration(new SpinalCanalFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SpinalCanalFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SpinalCanalFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftTissuesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SacroiliacJointFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
