using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.Technology
{
    public abstract class AcquisitionBase<T> : FindingBase
        where T : ReconstructionBase
    {
        public override string InstanceName => AcquisitionType.ToString();

        [RadioReportId("uni_xc_030208")]
        public AcquisitionType AcquisitionType { get; set; }

        [RadioReportId("uni_xc_030303")]
        public TechniqueType TechniqueType { get; set; }

        [RadioReportId("uni_xc_030305")]
        public int? NumberOfLines { get; set; }

        [RadioReportId("uni_xc_030308")]
        public float? SliceThicknessInMm { get; set; }

        [RadioReportId("uni_xc_030311")]
        public int? TubeVoltage1KV { get; set; }

        [RadioReportId("uni_xc_030313")]
        public int? TubeVoltage2KV { get; set; }

        [RadioReportId("uni_xc_030316")]
        public int? TubeCurrent1MAs { get; set; }

        [RadioReportId("uni_xc_030318")]
        public int? TubeCurrent2MAs { get; set; }

        public TubeCurrentModulationType TubeCurrentModulationType { get; set; }

        [RadioReportId("uni_xc_030324")]
        public int? ReferenceValueInMAs { get; set; }

        [RadioReportId("uni_xc_030403")]
        public bool IsNative { get; set; }

        [RadioReportId("uni_xc_030404")]
        public bool IsPulmonaryArterialPhase { get; set; }

        [RadioReportId("uni_xc_030405")]
        public bool IsArterial { get; set; }

        [RadioReportId("uni_xc_030406")]
        public bool IsArterialEarly { get; set; }

        [RadioReportId("uni_xc_030407")]
        public bool IsArterialLate { get; set; }

        [RadioReportId("uni_xc_030408")]
        public bool IsVenous { get; set; }

        [RadioReportId("uni_xc_030409")]
        public bool IsLate { get; set; }

        [RadioReportId("uni_xc_030410")]
        public float? LateDelayInMin { get; set; }

        [RadioReportId("uni_xc_030413")]
        public PatientPositioningType PatientPositioningType { get; set; }

        [RadioReportId("uni_xc_030415")]
        public BreathingProtocolType BreathingProtocolType { get; set; }

        [RadioReportId("uni_xc_030417")]
        public bool IsECGGating { get; set; }

        public IEnumerable<T> Reconstructions { get; set; }
    }
}
