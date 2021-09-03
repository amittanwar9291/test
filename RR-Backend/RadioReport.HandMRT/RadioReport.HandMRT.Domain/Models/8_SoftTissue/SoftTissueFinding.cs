using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HandMRT.Domain.Constants;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HandMRT.Domain.Models
{
    public class SoftTissueFinding : SoftTissueFindingBase
    {
        #region Common
        [RadioReportId("han_m_080313", InstanceName = nameof(SoftTissueFindingType.Haematoma))]
        [RadioReportId("han_m_080339", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("han_m_080324", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public Enums.HandLocations HandLocationsLocalizer { get; set; }
        
        [RadioReportId("han_m_080315", InstanceName = nameof(SoftTissueFindingType.Haematoma))]
        [RadioReportId("han_m_080341", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        public int? MaxDiameterInMm { get; set; }

        #endregion
        #region ArticularEffusion
        
		[RadioReportId("han_m_080203", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public Enums.HandJointLocations HandJointsLocalizer { get; set; }

        public QuantityType QuantityType { get; set; }

        [RadioReportId("han_m_080305", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsHemarthros { get; set; }

        [RadioReportId("han_m_080306", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsCapsuleRupture { get; set; }

        [RadioReportId("han_m_080307", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsArticularEffusionWithExtraarticularSpread { get; set; }

        [RadioReportId("han_m_080308", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsLooseBody { get; set; }

        [RadioReportId("han_m_080310", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public int? DiameterInMm { get; set; }

        #endregion

        #region SoftTissueMass

        #region FirstTab
        [RadioReportId("han_m_080109-l", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
        public Enums.DescriptionType DescriptionType { get; set; }

        [RadioReportId("han_m_080210", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsHistologyKnown { get; set; }
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("han_m_0800404", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public int? Size { get; set; }

        [RadioReportId("han_m_0800407", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public int? SecondPlane { get; set; }

        [RadioReportId("han_m_0800410", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public int? ThirdPlane { get; set; }
        public FormType FormType { get; set; }

        #endregion

        #region SecondTab
        [RadioReportId("han_m_080217", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSepta { get; set; }

        [RadioReportId("han_m_080218", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("han_m_080219", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("han_m_080327", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsNoDisplacement { get; set; }

        [RadioReportId("han_m_080328", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsAlongTendonSheath { get; set; }

        [RadioReportId("han_m_080330", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("han_m_080331", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsBones { get; set; }

        [RadioReportId("han_m_080332", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSkin { get; set; }

        [RadioReportId("han_m_080333", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsMuscle { get; set; }

        [RadioReportId("han_m_080334", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsFascia { get; set; }

        [RadioReportId("han_m_080335", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsVessel { get; set; }

        [RadioReportId("han_m_080336", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsNerves { get; set; }

        [RadioReportId("han_m_0800413", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCutisThickening { get; set; }

        [RadioReportId("han_m_0800416", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCompressionOfThePosteriorInterosseousNerve { get; set; }

        [RadioReportId("han_m_0800515", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsDiffusionRestriction { get; set; }

        #endregion

        #region ThirdTab

        [RadioReportId("han_m_080223", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("han_m_080224", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSuspected { get; set; }

        [RadioReportId("han_m_080226", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("han_m_080227", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSecondary { get; set; }

        [RadioReportId("han_m_080229", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis3 { get; set; }
        
        [RadioReportId("han_m_080337", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsMoreThanOneLesionSameEntity { get; set; }
        
        #endregion

        #endregion

    }
}
