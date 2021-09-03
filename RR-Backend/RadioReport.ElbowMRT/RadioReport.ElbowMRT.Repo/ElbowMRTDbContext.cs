using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.ElbowMRT.Domain.Models;
using RadioReport.ElbowMRT.Repo.Configurations;
using RadioReport.ElbowMRT.Repo.Seeds;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Threading.Tasks;

namespace RadioReport.ElbowMRT.Repo
{
    public class ElbowMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public ElbowMRTDbContext(DbContextOptions<ElbowMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AnamnesisFinding>());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new CartilagePageConfiguration());
            modelBuilder.ApplyConfiguration(new CartilageFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissueFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFindingPreset>());
            modelBuilder.ApplyConfiguration(new SoftTissuePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new TendonsAndMusclesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new TendonsAndMusclesConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftTissueFindingPresetSeed.GetPreconfiguredPresets());
            await SaveChangesAsync();
        }   
    }
}
