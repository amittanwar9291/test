using System;
using RadioReport.Common.Consts;

namespace RadioReport.Common.Enums
{
    public enum ModuleType
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
    }

    public static class ModuleTypeExtension
    {
        public static string ToServiceName(this ModuleType moduleType) =>
            moduleType switch
            {
                ModuleType.AbdomenMRT => ServiceNames.AbdomenMRT,
                ModuleType.AbdomenCT => ServiceNames.AbdomenCT,
                ModuleType.AngiographyMRT => ServiceNames.AngiographyMRT,
                ModuleType.CardioMRT => ServiceNames.CardioMRT,
                ModuleType.ElbowMRT => ServiceNames.ElbowMRT,
                ModuleType.FeetMRT => ServiceNames.FeetMRT,
                ModuleType.HandMRT => ServiceNames.HandMRT,
                ModuleType.HipMRT => ServiceNames.HipMRT,
                ModuleType.KneeMRT => ServiceNames.KneeMRT,
                ModuleType.MammaMRT => ServiceNames.MammaMRT,
                ModuleType.PelvisMRT => ServiceNames.PelvisMRT,
                ModuleType.ShoulderMRT => ServiceNames.ShoulderMRT,
                ModuleType.SpineCT => ServiceNames.SpineCT,
                ModuleType.SpineMRT => ServiceNames.SpineMRT,
                ModuleType.ThoraxCT => ServiceNames.ThoraxCT,
                ModuleType.MammaMX => ServiceNames.MammaMX,
                ModuleType.ThoraxMRT => ServiceNames.ThoraxMRT,
                ModuleType.NeckMRT => ServiceNames.NeckMRT,
                ModuleType.HeadMRT => ServiceNames.HeadMRT,
                ModuleType.AngiographyCT => ServiceNames.AngiographyCT,
                ModuleType.HeadCT => ServiceNames.HeadCT,
                _ => throw new ArgumentOutOfRangeException(nameof(moduleType), moduleType, null)
            };

        // TODO exclude modules until problems fixed
        public static bool ReportSessionExcluded(this ModuleType moduleType) => false;
    }
}
