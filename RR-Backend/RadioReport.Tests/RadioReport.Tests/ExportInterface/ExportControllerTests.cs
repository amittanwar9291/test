using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Core.ExportInterface.API.Controllers;
using RadioReport.Core.ExportInterface.Domain.Interfaces;
using Xunit;

namespace RadioReport.Tests.ExportInterface
{
    public class ExportControllerTests
    {
        private readonly IExportHttpManager _exportHttpManager;

        private readonly ExportController _classUnderTest;

        public ExportControllerTests()
        {
            _exportHttpManager = A.Fake<IExportHttpManager>();
            _classUnderTest = new ExportController(_exportHttpManager);
        }

        [Fact]
        public async Task Export_Get_ResultReturned()
        {
            // Arrange
            _classUnderTest.ControllerContext = new ControllerContext { HttpContext = new DefaultHttpContext() };
            A.CallTo(() => _exportHttpManager.Export(A<ExportRequest>.Ignored, A<bool>.Ignored)).Returns(new JObject());

            // Act
            var result = await _classUnderTest.Export(new ExportRequest());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task Export_Post_ResultReturned()
        {
            // Arrange
            _classUnderTest.ControllerContext = new ControllerContext { HttpContext = new DefaultHttpContext() };
            A.CallTo(() => _exportHttpManager.Export(A<ExportRequest>.Ignored, A<bool>.Ignored)).Returns(new JObject());

            // Act
            var result = await _classUnderTest.Export(new ExportRequest());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }
    }
}
