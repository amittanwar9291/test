using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.Repo.Configurations;
using RadioReport.KneeMRT.Repo.Seeds;
using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.KneeMRT.Repo
{
    public class KneeMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public KneeMRTDbContext(DbContextOptions<KneeMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new BonesFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new OsteoInterfaceFindingConfiguration());
            modelBuilder.ApplyConfiguration(new OsteoInterfacePageConfiguration());
            modelBuilder.ApplyConfiguration(new PatellaFindingConfiguration());
            modelBuilder.ApplyConfiguration(new PatellaPageConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new RibbonsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new RibbonsPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsPageConfiguration());
            modelBuilder.ApplyConfiguration(new SoftPartsFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new SequenceConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(BonesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SoftPartsFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
