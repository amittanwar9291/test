using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum DetailsInterventionType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0603212", InstanceName = nameof(BonesFinding.DetailsInterventionType))]
        Vertebroplasty = 1,

        [RadioReportId("spi_c_0603213", InstanceName = nameof(BonesFinding.DetailsInterventionType))]
        Kyphoplasty = 2
    }
}
