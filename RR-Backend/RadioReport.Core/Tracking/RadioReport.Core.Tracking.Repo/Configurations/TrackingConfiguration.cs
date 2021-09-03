using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Repo.Configurations
{
    public class TrackingConfiguration : IEntityTypeConfiguration<TrackingEntity>
    {
        public void Configure(EntityTypeBuilder<TrackingEntity> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.HasKey(_ => new { _.ReportId, _.TrackingSubjectType, _.TrackingSubjectId });
            builder.ToTable("Trackings");
        }
    }
}