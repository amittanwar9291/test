using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using FakeItEasy;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Managers;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;
using Xunit;

namespace RadioReport.Tests.InstituteManager
{
    public class InstituteHttpManagerTests
    {
        private readonly IInstituteManager _instituteManager;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly IHtmlTemplateService _htmlTemplateService;
        private readonly IInstituteLogoService _instituteLogoService;
        private readonly IInstituteService _instituteServiceFake;

        private readonly InstituteHttpManager _classUnderTest;

        public InstituteHttpManagerTests()
        {
            _instituteManager = A.Fake<IInstituteManager>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _htmlTemplateService = A.Fake<IHtmlTemplateService>();
            _instituteLogoService = A.Fake<IInstituteLogoService>();
            _instituteServiceFake = A.Fake<IInstituteService>();

            _classUnderTest = new InstituteHttpManager(_instituteManager, _httpAuthContextFake,
                _htmlTemplateService, _instituteLogoService, _instituteServiceFake);
        }

        [Fact]
        public async Task GetInstituteToken_InvalidInstitute_ThrowException()
        {
            // Arrange   
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns((Institute) null);

            // Act & assert 
            await Assert.ThrowsAsync<InstituteNotFoundException>(() => _classUnderTest.GetInstituteToken());
        }

        [Fact]
        public async Task GetInstituteToken_ValidInstitute_ResultReturned()
        {
            // Arrange   
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.GetInstituteToken();

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
            Assert.Equal(token, result.Payload);
        }

        [Fact]
        public async Task UpdateInstituteToken_InvalidInstitute_ThrowException()
        {
            // Arrange   
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns((Institute) null);

            // Act & assert 
            await Assert.ThrowsAsync<InstituteNotFoundException>(() => _classUnderTest.UpdateInstituteToken());
        }

        [Fact]
        public async Task UpdateInstituteToken_ValidInstitute_ResultReturned()
        {
            // Arrange   
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new Institute());

            // Act
            var result = await _classUnderTest.UpdateInstituteToken();

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
        }

        [Fact]
        public async Task UpdateDuplicateMultiExternalIdentifierAllowed_InvalidInstitute_ThrowException()
        {
            // Arrange   
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns((Institute) null);

            // Act & assert 
            await Assert.ThrowsAsync<InstituteNotFoundException>(() =>
                _classUnderTest.UpdateDuplicateMultiExternalIdentifierAllowed(true));
        }

        [Fact]
        public async Task UpdateDuplicateMultiExternalIdentifierAllowed_ValidInstitute_ResultReturned()
        {
            // Arrange   
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new Institute());

            // Act
            var result = await _classUnderTest.UpdateDuplicateMultiExternalIdentifierAllowed(true);

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
        }

        [Fact]
        public async Task UploadInstituteLogo_ResultReturned()
        {
            // Act
            var result = await _classUnderTest.UploadInstituteLogo(new InstituteLogo() { Content = string.Empty });

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
            Assert.True(result.IsSuccess);
        }

        [Fact]
        public async Task GetInstituteLogo_ResultReturned()
        {
            // Act
            var result = await _classUnderTest.GetInstituteLogo();

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
            Assert.True(result.IsSuccess);
        }

        [Fact]
        public async Task GetHtmlTemplates_ResultReturned()
        {
            // Act
            var result = await _classUnderTest.GetHtmlTemplates();

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
            Assert.True(result.IsSuccess);
        }

        [Fact]
        public async Task UploadHtmlTemplates_ResultReturned()
        {
            // Act
            var result = await _classUnderTest.UploadHtmlTemplates(new HtmlTemplates());

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
            Assert.True(result.IsSuccess);
        }

        [Fact]
        public async Task RemoveHtmlTemplates_ResultReturned()
        {
            // Act
            var result = await _classUnderTest.RemoveHtmlTemplates(new HtmlTemplates());

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<RequestResponse>(result);
            Assert.True(result.IsSuccess);
        }

        [Fact]
        public async Task GetByIdAsync_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.GetByIdAsync(Guid.NewGuid());

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<Institute>(result);
            Assert.Equal(token, result.InstituteToken);
        }

        [Fact]
        public async Task GetByIdAsyncWithIncludes_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() => _instituteManager.GetByIdAsync(A<Guid>.Ignored, A<string[]>.Ignored,
                    A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.GetByIdAsync(Guid.NewGuid(), new[] { "Test" });

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<Institute>(result);
            Assert.Equal(token, result.InstituteToken);
        }

        [Fact]
        public async Task GetByIdsAsync_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetByIdsAsync(A<List<Guid>>.Ignored,
                        A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new List<Institute>() { new Institute() { InstituteToken = token } });

            // Act
            var result = await _classUnderTest.GetByIdsAsync(new List<Guid>() { Guid.NewGuid() });

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<List<Institute>>(result);
            Assert.Single(result);
            Assert.Equal(token, result[0].InstituteToken);
        }

        [Fact]
        public async Task GetAsNoTrackingAsync_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                _instituteManager.GetAsNoTrackingAsync(A<Guid>.Ignored)).Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.GetAsNoTrackingAsync(Guid.NewGuid());

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<Institute>(result);
            Assert.Equal(token, result.InstituteToken);
        }

        [Fact]
        public async Task GetAllAsync_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetAllAsync())
                .Returns(new List<Institute>() { new Institute() { InstituteToken = token } });

            // Act
            var result = await _classUnderTest.GetAllAsync();

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<List<Institute>>(result);
            Assert.Single(result);
            Assert.Equal(token, result[0].InstituteToken);
        }

        [Fact]
        public async Task GetManyQueryable_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetManyQueryable(A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new EnumerableQuery<Institute>(new List<Institute>() { new Institute() { InstituteToken = token } }));

            // Act
            var result = _classUnderTest.GetManyQueryable(null);

            // Assert 
            Assert.NotNull(result);
            Assert.IsAssignableFrom<IQueryable<Institute>>(result);
            Assert.Single(result);
            Assert.Equal(token, result.First().InstituteToken);
        }

        [Fact]
        public async Task GetManyAsync_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetManyAsync(A<Expression<Func<Institute, bool>>>.Ignored))
                .Returns(new List<Institute>() { new Institute() { InstituteToken = token } });

            // Act
            var result = await _classUnderTest.GetManyAsync(null);

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<List<Institute>>(result);
            Assert.Single(result);
            Assert.Equal(token, result[0].InstituteToken);
        }

        [Fact]
        public async Task GetSingleAsync_ResultReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.GetSingleAsync(A<Expression<Func<Institute, bool>>>.Ignored, A<string[]>.Ignored))
                .Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.GetSingleAsync(null);

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<Institute>(result);
            Assert.Equal(token, result.InstituteToken);
        }

        [Fact]
        public async Task AnyAsync_FalseReturned()
        {
            //Arrange
            A.CallTo(() =>
                    _instituteManager.AnyAsync(Guid.NewGuid()))
                .Returns(false);

            // Act
            var result = await _classUnderTest.AnyAsync(Guid.NewGuid());

            // Assert 
            Assert.False(result);
        }

        [Fact]
        public async Task AnyAsync_TrueReturned()
        {
            //Arrange
            A.CallTo(() =>
                    _instituteManager.AnyAsync(A<Guid>.Ignored))
                .Returns(true);

            // Act
            var result = await _classUnderTest.AnyAsync(Guid.NewGuid());

            // Assert 
            Assert.True(result);
        }

        [Fact]
        public async Task AddAsync_TrueReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() =>
                    _instituteManager.AddAsync(A<Institute>.Ignored, false))
                .Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.AddAsync(new Institute());

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<Institute>(result);
            Assert.Equal(token, result.InstituteToken);
        }

        [Fact]
        public async Task AddRangeAsync_TrueReturned()
        {
            //Arrange & Act
            await _classUnderTest.AddRangeAsync(new List<Institute>());
            A.CallTo(() => _instituteManager.AddRangeAsync(A<List<Institute>>.Ignored)).MustHaveHappened();
        }

        [Fact]
        public async Task UpdateAsync_TrueReturned()
        {
            //Arrange
            var token = "abcd";
            A.CallTo(() => _instituteManager.UpdateAsync(A<Institute>.Ignored)).Returns(new Institute() { InstituteToken = token });

            // Act
            var result = await _classUnderTest.UpdateAsync(new Institute());

            // Assert 
            Assert.NotNull(result);
            Assert.IsType<Institute>(result);
            Assert.Equal(token, result.InstituteToken);
        }

        [Fact]
        public async Task UpdateByPropertiesAsync_TrueReturned()
        {
            //Arrange & Act
            await _classUnderTest.UpdateByPropertiesAsync(new Institute(), new List<string>() { string.Empty });
            A.CallTo(() => _instituteManager.UpdateByPropertiesAsync(A<Institute>.Ignored, A<List<string>>.Ignored)).MustHaveHappened();
        }

        [Fact]
        public async Task RemoveAsync_TrueReturned()
        {
            //Arrange & Act
            await _classUnderTest.RemoveAsync(Guid.NewGuid());
            A.CallTo(() => _instituteManager.RemoveAsync(A<Guid>.Ignored)).MustHaveHappened();
        }

        [Fact]
        public async Task RemoveAllAsync_TrueReturned()
        {
            //Arrange & Act
            await _classUnderTest.RemoveAllAsync();
            A.CallTo(() => _instituteManager.RemoveAllAsync()).MustHaveHappened();
        }

        [Fact]
        public async Task CountAsync_TrueReturned()
        {
            //Arrange
            A.CallTo(() => _instituteManager.CountAsync(A<Expression<Func<Institute, bool>>>.Ignored)).Returns(1);

            //Act
            var result = await _classUnderTest.CountAsync(null);

            // Assert 
            Assert.IsType<int>(result);
            Assert.Equal(1, result);
        }

        [Fact]
        public async Task IsAlive_TrueReturned()
        {
            //Arrange 
            A.CallTo(() => _instituteManager.IsAlive()).Returns(true);

            //Act
            var result = await _classUnderTest.IsAlive();

            // Assert 
            Assert.True(result);
        }

        [Fact]
        public async Task GetInstitutes_ResultReturned()
        {
            //Arrange 
            A.CallTo(() => _instituteManager.GetInstitutes(A<InstituteListOptions>.Ignored))
                .Returns(new PagedList<Institute>(new List<Institute>(), 1, 10, 20));

            //Act
            var result = await _classUnderTest.GetInstitutes(new InstituteListOptions());

            // Assert 
            Assert.NotNull(result);
        }
    }
}
