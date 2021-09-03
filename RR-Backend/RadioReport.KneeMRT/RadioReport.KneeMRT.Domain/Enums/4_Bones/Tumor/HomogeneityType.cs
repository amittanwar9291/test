using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040253", InstanceName = nameof(BonesFinding.HomogeneityType))]
        Inhomogeneous = 1,

        [RadioReportId("kne_m_040472", InstanceName = nameof(BonesFinding.ContrastHomogeneityType))]
        [RadioReportId("kne_m_040254", InstanceName = nameof(BonesFinding.HomogeneityType))]
        Homogeneous = 2,

        [RadioReportId("kne_m_040473", InstanceName = nameof(BonesFinding.ContrastHomogeneityType))]
        Heterogeneous = 3
    }
}