using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.Auth;

namespace RadioReport.Core.Users.Repo.Configurations
{
    public class ClientTokenConfiguration : IEntityTypeConfiguration<ClientToken>
    {
        public void Configure(EntityTypeBuilder<ClientToken> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));

            builder.ToTable("ClientTokens");
            builder.HasKey(p => new { p.Id });
            builder.Property(p => p.Id).HasColumnName("ClientTokenId");
        }
    }
}
