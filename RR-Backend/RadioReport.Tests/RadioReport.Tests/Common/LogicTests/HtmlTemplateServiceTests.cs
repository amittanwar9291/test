using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using FakeItEasy;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Core.Logic.Services;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Managers;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class HtmlTemplateServiceTests
    {
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly IMinIOService _minIOServiceFake;
     
        private readonly HtmlTemplateService _classUnderTest;

        public HtmlTemplateServiceTests()
        {
            _minIOServiceFake = A.Fake<IMinIOService>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            
            _classUnderTest = new HtmlTemplateService(_minIOServiceFake, _httpAuthContextFake);
        }
        
        [Fact]
        public async Task GetHtmlTemplates_ThrowException()
        {
            // Arrange   
            A.CallTo(() =>
                    _minIOServiceFake.CreateBucketIfNotExist(A<string>.Ignored, A<CancellationToken>.Ignored))
                .Throws(() => new Exception());

            // Act & assert 
            await Assert.ThrowsAsync<InstituteHtmlTemplateFailedException>(() => _classUnderTest.GetHtmlTemplates());
        }
    }
}
