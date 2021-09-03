using Microsoft.EntityFrameworkCore;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.CardioMRT.Domain.Models.Anamnesis;
using RadioReport.CardioMRT.Repo.Configurations;
using RadioReport.CardioMRT.Repo.Seeds;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.CardioMRT.Repo
{
    public class CardioMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public CardioMRTDbContext(DbContextOptions<CardioMRTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new FindingsVentriclesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FlapsPageConfiguration());
            modelBuilder.ApplyConfiguration(new HeartValveConfiguration());
            modelBuilder.ApplyConfiguration(new CongenitalHeartDiseaseConfiguration());
            modelBuilder.ApplyConfiguration(new MeasuresConfiguration());
            modelBuilder.ApplyConfiguration(new LeftVentriclePageConfiguration());
            modelBuilder.ApplyConfiguration(new PericardiumVesselsFindingsConfiguration());
            modelBuilder.ApplyConfiguration(new PericardiumVesselsPageConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new RightVentriclePageConfiguration());
            modelBuilder.ApplyConfiguration(new SpatialRequirementFindingConfiguration());
            modelBuilder.ApplyConfiguration(new SpatialRequirementFindingPresetConfiguration());
            modelBuilder.ApplyConfiguration(new SpatialRequirementPageConfiguration());
            modelBuilder.ApplyConfiguration(new AreaOfExaminationPageConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<IndicationFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<InterventionOrPreOpsFinding>());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(SpatialRequirementFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}

