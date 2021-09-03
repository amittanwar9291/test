using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.InstituteModels;

namespace RadioReport.Core.InstituteManager.Repo.Configurations
{
    public class InstituteConfiguration : IEntityTypeConfiguration<Institute>
    {
        public void Configure(EntityTypeBuilder<Institute> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.ToTable("Institutes");
            builder.HasKey(i => new { i.Id });
        }
    }
}
