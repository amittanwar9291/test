using System.Threading.Tasks;
using FakeItEasy;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Common.Models;
using RadioReport.Core.ExportInterface.Domain.Interfaces;
using RadioReport.Core.ExportInterface.Domain.Managers;
using Xunit;

namespace RadioReport.Tests.ExportInterface
{
    public class ExportHttpManagerTests
    {
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IHtmlTemplateService _htmlTemplateService;
        private readonly IInstituteLogoService _instituteLogoService;
        private readonly ICacheService _cacheService;
        private readonly IExportService _exportService;

        private readonly ExportHttpManager _classUnderTest;

        public ExportHttpManagerTests()
        {
            _kafkaProducer = A.Fake<IKafkaProducer>();
            _httpAuthContext = A.Fake<HttpAuthContext>();
            _htmlTemplateService = A.Fake<IHtmlTemplateService>();
            _instituteLogoService = A.Fake<IInstituteLogoService>();
            _cacheService = A.Fake<ICacheService>();
            _exportService = A.Fake<IExportService>();

            _classUnderTest = new ExportHttpManager(_kafkaProducer, _httpAuthContext, _cacheService, _htmlTemplateService, _instituteLogoService,
                _exportService);
        }

        [Fact]
        public async Task Export_EmptyParam_ThrowsException()
        {
            // Arrange

            // Act & assert 
            await Assert.ThrowsAsync<InvalidArgumentException>(() =>
                _classUnderTest.Export(new ExportRequest(), true));
        }
    }
}
