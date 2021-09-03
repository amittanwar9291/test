using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class FindingConfigurationBase<T> : IEntityTypeConfiguration<T>
        where T : FindingBase
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable(typeof(T).Name + "s");
            builder.HasKey(p => p.Id);
            builder.Ignore(p => p.IsDeleted);
            builder.Ignore(p => p.ParentNumber);
            builder.Ignore(p => p.ScopeId);
        }
    }
}
