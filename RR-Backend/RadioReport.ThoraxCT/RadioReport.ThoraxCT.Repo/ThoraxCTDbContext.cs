using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.ThoraxCT.Repo.Configurations;
using RadioReport.ThoraxCT.Repo.Seeds;
using System;
using System.Threading.Tasks;

namespace RadioReport.ThoraxCT.Repo
{
    public class ThoraxCTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public ThoraxCTDbContext(DbContextOptions<ThoraxCTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new AnamnesisFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new LungInterstitiumFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new LungInterstitiumFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LungInterstitiumPageConfiguration());
            modelBuilder.ApplyConfiguration(new LungParenchymaFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new LungParenchymaFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LungParenchymaPageConfiguration());
            modelBuilder.ApplyConfiguration(new MediastinumFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new MediastinumFindingConfiguration());
            modelBuilder.ApplyConfiguration(new MediastinumPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsPageConfiguration());
            modelBuilder.ApplyConfiguration(new StudyAreaPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectConfiguration());
            modelBuilder.ApplyConfiguration(new AcquisitionConfiguration());
            modelBuilder.ApplyConfiguration(new ReconstructionConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(MediastinumFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(LungParenchymaFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(LungInterstitiumFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftPartsFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
