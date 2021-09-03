using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.API.Controllers;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models;
using RadioReport.Core.InstituteManager.Domain.Models.InstituteList;
using Xunit;

namespace RadioReport.Tests.InstituteManager
{
    public class InstituteControllerTests
    {
        private readonly IInstituteHttpManager _instituteHttpManager;

        private readonly InstituteController _classUnderTest;

        public InstituteControllerTests()
        {
            _instituteHttpManager = A.Fake<IInstituteHttpManager>();
            _classUnderTest = new InstituteController(_instituteHttpManager);
        }

        [Fact]
        public async Task GetAll_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.GetAllAsync()).Returns(new List<Institute>());

            // Act
            var result = await _classUnderTest.Get();

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task GetById_ResultReturned()
        {
            // Arrange
            A.CallTo(_instituteHttpManager)
                .Where(call => call.Method.Name == "GetByIdAsync")
                .WithReturnType<Institute>()
                .Returns(new Institute());

            // Act
            var result = await _classUnderTest.Get(Guid.NewGuid());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<Institute>>(result);
        }

        [Fact]
        public async Task Add_ResultReturned()
        {
            // Arrange
            A.CallTo(_instituteHttpManager)
                .Where(call => call.Method.Name == "AddAsync")
                .WithReturnType<Institute>()
                .Returns(new Institute());

            // Act
            var result = await _classUnderTest.Add(new Institute());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<Institute>>(result);
        }

        [Fact]
        public async Task EditWithId_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.UpdateAsync(new Institute())).Returns(new Institute());

            // Act
            var result = await _classUnderTest.Edit(Guid.NewGuid(), new Institute());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<Institute>>(result);
        }

        [Fact]
        public async Task Edit_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.UpdateAsync(new Institute())).Returns(new Institute());

            // Act
            var result = await _classUnderTest.Edit(new Institute());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<Institute>>(result);
        }

        [Fact]
        public async Task Delete_ResultReturned()
        {
            // Arrange

            // Act
            var result = await _classUnderTest.Delete(new Guid());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async Task GetInstituteToken_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.GetInstituteToken()).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.GetInstituteToken();

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task CreateInstituteToken_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.UpdateInstituteToken()).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.UpdateInstituteToken();

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task UpdateDuplicateMultiExternalIdentifierAllowed_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.UpdateDuplicateMultiExternalIdentifierAllowed(true)).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.UpdateDuplicateExternalIdentifierAllowed(true);

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task GetAvailableModules_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.GetAvailableModules()).Returns(new AvailableModulesResponse(true, new List<string>()));

            // Act
            var result = await _classUnderTest.GetAvailableModules();

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<AvailableModulesResponse>>(result);
        }

        [Fact]
        public async Task UploadInstituteLogo_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.UploadInstituteLogo(new InstituteLogo())).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.UploadInstituteLogo(new InstituteLogo());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task GetInstituteLogo_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.GetInstituteLogo()).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.GetInstituteLogo();

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task GetHtmlTemplates_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.GetHtmlTemplates()).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.GetHtmlTemplates();

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task UploadHtmlTemplates_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.UploadHtmlTemplates(new HtmlTemplates())).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.UploadHtmlTemplates(new HtmlTemplates());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task RemoveHtmlTemplates_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.RemoveHtmlTemplates(new HtmlTemplates())).Returns(RequestResponse.Success());

            // Act
            var result = await _classUnderTest.RemoveHtmlTemplates(new HtmlTemplates());

            // Assert
            Assert.NotNull(result);
            Assert.IsType<ActionResult<RequestResponse>>(result);
        }

        [Fact]
        public async Task ListInstitutes_ResultReturned()
        {
            // Arrange
            A.CallTo(() => _instituteHttpManager.GetInstitutes(A<InstituteListOptions>.Ignored)).Returns(new InstituteListResponse());

            // Act
            var result = await _classUnderTest.List(new InstituteListOptions());

            // Assert
            Assert.NotNull(result);
            A.CallTo(() => _instituteHttpManager.GetInstitutes(A<InstituteListOptions>.Ignored)).MustHaveHappened();
        }
    }
}
