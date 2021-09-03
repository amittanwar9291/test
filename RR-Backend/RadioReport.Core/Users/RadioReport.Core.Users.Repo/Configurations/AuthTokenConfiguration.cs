using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.Auth;

namespace RadioReport.Core.Users.Repo.Configurations
{
    public class AuthTokenConfiguration : IEntityTypeConfiguration<AuthToken>
    {
        public void Configure(EntityTypeBuilder<AuthToken> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable(nameof(AuthToken) + "s");
            builder.HasKey(p => new { p.Id, p.Application });
            builder.Property(p => p.Id).HasColumnName("UserId");
        }
    }
}
