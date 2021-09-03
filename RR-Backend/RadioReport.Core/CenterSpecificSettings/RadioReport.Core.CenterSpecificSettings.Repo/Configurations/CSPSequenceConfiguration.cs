using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Core.CenterSpecificSettings.Domain.Models;

namespace RadioReport.Core.CenterSpecificSettings.Repo.Configurations
{
    public class CSPSequenceConfiguration : IEntityTypeConfiguration<Sequence>
    {
        public void Configure(EntityTypeBuilder<Sequence> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable("CSPSequences");
            builder.HasKey(p => p.Id);
            builder.Ignore(p => p.IsDeleted);
            builder.Ignore(p => p.ScopeId);
            builder.Ignore(p => p.ParentNumber);
        }
    }
}
