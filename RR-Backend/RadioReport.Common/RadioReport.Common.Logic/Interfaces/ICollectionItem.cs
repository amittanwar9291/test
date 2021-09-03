namespace RadioReport.Common.Logic.Interfaces
{
    public interface ICollectionItem: IDeletableItem
    {
        byte Number { get; set; }
        string InstanceName { get; }
    }
}
