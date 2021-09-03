using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class PageInfoConfigurationBase : IEntityTypeConfiguration<PageInfo>
    {
        public void Configure(EntityTypeBuilder<PageInfo> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("PageInfos");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.TypeName).HasMaxLength(255);
        }
    }
}
