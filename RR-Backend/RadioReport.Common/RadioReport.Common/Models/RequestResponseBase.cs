namespace RadioReport.Common.Models
{
    public abstract class RequestResponseBase
    {
        public bool IsSuccess { get; }
        
        protected RequestResponseBase(bool isSuccess)
        {
            IsSuccess = isSuccess;
        }
    }
}