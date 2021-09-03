using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.MammaMRT.Domain.Models;
using RadioReport.MammaMRT.Repo.Configurations;
using RadioReport.MammaMRT.Repo.Seeds;
using System;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.MammaMRT.Repo
{
    public class MammaMRTDbContext : ReportGeneratorDbContext
    {
        public DbSet<Report> Reports { get; set; }

        public MammaMRTDbContext(DbContextOptions<MammaMRTDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ReportConfiguration());
            modelBuilder.ApplyConfiguration(new PageInfoConfiguration());
            modelBuilder.ApplyConfiguration(new ReportResultConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisOwnFamilyAnamnesisFindingConfiguration());
            modelBuilder.ApplyConfiguration(new AnamnesisPreviousTherapiesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new AnatomyPageConfiguration());
            modelBuilder.ApplyConfiguration(new AnatomyEnhancementPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesPageConfiguration());
            modelBuilder.ApplyConfiguration(new BonesFindingConfiguration());
            modelBuilder.ApplyConfiguration(new DiagnosisPageConfiguration());
            modelBuilder.ApplyConfiguration(new DiagnosisFindingConfiguration());
            modelBuilder.ApplyConfiguration(new DiagnosisFindingTemplateConfiguration());
            modelBuilder.ApplyConfiguration(new LymphsPageConfiguration());
            modelBuilder.ApplyConfiguration(new PatientIndicationFindingConfiguration());
            modelBuilder.ApplyConfiguration(new PatientIndicationConfiguration());
            modelBuilder.ApplyConfiguration(new PatientInformationConfiguration());
            modelBuilder.ApplyConfiguration(new RatingPageConfiguration());
            modelBuilder.ApplyConfiguration(new CMSideEffectsConfiguration());
            modelBuilder.ApplyConfiguration(new SequencesConfiguration());
            modelBuilder.ApplyConfiguration(new TechnologyPageConfiguration());
            modelBuilder.ApplyConfiguration(new ImageFilesConfigurationBase<ImageFile>());
            modelBuilder.ApplyConfiguration(new ReportSessionConfiguration());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            var newFindingTemplates = FindingTemplateSeed.GetPreconfiguredFindingTemplates()
                .Where(p => !Set<DiagnosisFindingTemplate>().Any(t => t.DiagnosisType == p.DiagnosisType));

            if (newFindingTemplates.Any())
            {
                Set<DiagnosisFindingTemplate>().AddRange(newFindingTemplates);            
            }

            SeedLocalizers(FindingLocalizerSeed.GetPreconfiguredFindingLocalizers());

            await SaveChangesAsync();
        }
    }
}
