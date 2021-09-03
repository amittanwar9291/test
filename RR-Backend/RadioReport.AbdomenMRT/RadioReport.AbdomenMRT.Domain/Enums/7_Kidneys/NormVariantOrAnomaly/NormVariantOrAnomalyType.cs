using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum NormVariantOrAnomalyType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070302", InstanceName = nameof(KidneysFinding.NormVariantOrAnomalyType))]
        Kidney = 1,
        
        [RadioReportId("abd_m_070303", InstanceName = nameof(KidneysFinding.NormVariantOrAnomalyType))]
        [RadioReportId("abd_m_0704124", InstanceName = nameof(KidneysFinding.VascularInfiltrationType))]
        RenalArtery = 2,
        
        [RadioReportId("abd_m_070304", InstanceName = nameof(KidneysFinding.NormVariantOrAnomalyType))]
        [RadioReportId("abd_m_0704125", InstanceName = nameof(KidneysFinding.VascularInfiltrationType))]
        RenalVeins = 3,
        
        [RadioReportId("abd_m_070305", InstanceName = nameof(KidneysFinding.NormVariantOrAnomalyType))]
        Ureter = 4
    }
}