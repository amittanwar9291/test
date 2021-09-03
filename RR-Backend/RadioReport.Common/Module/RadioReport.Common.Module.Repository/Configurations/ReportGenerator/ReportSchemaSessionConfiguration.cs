using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;

namespace RadioReport.Common.Module.Repository.Configurations.ReportGenerator
{
    public class ReportSchemaSessionConfiguration : IEntityTypeConfiguration<ReportSchemaSession>
    {
        public void Configure(EntityTypeBuilder<ReportSchemaSession> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable(nameof(ReportSchemaSession) + "s");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.UserName)
                .HasColumnType("varchar(50)")
                .IsRequired();
            builder.Property(p => p.LastActivity)
                .IsRequired();
        }
    }
}
