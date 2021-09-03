using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.CardioMRT.Domain.Models;

namespace RadioReport.CardioMRT.Repo.Configurations
{

	public class MeasuresConfiguration : IEntityTypeConfiguration<Measures>
    {
        public void Configure(EntityTypeBuilder<Measures> builder)
        {
            builder.ToTable(nameof(Measures));
        }
    }
}
