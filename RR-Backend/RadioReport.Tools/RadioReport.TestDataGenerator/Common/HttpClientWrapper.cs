using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RadioReport.Common.Exceptions;

namespace RadioReport.TestDataGenerator.Common
{
    public class HttpClientWrapper : IDisposable, IHttpClientWrapper
    {
        protected readonly HttpClient httpClient;

        public HttpClientWrapper()
        {
            httpClient = new HttpClient();
        }

        public void Dispose()
        {
            httpClient.Dispose();
        }

        public Task<object> SendHttpRequest(string url, HttpMethod httpMethod, object messageContent) => SendHttpRequest<object>(url, httpMethod, messageContent);

        public virtual async Task<T> SendHttpRequest<T>(string url, HttpMethod httpMethod, object messageContent)
        {
            var result = default(T);

            if (!Uri.IsWellFormedUriString(url, UriKind.Absolute))
            {
                throw new ArgumentException($"Malformed url: {url}");
            }

            var message = new HttpRequestMessage(httpMethod, url);
            var contentString = string.Empty;

            if (messageContent != null)
            {
                contentString = JsonConvert.SerializeObject(messageContent);
            }

            message.Content = new StringContent(contentString, Encoding.UTF8, "application/json");

            var response = await httpClient.SendAsync(message);

            if (response != null && response.IsSuccessStatusCode && response.Content != null)
            {
                var resultString = await response.Content.ReadAsStringAsync();
                result = JsonConvert.DeserializeObject<T>(resultString);
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                throw new ServiceNotFoundException($"Entity at ${url} was not found");
            }
            else
            {
                var exception = new HttpRequestException($"Request failed with status {(int) response?.StatusCode}");
                exception.Data.Add("StatusCode", (int) response?.StatusCode);
                throw exception;
            }

            return result;
        }

        public Task<object> SendGetRequest(string url) => SendGetRequest<object>(url, null);

        public Task<T> SendGetRequest<T>(string url) => SendGetRequest<T>(url, null);

        public Task<T> SendGetRequest<T>(string url, object messageContent) => SendHttpRequest<T>(url, HttpMethod.Get, messageContent);

        public Task<T> SendPostRequest<T>(string url, object messageContent) => SendHttpRequest<T>(url, HttpMethod.Post, messageContent);

        public Task<object> SendPostRequest(string url, object messageContent) => SendPostRequest<object>(url, messageContent);

        public Task<T> SendPutRequest<T>(string url, object messageContent) => SendHttpRequest<T>(url, HttpMethod.Put, messageContent);

        public Task<object> SendPutRequest(string url, object messageContent) => SendPutRequest<object>(url, messageContent);
    }
}
