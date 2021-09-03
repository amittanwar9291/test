using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class LiverFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_040106")]
        public LiverFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("abd_m_040204", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040548", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public LiverDifferentialDiagnosisType DifferentialDiagnosis { get; set; }

        public WashInArterialPhaseType WashInArterialPhaseType { get; set; }

        [RadioReportId("abd_m_040320", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsMaskingVenousPhase { get; set; }

        [RadioReportId("abd_m_040323", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsLateVenousPooling { get; set; }

        #endregion


        #region FocalLiverLesion

        public FocalLocalizationType FocalLocalizationType { get; set; }

        [RadioReportId("abd_m_040306", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsRightLobeOfLiver { get; set; }

        [RadioReportId("abd_m_040505-l", InstanceName = nameof(LiverFinding.HomogeneityType), IsExportable = false)]
        public LiverHomogeneityType HomogeneityType { get; set; }

        [RadioReportId("abd_m_040314", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public SignalTypeExtended EarlyArterial { get; set; }

        [RadioReportId("abd_m_040316", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public SignalTypeExtended LateArterial { get; set; }

        [RadioReportId("abd_m_040318", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public SignalTypeExtended PortalVenous { get; set; }

        [RadioReportId("abd_m_040413", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public SignalTypeExtended Venous { get; set; }

        [RadioReportId("abd_m_040514", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public SignalTypeExtended LiverSpecificContrastEnhancement { get; set; }

        [RadioReportId("abd_m_040222", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCentralScar { get; set; }

        [RadioReportId("abd_m_040223", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsWashInArterialPhase { get; set; }

        [RadioReportId("abd_m_040417", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsFat { get; set; }

        [RadioReportId("abd_m_040420", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCalcification { get; set; }

        [RadioReportId("abd_m_040498", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCapsule { get; set; }

        [RadioReportId("abd_m_040422", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("abd_m_040423", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsHemorrhageProducts { get; set; }

        [RadioReportId("abd_m_040427", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public GrowthPatternsType GrowthPatternsType { get; set; }

        [RadioReportId("abd_m_040515-l", InstanceName = nameof(LiverFinding.QualityOfEnhancement), IsExportable = false)]
        public LiverHomogeneityType QualityOfEnhancement { get; set; }

        #endregion


        #region Other

        [RadioReportId("abd_m_040209", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040337", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public SignalTypeExtended T1WSignalType { get; set; }

        [RadioReportId("abd_m_040211", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040339", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public SignalTypeExtended T2WSignalType { get; set; }

        #endregion
    }
}
