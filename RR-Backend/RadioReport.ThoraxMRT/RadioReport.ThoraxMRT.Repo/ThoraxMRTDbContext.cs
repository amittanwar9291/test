using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.ThoraxMRT.Repo.Configurations;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.ThoraxMRT.Domain.Models;
using System.Threading.Tasks;
using System;
using RadioReport.ThoraxMRT.Repo.Seeds;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.ThoraxMRT.Repo
{
    public class ThoraxMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public ThoraxMRTDbContext(DbContextOptions<ThoraxMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));
            
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new StudyAreaPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AnamnesisFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<IndicationFinding>());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new MediastinumPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MediastinumFinding>());
            modelBuilder.ApplyConfiguration(new LungParenchymaPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<LungParenchymaFinding>());
            modelBuilder.ApplyConfiguration(new LungsFlapsMulticolorLocalizerConfiguration());
            modelBuilder.ApplyConfiguration(new PleuraPageConfiguration());
            modelBuilder.ApplyConfiguration(new PleuraFindingConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BonesFinding>());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            await SaveChangesAsync();
        }
    }
}
