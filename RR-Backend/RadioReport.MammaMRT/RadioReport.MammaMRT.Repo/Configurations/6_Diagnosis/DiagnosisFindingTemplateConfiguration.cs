using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMRT.Domain.Models;
using System.Linq;

namespace RadioReport.MammaMRT.Repo.Configurations
{
    public class DiagnosisFindingTemplateConfiguration : IEntityTypeConfiguration<DiagnosisFindingTemplate>
    {
        public void Configure(EntityTypeBuilder<DiagnosisFindingTemplate> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable("DiagnosisFindingTemplates");

            builder.HasKey(p => p.Id);
            builder.Ignore(p => p.FindingType);

            /// Ignoring props from findingbase class leaving only id prop
            var propertyNames = typeof(FindingBase).GetProperties()
                                    .Select(p => p.Name)
                                    .Where(name => name != nameof(FindingBase.Id))
                                    .ToList();

            foreach (var name in propertyNames)
            {
                builder.Ignore(name);
            }
        }
    }
}
