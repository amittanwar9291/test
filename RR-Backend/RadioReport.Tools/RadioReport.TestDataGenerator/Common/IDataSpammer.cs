using System.Threading.Tasks;

namespace RadioReport.TestDataGenerator.Common
{
    public interface IDataSpammer
    {
        Task SeedReportsAndPages(IHttpClientWrapper httpClientWrapper, string moduleUrl, int numberOfRequests = 1);
    }
}
