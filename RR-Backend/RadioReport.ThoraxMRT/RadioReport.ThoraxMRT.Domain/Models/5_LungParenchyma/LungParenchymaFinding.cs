using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class LungParenchymaFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_m_050106")]
        public LungParenchymaFindingType FindingType { get; set; }

        #region LungParenchymaPathology

        [RadioReportId("tho_m_050210", InstanceName = nameof(LungParenchymaFindingType.LungParenchymaPathology))]
        public LungsFlapsLocations LungParenchymaPathologyLocation { get; set; }

        public SuspicionOfType SuspicionOfType { get; set; }

        [RadioReportId("tho_m_050403", InstanceName = nameof(LungParenchymaFindingType.LungParenchymaPathology))]
        public int? SizeInMm { get; set; }

        [RadioReportId("tho_m_050406", InstanceName = nameof(LungParenchymaFindingType.LungParenchymaPathology))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("tho_m_050409", InstanceName = nameof(LungParenchymaFindingType.LungParenchymaPathology))]
        public int? ThirdPlaneInMm { get; set; }

        #endregion

        #region CysticFibrosis

        public CysticFibrosisType CysticFibrosisType { get; set; }

        [RadioReportId("tho_m_0502116", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public int? Score { get; set; }

        [RadioReportId("tho_m_050306-l", InstanceName = nameof(BronchiectasisOrWallThickeningLocalizer), IsExportable = false)]
        public LungsFlapsMulticolorLocalizer BronchiectasisOrWallThickeningLocalizer { get; set; }

        [RadioReportId("tho_m_050308-l", InstanceName = nameof(MucusPlaqueLocalizer), IsExportable = false)]
        public LungsFlapsMulticolorLocalizer MucusPlaqueLocalizer { get; set; }

        [RadioReportId("tho_m_050412-l", InstanceName = nameof(SacculationOrAbscessLocalizer), IsExportable = false)]
        public LungsFlapsMulticolorLocalizer SacculationOrAbscessLocalizer { get; set; }

        [RadioReportId("tho_m_050414-l", InstanceName = nameof(ConsolidationLocalizer), IsExportable = false)]
        public LungsFlapsMulticolorLocalizer ConsolidationLocalizer { get; set; }

        [RadioReportId("tho_m_050502-l", InstanceName = nameof(OtherAbnormalityLocalizer), IsExportable = false)]
        public LungsFlapsMulticolorLocalizer OtherAbnormalityLocalizer { get; set; }

        [RadioReportId("tho_m_050504-l", InstanceName = nameof(FunctionLocalizer), IsExportable = false)]
        public LungsFlapsMulticolorLocalizer FunctionLocalizer { get; set; }

        [RadioReportId("tho_m_050310", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsBronchiectasisOrWallThickening { get; set; }

        [RadioReportId("tho_m_050312", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public LungsFlapsLocations BronchiectasisOrWallThickeningLocation { get; set; }

        [RadioReportId("tho_m_050313", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsMucusPlaque { get; set; }

        [RadioReportId("tho_m_050330", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public LungsFlapsLocations MucusPlaqueLocation { get; set; }

        [RadioReportId("tho_m_050416", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsSacculationOrAbscess { get; set; }

        [RadioReportId("tho_m_050418", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public LungsFlapsLocations SacculationOrAbscessLocation { get; set; }

        [RadioReportId("tho_m_050419", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsConsolidation { get; set; }

        [RadioReportId("tho_m_050430", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public LungsFlapsLocations ConsolidationLocation { get; set; }

        [RadioReportId("tho_m_050506", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPerfusionDisorder { get; set; }

        [RadioReportId("tho_m_050509", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public LungsFlapsLocations PerfusionDisorderLocation { get; set; }

        [RadioReportId("tho_m_050315", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPleuritis { get; set; }

        [RadioReportId("tho_m_050317", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPleuritisRight { get; set; }

        [RadioReportId("tho_m_050318", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPleuritisLeft { get; set; }

        [RadioReportId("tho_m_050319", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPleuralEffusion { get; set; }

        [RadioReportId("tho_m_050321", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPleuralEffusionRight { get; set; }

        [RadioReportId("tho_m_050322", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPleuralEffusionLeft { get; set; }

        [RadioReportId("tho_m_050323", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public int? PleuralEffusionInMm { get; set; }

        [RadioReportId("tho_m_050421", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPneumothorax { get; set; }

        [RadioReportId("tho_m_050423", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPneumothoraxRight { get; set; }

        [RadioReportId("tho_m_050424", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsPneumothoraxLeft { get; set; }

        [RadioReportId("tho_m_050425", InstanceName = nameof(LungParenchymaFindingType.CysticFibrosis))]
        public bool IsMediastinalShift { get; set; }

        public SideType SideType { get; set; }

        #endregion
    }
}
