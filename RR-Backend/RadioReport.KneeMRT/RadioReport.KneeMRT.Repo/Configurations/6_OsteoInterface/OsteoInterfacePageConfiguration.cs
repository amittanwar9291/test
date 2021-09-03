using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Configurations
{
    public class OsteoInterfacePageConfiguration : IEntityTypeConfiguration<OsteoInterfacePage>
    {
        public void Configure(EntityTypeBuilder<OsteoInterfacePage> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable("OsteoInterfacePages");

            builder.HasKey(p => p.Id);
            builder.HasMany(p => p.Findings).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
