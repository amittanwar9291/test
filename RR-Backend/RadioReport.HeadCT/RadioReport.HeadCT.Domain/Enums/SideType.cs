using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Enums.Anamnesis;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadCT.Domain.Enums.Vessels;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("hea_c_020248", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        [RadioReportId("hea_c_0202122", InstanceName = nameof(ClinicalSymptomType.Neglect))]
        [RadioReportId("hea_c_040250", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_040257", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0402101", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0402110", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        [RadioReportId("hea_c_040263", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        [RadioReportId("hea_c_080349", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_100310", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.SideType))]
        [RadioReportId("hea_c_100227", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.CarotidArterySideType))]
        Right = 1,

        [RadioReportId("hea_c_020249", InstanceName = nameof(ClinicalSymptomType.MotorDeficit))]
        [RadioReportId("hea_c_0202123", InstanceName = nameof(ClinicalSymptomType.Neglect))]
        [RadioReportId("hea_c_040251", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_040258", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0402102", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0402111", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        [RadioReportId("hea_c_040264", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        [RadioReportId("hea_c_080350", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_c_100311", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.SideType))]
        [RadioReportId("hea_c_100228", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.CarotidArterySideType))]
        Left = 2
    }
}