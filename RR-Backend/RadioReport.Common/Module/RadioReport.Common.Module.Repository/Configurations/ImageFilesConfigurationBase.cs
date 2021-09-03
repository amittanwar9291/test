using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class ImageFilesConfigurationBase<T> : IEntityTypeConfiguration<T> where T : ImageFile
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            if (builder is null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.ToTable(typeof(T).Name + "s");

            builder.HasKey(i => i.Id);

            builder.Ignore(p => p.Stream);

            builder.Property(p => p.FileName).HasMaxLength(255);
        }
    }
}
