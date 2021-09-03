using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Configurations;
using RadioReport.Common.Repository;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;
using RadioReport.Core.CenterSpecificSettings.Repo.Configurations;
using RadioReport.Core.CenterSpecificSettings.Repo.Seeds;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.Core.CenterSpecificSettings.Repo
{
    public class CenterSpecificSettingsDbContext : DbContextBase
    {
        public CenterSpecificSettingsDbContext(DbContextOptions<CenterSpecificSettingsDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }

            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new CSPSetConfiguration());
            modelBuilder.ApplyConfiguration(new CSPFindingConfiguration());
            modelBuilder.ApplyConfiguration(new CSPSequenceConfiguration());
            modelBuilder.ApplyConfiguration(new AcquisitionConfiguration());
            modelBuilder.ApplyConfiguration(new FindingConfigurationBase<Reconstruction>());
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            var newCSPFindingPresets = CSPFindingSeed.GetPreconfiguredCSPFindings()
               .Where(p => !Set<CSPFinding>()
                   .Any(t => t.FindingType == p.FindingType));

            if (newCSPFindingPresets.Any())
            {
                Set<CSPFinding>().AddRange(newCSPFindingPresets);
            }

            await SaveChangesAsync();
        }
    }
}

