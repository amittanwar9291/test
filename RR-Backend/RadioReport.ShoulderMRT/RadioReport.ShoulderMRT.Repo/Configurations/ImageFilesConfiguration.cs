using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Configurations;

namespace RadioReport.ShoulderMRT.Repo.Configurations
{
    public class ImageFilesConfiguration : ImageFilesConfigurationBase<ImageFile>
    {
        public override void Configure(EntityTypeBuilder<ImageFile> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable(nameof(ImageFile) + "s");

            builder.HasKey(i => i.Id);

            builder.Property(p => p.FileName).HasMaxLength(255);

            builder.Ignore(p => p.Stream);
        }
    }
}
