namespace RadioReport.DatabaseMigrator
{
    public enum DatabaseDeleteBehavior
    {
        DeleteOnlyChanged,
        DeleteAllButCore,
        DeleteAll
    }
}
