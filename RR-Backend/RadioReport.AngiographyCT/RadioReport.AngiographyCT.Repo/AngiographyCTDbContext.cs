using Microsoft.EntityFrameworkCore;
using RadioReport.AngiographyCT.Repo.Configurations;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using System;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using System.Threading.Tasks;
using RadioReport.AngiographyCT.Repo.Seeds;

namespace RadioReport.AngiographyCT.Repo
{
    public class AngiographyCTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public AngiographyCTDbContext(DbContextOptions<AngiographyCTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
            modelBuilder.ApplyConfiguration(new LocalizationPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PriorInterventionsFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<IndicationFinding>());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new AcquisitionConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectConfiguration());
            modelBuilder.ApplyConfiguration(new ReconstructionConfiguration());
            modelBuilder.ApplyConfiguration(new CoronaryArteriesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CoronaryArteriesFinding>());
            modelBuilder.ApplyConfiguration(new SupraaorticVesselsPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SupraaorticVesselsFinding>());
            modelBuilder.ApplyConfiguration(new UpperArteriesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<UpperArteriesFinding>());
            modelBuilder.ApplyConfiguration(new AortaPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AortaFinding>());
            modelBuilder.ApplyConfiguration(new AbdomenPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<AbdomenFinding>());
            modelBuilder.ApplyConfiguration(new PelvisLegArteriesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PelvisLegArteriesFinding>());
            modelBuilder.ApplyConfiguration(new SoftTissuePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SoftTissueFinding>());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            await SaveChangesAsync();
        }
    }
}
