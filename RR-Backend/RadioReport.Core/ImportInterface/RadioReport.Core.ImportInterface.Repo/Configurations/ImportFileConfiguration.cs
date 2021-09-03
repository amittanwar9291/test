using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Core.ImportInterface.Repo.Configurations
{
    public class ImportFileConfiguration : IEntityTypeConfiguration<CVI42Imports>
    {
        public void Configure(EntityTypeBuilder<CVI42Imports> builder)
        {
            builder.ToTable("CVI42Imports");
            
            builder.HasKey(i => new { i.Id });
        }
    }
}