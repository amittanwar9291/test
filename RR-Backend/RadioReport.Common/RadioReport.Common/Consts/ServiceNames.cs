using RadioReport.Common.Enums;

namespace RadioReport.Common.Consts
{
    public static class ServiceNames
    {
        public static readonly string AngiographyMRT = ModuleType.AngiographyMRT.GetReportTypeName();
        public static readonly string CardioMRT = ModuleType.CardioMRT.GetReportTypeName();
        public static readonly string ElbowMRT = ModuleType.ElbowMRT.GetReportTypeName();
        public static readonly string FeetMRT = ModuleType.FeetMRT.GetReportTypeName();
        public static readonly string HandMRT = ModuleType.HandMRT.GetReportTypeName();
        public static readonly string HipMRT = ModuleType.HipMRT.GetReportTypeName();
        public static readonly string KneeMRT = ModuleType.KneeMRT.GetReportTypeName();
        public static readonly string MammaMRT = ModuleType.MammaMRT.GetReportTypeName();
        public static readonly string PelvisMRT = ModuleType.PelvisMRT.GetReportTypeName();
        public static readonly string ShoulderMRT = ModuleType.ShoulderMRT.GetReportTypeName();
        public static readonly string SpineCT = ModuleType.SpineCT.GetReportTypeName();
        public static readonly string SpineMRT = ModuleType.SpineMRT.GetReportTypeName();
        public static readonly string ThoraxCT = ModuleType.ThoraxCT.GetReportTypeName();
        public static readonly string ThoraxMRT = ModuleType.ThoraxMRT.GetReportTypeName();
        public static readonly string MammaMX = ModuleType.MammaMX.GetReportTypeName();
        public static readonly string AbdomenMRT = ModuleType.AbdomenMRT.GetReportTypeName();
        public static readonly string AbdomenCT = ModuleType.AbdomenCT.GetReportTypeName();
        public static readonly string NeckMRT = ModuleType.NeckMRT.GetReportTypeName();
        public static readonly string HeadMRT = ModuleType.HeadMRT.GetReportTypeName();
        public static readonly string AngiographyCT = ModuleType.AngiographyCT.GetReportTypeName();
        public static readonly string HeadCT = ModuleType.HeadCT.GetReportTypeName();
        public static readonly string CenterSpecificSettings = nameof(CenterSpecificSettings);
        public static readonly string ExportInterface = nameof(ExportInterface);
        public static readonly string InstituteManager = nameof(InstituteManager);
        public static readonly string PatientManager = nameof(PatientManager);
        public static readonly string ImportInterface = nameof(ImportInterface);
        public static readonly string ReportList = nameof(ReportList);
        public static readonly string SignalR = nameof(SignalR);
        public static readonly string Tracking = nameof(Tracking);
        public static readonly string Users = nameof(Users);
        public static readonly string FileExposer = nameof(FileExposer);
        public static readonly string Scheduler = nameof(Scheduler);
        public static readonly string HtmlRender = nameof(HtmlRender);
        public static readonly string LicenseManager = nameof(LicenseManager);
        public static readonly string FakeDataGenerator = nameof(FakeDataGenerator);
        public static readonly string Ocelote = nameof(Ocelote);
        public static readonly string Statistics = nameof(Statistics);
    }
}
