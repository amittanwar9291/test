using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Configuration;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class ConfigurationFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_m_040106")]
        public ConfigurationFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_m_040203", InstanceName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040226", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsCervicalSpine { get; set; }

        [RadioReportId("spi_m_040302", InstanceName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040328", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsThoracicSpine { get; set; }

        [RadioReportId("spi_m_040402", InstanceName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040409", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsLumbarSpine { get; set; }

        [RadioReportId("spi_m_040209", InstanceName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040228", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public SpineLocations CervicalSpineLocation { get; set; }

        [RadioReportId("spi_m_040308", InstanceName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040322", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public SpineLocations ThoracicSpineLocation { get; set; }

        [RadioReportId("spi_m_040408", InstanceName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040411", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public SpineLocations LumbarSpineLocation { get; set; }

        #endregion

        #region Deviation

        [RadioReportId("spi_m_0402100-l", InstanceName = nameof(CervicalSpinePathologyType), IsExportable = false)]
        public PathologyType CervicalSpinePathologyType { get; set; }

        [RadioReportId("spi_m_0403100-l", InstanceName = nameof(ThoracicSpinePathologyType), IsExportable = false)]
        public PathologyType ThoracicSpinePathologyType { get; set; }

        [RadioReportId("spi_m_0404100-l", InstanceName = nameof(LumbarSpinePathologyType), IsExportable = false)]
        public PathologyType LumbarSpinePathologyType { get; set; }

        #endregion

        #region Spondylolisthesis

        [RadioReportId("spi_m_040212", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        public SpineLocations SpondylolisthesisLocation { get; set; }

        public DetailsType DetailsType { get; set; }

        public MeyerdingClassificationType MeyerdingClassificationType { get; set; }

        public EtiologyType EtiologyType { get; set; }

        #endregion

        #region TransitionalVertebra

        [RadioReportId("spi_m_040214", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsCervical { get; set; }

        [RadioReportId("spi_m_040215", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsC7NeckRib { get; set; }

        [RadioReportId("spi_m_040216", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsThoracolumbar { get; set; }

        [RadioReportId("spi_m_040217", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsLumbalizedTH12 { get; set; }

        [RadioReportId("spi_m_040218", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsLumbosacral { get; set; }

        public LumbosacralType LumbosacralType { get; set; }

        public SacralizedL5Type SacralizedL5Type { get; set; }

        #endregion

        #region Scoliosis

        [RadioReportId("spi_m_040226-l", InstanceName = nameof(CervicalSpineScoliosisType), IsExportable = false)]
        public ScoliosisType CervicalSpineScoliosisType { get; set; }

        [RadioReportId("spi_m_040232", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public int? CervicalSpineCobbAngle { get; set; }

        [RadioReportId("spi_m_040320-l", InstanceName = nameof(ThoracicSpineScoliosisType), IsExportable = false)]
        public ScoliosisType ThoracicSpineScoliosisType { get; set; }

        [RadioReportId("spi_m_040326", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public int? ThoracicSpineCobbAngle { get; set; }

        [RadioReportId("spi_m_040409-l", InstanceName = nameof(LumbarSpineScoliosisType), IsExportable = false)]
        public ScoliosisType LumbarSpineScoliosisType { get; set; }

        [RadioReportId("spi_m_040415", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public int? LumbarSpineCobbAngle { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(ConfigurationFindingType.Deviation) => FindingType.ToString() == customConditionId,
                nameof(ConfigurationFindingType.Scoliosis) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
