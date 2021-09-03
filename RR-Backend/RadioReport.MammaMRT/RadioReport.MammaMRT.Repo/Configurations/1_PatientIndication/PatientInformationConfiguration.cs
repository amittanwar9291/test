using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.MammaMRT.Repo.Configurations
{
    public class PatientInformationConfiguration : IEntityTypeConfiguration<PatientInformation>
    {
        public void Configure(EntityTypeBuilder<PatientInformation> builder)
        {
            if (builder == null) throw new ArgumentNullException(nameof(builder));
            
            builder.ToTable("PatientInformations");
            builder.HasKey(p => p.Id);
        }
    }
}
