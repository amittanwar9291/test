using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models
{
    public class RequestResponse : RequestResponseBase
    {
        public RequestResponse(bool isSuccess, string payload = "", string reason = "") : base(isSuccess)
        {
            Payload = payload;
            Reason = reason;
        }

        public static RequestResponse Success(string payload = "") => new RequestResponse(true, payload);

        public static RequestResponse Fail(string reason = "") => new RequestResponse(false, string.Empty, reason);

        public string Payload { get; }
        public string Reason { get; }
    }
}
