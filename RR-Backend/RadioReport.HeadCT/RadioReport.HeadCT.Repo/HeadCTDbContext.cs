using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.HeadCT.Domain.Models;
using RadioReport.HeadCT.Repo.Configurations;
using System;

namespace RadioReport.HeadCT.Repo
{
    public class HeadCTDbContext: ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }
		
        public HeadCTDbContext(DbContextOptions<HeadCTDbContext> options) : base(options)
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
            modelBuilder.ApplyConfiguration(new AcquisitionConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Reconstruction>());
            modelBuilder.ApplyConfiguration(new VesselsPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<VesselsFinding>());
            modelBuilder.ApplyConfiguration(new MeningesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<MeningesFinding>());
            modelBuilder.ApplyConfiguration(new CortexPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CortexFinding>());
            modelBuilder.ApplyConfiguration(new BasalNucleiPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BasalNucleiFinding>());
            modelBuilder.ApplyConfiguration(new BrainstemCranialNervesPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<BrainstemCranialNervesFinding>());
            modelBuilder.ApplyConfiguration(new CerebrospinalFluidSpacePageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<CerebrospinalFluidSpaceFinding>());
            modelBuilder.ApplyConfiguration(new SellarRegionPageConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<SellarRegionFinding>());
            modelBuilder.ApplyConfiguration(new FacialSkullPageConfiguration());
            modelBuilder.ApplyConfiguration(new SummaryPageConfiguration());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }
    }
}
