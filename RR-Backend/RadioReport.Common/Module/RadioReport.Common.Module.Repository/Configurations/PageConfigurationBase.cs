using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Repository.Configurations
{
    public class PageConfigurationBase<TPage> : IEntityTypeConfiguration<TPage>
        where TPage : PageModelBase
    {
        public virtual void Configure(EntityTypeBuilder<TPage> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.ToTable(typeof(TPage).Name + "s");
            builder.HasIndex(p => p.ReportId).IsUnique();
            builder.HasKey(p => p.Id);
            builder.HasOne<Report>().WithMany().HasForeignKey(p => p.ReportId);
        }
    }
}
