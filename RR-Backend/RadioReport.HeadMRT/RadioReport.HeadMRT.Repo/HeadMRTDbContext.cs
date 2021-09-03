using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.HeadMRT.Domain.Models;
using RadioReport.HeadMRT.Repo.Configurations;
using RadioReport.HeadMRT.Repo.Seeds;
using System;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo
{
    public class HeadMRTDbContext: ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }
        public HeadMRTDbContext(DbContextOptions<HeadMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            if(modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new ExaminationPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<ExaminationIndicationFinding>());
            modelBuilder.ApplyConfiguration(new AnamnesisPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<ClinicalSymptomFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<PreviousInterventionsTherapiesFinding>());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CMSideEffect>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Sequence>());
            modelBuilder.ApplyConfiguration(new VesselsPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<VesselsFinding>());
            modelBuilder.ApplyConfiguration(new MeningesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MeningesFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MeningesFindingPreset>());
            modelBuilder.ApplyConfiguration(new CortexPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CortexFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CortexFindingPreset>());
            modelBuilder.ApplyConfiguration(new BasalNucleiPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BasalNucleiFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BasalNucleiFindingPreset>());
            modelBuilder.ApplyConfiguration(new BrainstemCranialNervesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BrainstemCranialNervesFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BrainstemCranialNervesFindingPreset>());
            modelBuilder.ApplyConfiguration(new CerebrospinalFluidSpacePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CerebrospinalFluidSpaceFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CerebrospinalFluidSpaceFindingPreset>());
            modelBuilder.ApplyConfiguration(new SellarRegionPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SellarRegionFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SellarRegionFindingPreset>());
            modelBuilder.ApplyConfiguration(new FacialSkullPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<FacialSkullFinding>());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<FacialSkullFindingPreset>());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SummaryFinding>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            UpdatePresets(MeningesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(CortexFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(BasalNucleiFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(BrainstemCranialNervesFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(CerebrospinalFluidSpaceFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(SellarRegionFindingPresetSeed.GetPreconfiguredPresets());
            UpdatePresets(FacialSkullFindingPresetSeed.GetPreconfiguredPresets());

            await SaveChangesAsync();
        }
    }
}
