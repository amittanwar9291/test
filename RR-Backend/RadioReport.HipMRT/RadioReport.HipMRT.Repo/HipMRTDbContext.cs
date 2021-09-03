using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.HipMRT.Domain.Models;
using RadioReport.HipMRT.Repo.Configurations;
using RadioReport.HipMRT.Repo.Seeds;
using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.HipMRT.Repo
{
    public class HipMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public HipMRTDbContext(DbContextOptions<HipMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new CapsuleAndLigamentsPageConfiguration());
            modelBuilder.ApplyConfiguration(new CapsuleAndLigamentsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new CapsuleAndLigamentsFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new CartilageAndLabrumPageConfiguration());
            modelBuilder.ApplyConfiguration(new CartilageAndLabrumFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new MusclesAndTendonsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new MusclesAndTendonsPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFindingPreset>());
            modelBuilder.ApplyConfiguration(new LocalizationConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(CapsuleAndLigamentsFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftTissueFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
