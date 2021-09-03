using System;
using System.Collections.Generic;
using RadioReport.Common.Enums;

namespace RadioReport.Common.Consts
{
    public static class ReportTypeNames
    {
        public const string AbdomenMRT = nameof(AbdomenMRT);
        public const string AbdomenCT = nameof(AbdomenCT);
        public const string AngiographyMRT = nameof(AngiographyMRT);
        public const string CardioMRT = nameof(CardioMRT);
        public const string ElbowMRT = nameof(ElbowMRT);
        public const string FeetMRT = nameof(FeetMRT);
        public const string HandMRT = nameof(HandMRT);
        public const string HipMRT = nameof(HipMRT);
        public const string KneeMRT = nameof(KneeMRT);
        public const string MammaMRT = nameof(MammaMRT);
        public const string PelvisMRT = nameof(PelvisMRT);
        public const string ShoulderMRT = nameof(ShoulderMRT);
        public const string SpineMRT = nameof(SpineMRT);
        public const string ThoraxMRT = nameof(ThoraxMRT);
        public const string SpineCT = nameof(SpineCT);
        public const string ThoraxCT = nameof(ThoraxCT);
        public const string MammaMX = nameof(MammaMX);
        public const string NeckMRT = nameof(NeckMRT);
        public const string HeadMRT = nameof(HeadMRT);
        public const string AngiographyCT = nameof(AngiographyCT);
        public const string HeadCT = nameof(HeadCT);

        public static IList<string> GetReportTypeNames() =>
            new List<string>
            {
                AbdomenMRT,
                AbdomenCT,
                AngiographyMRT,
                CardioMRT,
                ElbowMRT,
                FeetMRT,
                HandMRT,
                HipMRT,
                KneeMRT,
                MammaMRT,
                PelvisMRT,
                ShoulderMRT,
                SpineMRT,
                ThoraxMRT,
                SpineCT,
                ThoraxCT,
                MammaMX,
                NeckMRT,
                HeadMRT,
                AngiographyCT,
                HeadCT
            };

        public static string GetReportTypeName(this ModuleType module) =>
            module switch
            {
                ModuleType.AbdomenMRT => AbdomenMRT,
                ModuleType.AbdomenCT => AbdomenCT,
                ModuleType.AngiographyMRT => AngiographyMRT,
                ModuleType.CardioMRT => CardioMRT,
                ModuleType.ElbowMRT => ElbowMRT,
                ModuleType.FeetMRT => FeetMRT,
                ModuleType.HandMRT => HandMRT,
                ModuleType.HipMRT => HipMRT,
                ModuleType.KneeMRT => KneeMRT,
                ModuleType.MammaMRT => MammaMRT,
                ModuleType.PelvisMRT => PelvisMRT,
                ModuleType.ShoulderMRT => ShoulderMRT,
                ModuleType.SpineMRT => SpineMRT,
                ModuleType.ThoraxMRT => ThoraxMRT,
                ModuleType.SpineCT => SpineCT,
                ModuleType.ThoraxCT => ThoraxCT,
                ModuleType.MammaMX => MammaMX,
                ModuleType.NeckMRT => NeckMRT,
                ModuleType.HeadMRT => HeadMRT,
                ModuleType.AngiographyCT => AngiographyCT,
                ModuleType.HeadCT => HeadCT,
                _ => throw new ArgumentException($"unknown module type {module}")
            };

        public static readonly Dictionary<string, string> PrefixesDictionary = new Dictionary<string, string>
        {
            { MammaMRT, "mam_m" },
            { ShoulderMRT, "sho_m" },
            { SpineMRT, "spi_m" },
            { KneeMRT, "kne_m" },
            { CardioMRT, "car_m" },
            { ThoraxCT, "tho_c" },
            { HipMRT, "hip_m" },
            { SpineCT, "spi_c" },
            { AngiographyMRT, "ang_m" },
            { HandMRT, "han_m" },
            { ElbowMRT, "elb_m" },
            { PelvisMRT, "pel_m" },
            { FeetMRT, "anc_m" },
            { MammaMX, "mam_mx" },
            { AbdomenMRT, "abd_m" },
            { AbdomenCT, "abd_c" },
            { NeckMRT, "nec_m" },
            { ThoraxMRT, "tho_m" },
            { HeadMRT, "hea_m" },
            { AngiographyCT, "ang_c" },
            { HeadCT, "hea_c" }
        };
    }
}
