using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadCT.Domain.Enums.Examination;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadCT.Domain.Enums.Examination
{
    public enum DetailsType : byte
    {
        None=0,

        [RadioReportId("hea_c_010518", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        SubduralHematoma = 1,

        [RadioReportId("hea_c_010519", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        IntraparenchymalHemorrhage = 2,

        [RadioReportId("hea_c_010520", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        SubarachnoidHemorrhageSAH = 3,

        [RadioReportId("hea_c_010523", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        EpiduralHematoma = 4,

        [RadioReportId("hea_c_010547", InstanceName = nameof(ExaminationFindingType.Seizure))]
        KnownEpilepsy = 5,

        [RadioReportId("hea_c_010548", InstanceName = nameof(ExaminationFindingType.Seizure))]
        FirstSeizure = 6,

        [RadioReportId("hea_c_010552", InstanceName = nameof(ExaminationFindingType.Seizure))]
        StatusEpilepticus = 7,

        [RadioReportId("hea_c_010572", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        FocalNeurologicDeficit = 8,

        [RadioReportId("hea_c_010573", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        ClinicalSymptomInNeedOfClarification = 9,

        [RadioReportId("hea_c_0105120", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        ExclusionOfOrganicCorrelate = 10,

        [RadioReportId("hea_c_010574", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        AcuteDelirium = 11,

        [RadioReportId("hea_c_010575", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        IcpIncrease = 12,

        [RadioReportId("hea_c_0105119", InstanceName = nameof(ExaminationFindingType.OtherIndications))]
        DiagnosticWorkupOfClarifications = 13
    }
}
