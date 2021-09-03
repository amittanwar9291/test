using Newtonsoft.Json;
using RadioReport.Common.Exceptions;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace RadioReport.TestDataGenerator.Common
{
    public class DataGeneratorHttpClientWrapper : HttpClientWrapper
    {
        public override async Task<T> SendHttpRequest<T>(string url, HttpMethod httpMethod, object messageContent)
        {
            T result = default(T);

            if (!Uri.IsWellFormedUriString(url, UriKind.Absolute))
            {
                throw new ArgumentException($"Malformed url: {url}");
            }

            HttpRequestMessage message = new HttpRequestMessage(httpMethod, url);
            string contentString = string.Empty;

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
                var exception = new HttpRequestException($"Request failed with status {(int)response?.StatusCode}");
                exception.Data.Add("StatusCode", (int)response?.StatusCode);
                exception.Data.Add("Content", contentString);
                throw exception;
            }

            return result;
        }
    }
}
