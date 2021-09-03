using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.NeckMRT.Domain.Models;
using RadioReport.NeckMRT.Repo.Configurations;
using RadioReport.NeckMRT.Repo.Seeds;

namespace RadioReport.NeckMRT.Repo
{
    public class NeckMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; } 

        public NeckMRTDbContext(DbContextOptions<NeckMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));
            
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ExaminationPageConfiguration());
            modelBuilder.ApplyConfiguration(new IndicationPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new PharynxPageConfiguration());
            modelBuilder.ApplyConfiguration(new PharynxFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PharynxFindingPreset>());
            modelBuilder.ApplyConfiguration(new LarynxPageConfiguration());
            modelBuilder.ApplyConfiguration(new LarynxFindingConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<LarynxFindingPreset>());
            modelBuilder.ApplyConfiguration(new SoftTissuesPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftTissuesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new ThyroidPageConfiguration());
            modelBuilder.ApplyConfiguration(new ThyroidFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LymphNodesPageConfiguration());
            modelBuilder.ApplyConfiguration(new LymphNodesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new VesselsPageConfiguration());
            modelBuilder.ApplyConfiguration(new VesselsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(LarynxFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(PharynxFindingPresetSeed.GetPreconfiguredPresets());
            await SaveChangesAsync();
        }
    }    
}
