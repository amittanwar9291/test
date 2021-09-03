using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum CharacterizationHaematomaType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080505", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        Hyperacute = 1,
        
        [RadioReportId("hip_m_080506", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        Acute = 2,
        
        [RadioReportId("hip_m_080507", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        Subacute = 3,
        
        [RadioReportId("hip_m_080508", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        ChronicOrganized = 4
    }
}