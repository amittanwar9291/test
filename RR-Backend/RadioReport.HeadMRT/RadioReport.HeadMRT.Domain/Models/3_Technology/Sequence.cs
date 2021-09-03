using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.HeadMRT.Domain.Enums;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        [RadioReportId("uni_x_030308")]
        public SequenceType SequenceType { get; set; }

        [RadioReportId("uni_x_0303102")]
        public bool IsCineImaging { get; set; }

        [RadioReportId("hea_m_030401")]
        public bool IsHighResolution { get; set; }

        [RadioReportId("hea_m_030402")]
        public bool IsChemicalShiftImaging { get; set; }

        [RadioReportId("hea_m_030403")]
        public bool IsCompressedSense { get; set; }

        [RadioReportId("uni_x_030415")]
        public bool IsDynamicsAfterContrastInjection { get; set; }

        [RadioReportId("uni_x_030419")]
        public bool IsSubtraction { get; set; }

        [RadioReportId("hea_m_030405")]
        public bool IsEpiDwi { get; set; }

        [RadioReportId("hea_m_030406")]
        public bool IsHasteNonEpiDwi { get; set; }

        [RadioReportId("uni_x_030431")]
        public bool IsADCMap { get; set; }

        [RadioReportId("uni_x_030430")]
        public bool IsCalculated { get; set; }

        [RadioReportId("hea_m_030302")]
        public OtherApplicationsType OtherApplicationsType { get; set; }


    public override string InstanceName => WeightingType.ToString();
    }
}

