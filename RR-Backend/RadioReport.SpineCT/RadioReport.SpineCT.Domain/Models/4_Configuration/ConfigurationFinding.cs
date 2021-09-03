using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Enums;
using RadioReport.SpineCT.Domain.Enums.Configuration;

namespace RadioReport.SpineCT.Domain.Models
{
    public class ConfigurationFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_c_040106")]
        public ConfigurationFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_c_040203", InstanceName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_0403200", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsCervicalSpine { get; set; }

        [RadioReportId("spi_c_040302", InstanceName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_0404200", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsThoracicSpine { get; set; }

        [RadioReportId("spi_c_040402", InstanceName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_0405200", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsLumbarSpine { get; set; }

        [RadioReportId("spi_c_040209", InstanceName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_0403202", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public SpineLocations CervicalSpineLocation { get; set; }

        [RadioReportId("spi_c_040308", InstanceName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_0404202", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public SpineLocations ThoracicSpineLocation { get; set; }

        [RadioReportId("spi_c_040408", InstanceName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_0405202", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public SpineLocations LumbarSpineLocation { get; set; }

        [RadioReportId("spi_c_040216", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        [RadioReportId("spi_c_0402207", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsThoracolumbar { get; set; }

        #endregion

        #region CurvatureDisorders

        [RadioReportId("spi_c_0402100-l", InstanceName = nameof(CervicalSpinePathologyType), IsExportable = false)]
        public PathologyType CervicalSpinePathologyType { get; set; }

        [RadioReportId("spi_c_0403100-l", InstanceName = nameof(ThoracicSpinePathologyType), IsExportable = false)]
        public PathologyType ThoracicSpinePathologyType { get; set; }

        [RadioReportId("spi_c_0404100-l", InstanceName = nameof(LumbarSpinePathologyType), IsExportable = false)]
        public PathologyType LumbarSpinePathologyType { get; set; }

        #endregion

        #region Spondylolisthesis

        [RadioReportId("spi_c_040212", InstanceName = nameof(ConfigurationFindingType.Spondylolisthesis))]
        public SpineLocations SpondylolisthesisLocation { get; set; }

        public DetailsType DetailsType { get; set; }

        public MeyerdingClassificationType MeyerdingClassificationType { get; set; }

        public EtiologyType EtiologyType { get; set; }

        #endregion

        #region TransitionalVertebra

        [RadioReportId("spi_c_040214", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsCervical { get; set; }

        [RadioReportId("spi_c_040215", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsC7NeckRib { get; set; }

        [RadioReportId("spi_c_040217", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsLumbalizedTH12 { get; set; }

        [RadioReportId("spi_c_040218", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public bool IsLumbosacral { get; set; }

        public LumbosacralType LumbosacralType { get; set; }

        [RadioReportId("spi_c_0402200-l", InstanceName = InstanceNames.Configuration, IsExportable = false)]
        public SideType SideType { get; set; }

        public DefinitionType DefinitionType { get; set; }

        [RadioReportId("spi_c_040222", InstanceName = nameof(ConfigurationFindingType.TransitionalVertebra))]
        public CastellviType CastellviType { get; set; }

        #endregion

        #region Scoliosis

        public PatternType PatternType { get; set; }

        [RadioReportId("spi_c_0402206", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsCervicothoracic { get; set; }

        [RadioReportId("spi_c_0402210", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsTorsionCervicalSpine { get; set; }

        [RadioReportId("spi_c_0402211", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsTorsionThoracicSpine { get; set; }

        [RadioReportId("spi_c_0402212", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public bool IsTorsionLumbarSpine { get; set; }

        [RadioReportId("spi_c_0403206", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public int? CervicalSpineCobbAngle { get; set; }

        [RadioReportId("spi_c_0404206", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public int? ThoracicSpineCobbAngle { get; set; }

        [RadioReportId("spi_c_0405206", InstanceName = nameof(ConfigurationFindingType.Scoliosis))]
        public int? LumbarSpineCobbAngle { get; set; }

        [RadioReportId("spi_c_0403201-l", InstanceName = nameof(CervicalVertexSpineType), IsExportable = false)]
        public VertexSpineType CervicalVertexSpineType { get; set; }

        [RadioReportId("spi_c_0403201-l", InstanceName = nameof(ThoracicVertexSpineType), IsExportable = false)]
        public VertexSpineType ThoracicVertexSpineType { get; set; }

        [RadioReportId("spi_c_0403201-l", InstanceName = nameof(LumbarVertexSpineType), IsExportable = false)]
        public VertexSpineType LumbarVertexSpineType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(ConfigurationFindingType.CurvatureDisorders) => FindingType.ToString() == customConditionId,
                nameof(ConfigurationFindingType.Scoliosis) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
