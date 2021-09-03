using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums.LymphNodes;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class LymphNodesFinding : FindingWithImageBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("nec_m_080106")]
        public LymphNodesFindingType FindingType { get; set; }

        [RadioReportId("nec_m_080203", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelIaSubmental { get; set; }

        [RadioReportId("nec_m_080204", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelIbSubmandibular { get; set; }

        [RadioReportId("nec_m_080205", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelIIaUpperInternal { get; set; }

        [RadioReportId("nec_m_080206", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelIIbUpperInternal { get; set; }

        [RadioReportId("nec_m_080207", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelIIIMidInternal { get; set; }

        [RadioReportId("nec_m_080208", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelIVLowerInternal { get; set; }

        [RadioReportId("nec_m_080209", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelVaSuperiorPosteriorcervical { get; set; }

        [RadioReportId("nec_m_080210", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelVbInferiorPosterior { get; set; }

        [RadioReportId("nec_m_080211", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelVIAnteriorCompartment { get; set; }

        [RadioReportId("nec_m_080212", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsLevelVIIUppermediastinalLN { get; set; }

        [RadioReportId("nec_m_080303", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public int? MaxShortAxisDiameterInMm { get; set; }

        public ShapeType ShapeType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("nec_m_080402", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("nec_m_080403", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public bool IsConglomerateMass { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("uni_08_003", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_08_005", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
        public string PictureNumber { get; set; }

        [RadioReportId("uni_08_007", InstanceName = "NeckMRT.LymphNodes.LymphNodesFinding", IsExportable = false)]
        public override ImageFile UploadedImageFile { get; set; }
    }
}