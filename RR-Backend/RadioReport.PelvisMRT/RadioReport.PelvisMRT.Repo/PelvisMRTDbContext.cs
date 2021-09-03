using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.PelvisMRT.Domain.Models;
using RadioReport.PelvisMRT.Repo.Configurations;
using RadioReport.PelvisMRT.Repo.Seeds;
using System;
using System.Threading.Tasks;

namespace RadioReport.PelvisMRT.Repo
{
    public class PelvisMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; } 

        public PelvisMRTDbContext(DbContextOptions<PelvisMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new AnamesisClinicFindingConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPreviousOperationFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new MaleGenderFindingConfiguration());
            modelBuilder.ApplyConfiguration(new MaleGenderPageConfiguration());
            modelBuilder.ApplyConfiguration(new MaleGenderFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new ProstataFindingConfiguration());
            modelBuilder.ApplyConfiguration(new ProstataPageConfiguration());
            modelBuilder.ApplyConfiguration(new FemaleGenderFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FemaleGenderFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new FemaleGenderPageConfiguration());
            modelBuilder.ApplyConfiguration(new PelvicFloorFindingConfiguration());
            modelBuilder.ApplyConfiguration(new PelvicFloorPageConfiguration());
            modelBuilder.ApplyConfiguration(new RectumFindingConfiguration());
            modelBuilder.ApplyConfiguration(new RectumPageConfiguration());
            modelBuilder.ApplyConfiguration(new BladderFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BladderFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new BladderPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new LymphNodesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LymphNodesPageConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFileConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(FemaleGenderFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(MaleGenderFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(BladderFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
