namespace RadioReport.Common.Logic.Enums
{
    public enum ReportStatus : byte
    {
        Unknown = 0,
        Open = 1,
        InProgress = 2,
        Completed = 3,
        Exported = 4,
        Canceled = 5,
        Approved = 6,
        Generated = 7
    }
}
