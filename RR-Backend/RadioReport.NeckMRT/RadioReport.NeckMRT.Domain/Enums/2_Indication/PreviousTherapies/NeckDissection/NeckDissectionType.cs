using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum NeckDissectionType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_020419", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeRight))]
        [RadioReportId("nec_m_020424", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeLeft))]
        Radical = 1,
        
        [RadioReportId("nec_m_020420", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeRight))]
        [RadioReportId("nec_m_020425", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeLeft))]
        Functional = 2,
        
        [RadioReportId("nec_m_020421", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeRight))]
        [RadioReportId("nec_m_020426", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeLeft))]
        Suprahyoidal = 3,
        
        [RadioReportId("nec_m_020422", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeRight))]
        [RadioReportId("nec_m_020427", InstanceName = nameof(PreviousTherapy.NeckDissectionTypeLeft))]
        Selective = 4
    }
}