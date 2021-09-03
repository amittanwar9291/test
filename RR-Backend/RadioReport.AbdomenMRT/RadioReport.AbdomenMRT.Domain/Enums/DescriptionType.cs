using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
﻿using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("abd_m_040110", InstanceName = nameof(InstanceNames.Liver))]
        [RadioReportId("abd_m_050111", InstanceName = nameof(InstanceNames.Spleen))]
        [RadioReportId("abd_m_060111", InstanceName = nameof(InstanceNames.Pancreas))]
        [RadioReportId("abd_m_070110", InstanceName = nameof(InstanceNames.Kidneys))]
        [RadioReportId("abd_m_090111", InstanceName = nameof(InstanceNames.GastrointestinalTract))]
        IDescribe = 1,

        [RadioReportId("abd_m_040111", InstanceName = nameof(InstanceNames.Liver))]
        [RadioReportId("abd_m_050112", InstanceName = nameof(InstanceNames.Spleen))]
        [RadioReportId("abd_m_060112", InstanceName = nameof(InstanceNames.Pancreas))]
        [RadioReportId("abd_m_070111", InstanceName = nameof(InstanceNames.Kidneys))]
        [RadioReportId("abd_m_090112", InstanceName = nameof(InstanceNames.GastrointestinalTract))]
        IKnow = 2
    }
}