using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class KidneysFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_070106")]
        public KidneysFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("abd_m_070230", InstanceName = nameof(KidneysFindingType.Mass))]
		public KidneysDifferentialDiagnosisType KidneysDifferentialDiagnosisType { get; set; }
            
        #endregion


        #region Mass

        public HomogeneityType HomogeneityType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("abd_m_070530", InstanceName = nameof(KidneysFindingType.Mass))]
        public SignalTypeExtended T1wSignal { get; set; }

        [RadioReportId("abd_m_070532", InstanceName = nameof(KidneysFindingType.Mass))]
        public SignalTypeExtended T2wSignal { get; set; }

        [RadioReportId("abd_m_070398", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsDisplacing { get; set; }

        [RadioReportId("abd_m_0703126", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsDeformationOuterRenalContour { get; set; }

        [RadioReportId("abd_m_070597", InstanceName = nameof(KidneysFindingType.Mass))]
        public SignalTypeExtended CorticomedullaryPhase { get; set; }
        
        [RadioReportId("abd_m_070599", InstanceName = nameof(KidneysFindingType.Mass))]
        public SignalTypeExtended NephrographicPhase { get; set; }
        
        #endregion
    }
}