using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class PatellaFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("kne_m_070106")]
        public PatellaFindingType FindingType { get; set; }

        [RadioReportId("kne_m_070202", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsAccessoryOssificationCenters { get; set; }
        
        public AdditionalOssificationType AdditionalOssificationType { get; set; }

        [RadioReportId("kne_m_070205", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsVerticalPosition { get; set; }

        public VerticalPositionType VerticalPositionType { get; set; }

        public VisualSelectionType VisualSelectionType { get; set; }

        [RadioReportId("kne_m_070211", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public int? LargestVerticalExpansionPatella { get; set; }

        [RadioReportId("kne_m_070212", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public int? LengthPatellae { get; set; }

        [RadioReportId("kne_m_070213", InstanceName = nameof(PatellaFindingType.AnatomicalVariants), DecimalPlaces = 1)]
        public decimal? InsallSalvatiIndex
        {
            get
            {
                if (LargestVerticalExpansionPatella.HasValue && LengthPatellae.HasValue && LengthPatellae.Value != 0)
                {
                    return decimal.Round((decimal) LargestVerticalExpansionPatella.Value / LengthPatellae.Value, 1);
                }
                return null;
            }
        }

        public InsallSalvatiIndexType InsallSalvatiIndexType
        {
            get
            {
                if (InsallSalvatiIndex.HasValue)
                {
                    if (InsallSalvatiIndex.Value < 0.8m)
                    {
                        return InsallSalvatiIndexType.PatellaAlta;
                    }
                    else if (InsallSalvatiIndex.Value <= 1.2m)
                    {
                        return InsallSalvatiIndexType.NoPathologicalFinding;
                    }
                    else
                    {
                        return InsallSalvatiIndexType.PatellaBaja;
                    }
                }
                return InsallSalvatiIndexType.None;
            }
        }

        [RadioReportId("kne_m_070301", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsSulcusAngleTrochlea { get; set; }

        [RadioReportId("kne_m_070303", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public int? SulcusAngleTrochleaInDegrees { get; set; }

        [RadioReportId("kne_m_070305", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsTrochleaDysplasia
        {
            get
            {
                if (SulcusAngleTrochleaInDegrees.HasValue)
                {
                    if (SulcusAngleTrochleaInDegrees > 145 && SulcusAngleTrochleaInDegrees <= 360)
                    {
                        return true;
                    }
                }
                return false;
            }
        }

        [RadioReportId("kne_m_070306", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsTrochleadysplasia { get; set; }

        public TrochleadysplasiaType TrochleadysplasiaType { get; set; }

        [RadioReportId("kne_m_070401", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsTtTgDistance { get; set; }

        [RadioReportId("kne_m_070402", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public int? TtTgDistanceInMm { get; set; }

        public TtTgDistanceType TtTgDistanceType
        {
            get
            {
                if (TtTgDistanceInMm.HasValue)
                {
                    if (TtTgDistanceInMm >= 0 && TtTgDistanceInMm < 15)
                    {
                        return TtTgDistanceType.Normal;
                    }
                    if (TtTgDistanceInMm >= 15 && TtTgDistanceInMm <= 20)
                    {
                        return TtTgDistanceType.Borderline;
                    }
                    if (TtTgDistanceInMm > 20 && TtTgDistanceInMm < 10000)
                    {
                        return TtTgDistanceType.Abnormal;
                    }
                }
                return TtTgDistanceType.None;
            }
        }

        [RadioReportId("kne_m_070501", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsPlicaMediopatellaris { get; set; }

        [RadioReportId("kne_m_070502", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public int? PlicaMediopatellarisWidthInMm { get; set; }

        [RadioReportId("kne_m_070504", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsExtendingIntoThePrecondylarSpace { get; set; }

        [RadioReportId("kne_m_070506", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsMediopatellarisChondropathyMedialPatella { get; set; }

        [RadioReportId("kne_m_070507", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsMediopatellarisChondropathyMedialTrochlearand { get; set; }

        [RadioReportId("kne_m_070508", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsPlicaLateralisPatellae { get; set; }

        [RadioReportId("kne_m_070509", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public int? PlicaLateralisPatellaeWidthInMm { get; set; }

        [RadioReportId("kne_m_070511", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsLateralisReachesToPrekondylar { get; set; }

        [RadioReportId("kne_m_070513", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsLateralisChondropathyMedialPatella { get; set; }

        [RadioReportId("kne_m_070514", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        public bool IsLateralisChondropathyMedialTrochlearand { get; set; }

        [RadioReportId("kne_m_070219", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        [RadioReportId("kne_m_070219", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        public bool IsMedialFacet { get; set; }

        [RadioReportId("kne_m_070220", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        public bool IsPatellaRidge { get; set; }

        [RadioReportId("kne_m_070221", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        [RadioReportId("kne_m_070221", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        public bool IsLateralFacet { get; set; }

        public OuterbridgeClassificationType OuterbridgeClassificationType { get; set; }

        [RadioReportId("kne_m_070319", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        public int? ExpansivenessMaxDiameterInMm { get; set; }

        public MorphologyType MorphologyType { get; set; }

        [RadioReportId("kne_m_070515", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        public bool IsChondrocalcinosis { get; set; }

        [RadioReportId("kne_m_070223", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsContusionEdemaMedial { get; set; }

        [RadioReportId("kne_m_070224", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsAvulsionMedialPatella { get; set; }

        [RadioReportId("kne_m_070225", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsContusionEdemaLateral { get; set; }

        [RadioReportId("kne_m_070226", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsSoftPartEdema { get; set; }

        [RadioReportId("kne_m_070227", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsOsteochondralLesionInferomedial { get; set; }

        [RadioReportId("kne_m_070228", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsOsteochondralLesionLateral { get; set; }

        [RadioReportId("kne_m_070229", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsLooseBody { get; set; }

        [RadioReportId("kne_m_070230", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        public bool IsMedialPatellofemoralRupture { get; set; }

        public MedialPatellofemoralRuptureType MedialPatellofemoralRuptureType { get; set; }

        public PatellaPositionType PatellaPositionType { get; set; }

        public PatellaClassificationType ClassificationType { get; set; }

        [RadioReportId("kne_m_070326", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        public bool IsBoneMarrowEdema { get; set; }

        public PatellaDetectionDissekatType DetectionDissekatType { get; set; }

        public ClassificationRegardingJointsType ClassificationRegardingJointsType { get; set; }

        [RadioReportId("kne_m_070418", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        public bool IsLesionDiameter { get; set; }

        [RadioReportId("kne_m_070419", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        public int? LesionDiameterInMm { get; set; }

        [RadioReportId("kne_m_070421", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        public bool IsOldLesion { get; set; }

    }
}
