using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.MammaMX.Domain.Models;
using RadioReport.MammaMX.Repo.Configurations;
using RadioReport.MammaMX.Repo.Seeds;
using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;
using System.Linq;

namespace RadioReport.MammaMX.Repo
{
    public class MammaMXDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public MammaMXDbContext(DbContextOptions<MammaMXDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new PatientIndicationPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PatientIndicationFinding>());

            modelBuilder.ApplyConfiguration(new MedicalHistoryPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<OwnFamilyAnamnesisFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PreviousTherapiesFinding>());

            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<TechnologyFinding>());

            modelBuilder.ApplyConfiguration(new MammographyParenchymaAnatomyPageConfiguration());

            modelBuilder.ApplyConfiguration(new MammographyFindingPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MammographyFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MammographyFindingPreset>());

            modelBuilder.ApplyConfiguration(new UltrasoundMammaryGlandsPageConfiguration());

            modelBuilder.ApplyConfiguration(new UltrasoundFindingPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<UltrasoundFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<UltrasoundFindingPreset>());

            modelBuilder.ApplyConfiguration(new LymphNodesPageConfiguration());
            modelBuilder.ApplyConfiguration(new LymphNodesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new LymphNodesDetailsConfiguration());

            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingRelationConfiguraion());

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(MammographyFindingPresetSeed.GetPreconfiguredPreset());
            UpdatePresets(UltrasoundFindingPresetSeed.GetPreconfiguredPreset());

            await SaveChangesAsync();
        }
    }
}
