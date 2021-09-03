using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1004128", InstanceName = nameof(BonesFinding.ContrastHomogeneityType))]
        [RadioReportId("pel_m_100254", InstanceName = nameof(BonesFinding.HomogeneityType))]
        Homogeneous = 1,

        [RadioReportId("pel_m_1004129", InstanceName = nameof(BonesFinding.ContrastHomogeneityType))]
        [RadioReportId("pel_m_100253", InstanceName = nameof(BonesFinding.HomogeneityType))]
        Heterogeneous = 2
    }
}