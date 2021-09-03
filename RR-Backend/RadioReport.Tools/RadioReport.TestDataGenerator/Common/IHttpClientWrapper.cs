using System.Net.Http;
using System.Threading.Tasks;

namespace RadioReport.TestDataGenerator.Common
{
    public interface IHttpClientWrapper
    {
        Task<T> SendHttpRequest<T>(string url, HttpMethod httpMethod, object messageContent);
        Task<T> SendGetRequest<T>(string url);
        Task<object> SendGetRequest(string url);
        Task<T> SendGetRequest<T>(string url, object messageContent);
        Task<T> SendPostRequest<T>(string url, object messageContent);
        Task<object> SendPostRequest(string url, object messageContent);
        Task<T> SendPutRequest<T>(string url, object messageContent);
        Task<object> SendPutRequest(string url, object messageContent);
    }
}
