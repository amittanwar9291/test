using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungInterstitiumFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_c_0602110")]
        public LungInterstitiumFindingType FindingType { get; set; }

        #region NodularChanges

        public DistributionSecondaryPulmonaryLobuleType DistributionSecondaryPulmonaryLobuleType { get; set; }

        public RandomDistributionType RandomDistributionType { get; set; }

        public LungInterstitiumLocalizationType LocalizationType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("tho_c_0604114", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsMicronodular { get; set; }

        #endregion

        #region Reticulations

        [RadioReportId("tho_c_0603119", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        public bool IsInterlobularSepta { get; set; }

        [RadioReportId("tho_c_0603120", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        public bool IsIntralobularSepta { get; set; }

        public StructureType StructureType { get; set; }

        #endregion

        #region IncreasedParenchymalDensity

        [RadioReportId("tho_c_0603126", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public bool IsConsolidation { get; set; }

        [RadioReportId("tho_c_0604200", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public bool IsGroundGlassOpacity { get; set; }

        #endregion

        #region OtherParenchymalPatterns

        [RadioReportId("tho_c_0603146", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        public bool IsCrazyPavingPattern { get; set; }

        #endregion

        #region BronchialTubes

        [RadioReportId("tho_c_0603172", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsBronchiectasis { get; set; }

        public BronchiectasisType BronchiectasisType { get; set; }

        [RadioReportId("tho_c_0603178", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsBronchiolectasis { get; set; }

        [RadioReportId("tho_c_0603180", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsBronchialWallThickening { get; set; }

        [RadioReportId("tho_c_0604204", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsMucoidImpaction { get; set; }

        #endregion
    }
}