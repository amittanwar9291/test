using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.Common.Module.Logic.Models.Technology
{
    public abstract class ReconstructionBase : FindingBase
    {
        public override string InstanceName => ReconstructionType.ToString();

        [RadioReportId("uni_xc_030327")]
        public ReconstructionType ReconstructionType { get; set; }

        [RadioReportId("uni_xc_030419")]
        public float? SliceThicknessST1Mm { get; set; }

        [RadioReportId("uni_xc_030421")]
        public float? SliceThicknessST2Mm { get; set; }

        [RadioReportId("uni_xc_030423")]
        public float? SliceThicknessST3Mm { get; set; }

        [RadioReportId("uni_xc_030425")]
        public float? SliceThicknessST4Mm { get; set; }

        [RadioReportId("uni_xc_030428")]
        public bool IsSoftTissues { get; set; }

        [RadioReportId("uni_xc_030429")]
        public bool IsLungs { get; set; }

        [RadioReportId("uni_xc_030430")]
        public bool IsBone { get; set; }

        [RadioReportId("uni_xc_030431")]
        public bool IsCTAngiography { get; set; }

        [RadioReportId("uni_xc_030433")]
        public bool IsMIP { get; set; }

        [RadioReportId("uni_xc_030434")]
        public bool IsMPR { get; set; }

        [RadioReportId("uni_xc_030435")]
        public bool IsVRT { get; set; }

        [RadioReportId("uni_xc_030436")]
        public bool IsMinIP { get; set; }

        [RadioReportId("uni_xc_030438")]
        public int? DoseLengthProductMGycm { get; set; }
    }
}
