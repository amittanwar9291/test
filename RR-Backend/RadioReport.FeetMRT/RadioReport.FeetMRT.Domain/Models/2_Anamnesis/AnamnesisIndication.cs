using RadioReport.Common.Logic.Models;
using RadioReport.FeetMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Models.Anamnesis
{
    public class AnamnesisIndication : FindingBase
    {
        public override string InstanceName => IndicationType.ToString();

        [RadioReportId("anc_m_020105")]
        public IndicationType IndicationType { get; set; }

        #region Common 

        [RadioReportId("anc_m_020204", InstanceName = nameof(IndicationType.Trauma))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.Fracture))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.OccultFracture))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.Luxation))]
        [RadioReportId("anc_m_020209", InstanceName = nameof(IndicationType.InjuryTendonsLigaments))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.Instability))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.OsteochondralLesion))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.Mass))]
        [RadioReportId("anc_m_020202", InstanceName = nameof(IndicationType.InflammatoryChange))]
        public bool IsSuspected { get; set; }

        #endregion 

        #region Trauma

        [RadioReportId("anc_m_020206", InstanceName = nameof(IndicationType.Trauma))]
        public byte PeriodTraumaMonth { get; set; }

        [RadioReportId("anc_m_020207", InstanceName = nameof(IndicationType.Trauma))]
        public int PeriodTraumaYear { get; set; }

        #endregion

        #region InjuryTendonsLigaments

        public LesionType LesionType { get; set; }

        #endregion
    }
}
