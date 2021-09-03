using System;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    [Flags]
    public enum MusculatureLocations
    {
        None = 0,

        [RadioReportId("kne_m_0802114")]
        MusculatureMVvastusIntermedius = 1,

        [RadioReportId("kne_m_0802115")]
        MusculatureMRectusFemoris = 2,

        [RadioReportId("kne_m_0802116")]
        MusculatureMVastusMedialis = 4,

        [RadioReportId("kne_m_0802117")]
        MusculatureMSartorius = 8,

        [RadioReportId("kne_m_0802118")]
        MusculatureMSemitendinosus = 16,

        [RadioReportId("kne_m_0802119")]
        MusculatureMGastrocnemiusCaputMediale = 32,

        [RadioReportId("kne_m_0802120")]
        MusculatureMGracilis = 64,

        [RadioReportId("kne_m_0802121")]
        MusculatureMAdductorMagnus = 128,

        [RadioReportId("kne_m_0802122")]
        MusculatureMSemimembranosus = 256,

        [RadioReportId("kne_m_0802123")]
        MusculatureMPopliteus = 512,

        [RadioReportId("kne_m_0802124")]
        MusculatureMSoleus = 1024,

        [RadioReportId("kne_m_0802125")]
        MusculatureMPlantaris = 2048,

        [RadioReportId("kne_m_0802126")]
        MusculatureMGastrocnemiusCaputLaterale = 4096,

        [RadioReportId("kne_m_0802127")]
        MusculatureMTibialisAnterior = 8192,

        [RadioReportId("kne_m_080370")]
        MusculatureTractusIliotibialis = 16384,

        [RadioReportId("kne_m_080371")]
        MusculatureMVastusLateralis = 32768,

        [RadioReportId("kne_m_080372")]
        MusculatureMTibialisPosterior = 65536,

        [RadioReportId("kne_m_080373")]
        MusculatureMExtensorDigitorumLongus = 131072,

        [RadioReportId("kne_m_080374")]
        MusculatureMBicepsFemoris = 262144
    }
}
