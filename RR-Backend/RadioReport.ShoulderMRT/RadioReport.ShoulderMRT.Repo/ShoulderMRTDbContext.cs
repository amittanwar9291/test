using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.ShoulderMRT.Domain.Models;
using RadioReport.ShoulderMRT.Repo.Configurations;
using RadioReport.ShoulderMRT.Repo.Seeds;
using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.ShoulderMRT.Repo
{
    public class ShoulderMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public ShoulderMRTDbContext(DbContextOptions<ShoulderMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new JointAndBursaePageConfiguration());
            modelBuilder.ApplyConfiguration(new JointAndBursaeFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LabrumAndRibbonsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LabrumAndRibbonsPageConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new RotatorFindingConfiguration());
            modelBuilder.ApplyConfiguration(new RotatorPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectsConfiguration());
            modelBuilder.ApplyConfiguration(new SequenceConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MusculatureFinding>());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new LabrumAndRibbonsFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(LabrumAndRibbonsFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
