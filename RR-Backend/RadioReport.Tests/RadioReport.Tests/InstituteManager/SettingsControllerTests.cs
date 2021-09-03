using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Mvc;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Core.InstituteManager.API.Controllers;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models;
using Xunit;

namespace RadioReport.Tests.InstituteManager
{
    public class SettingsControllerTests
    {
        private readonly ISettingsHttpManager _settingsHttpManager;

        private readonly SettingsController _classUnderTest;

        public SettingsControllerTests()
        {
            _settingsHttpManager = A.Fake<ISettingsHttpManager>();
            _classUnderTest = new SettingsController(_settingsHttpManager);
        }

        [Fact]
        public async Task Initialize_InvalidModelState_BadRequestReturned()
        {
            // Arrange
            _classUnderTest.ModelState.AddModelError("sth", "strange");
            
            // Act
            var result = await _classUnderTest.Initialize(new InstituteConfigurationFile());
            
            // Assert
            Assert.IsType<BadRequestResult>(result.Result);        
        }

        [Fact]
        public async Task Initialize_InvalidInstituteJwt_BadRequestReturned()
        {
            // Arrange
            
            // Act
            var result = await _classUnderTest.Initialize(new InstituteConfigurationFile());
            
            // Assert
            Assert.IsType<BadRequestResult>(result.Result);        
        }
        
        [Fact]
        public async Task Initialize_InvalidInstituteConfiguratonFile_BadRequestReturned()
        {
            // Arrange
            
            // Act
            var result = await _classUnderTest.Initialize(null);
            
            // Assert
            Assert.IsType<BadRequestResult>(result.Result);        
        }
        
        [Fact]
        public async Task Initialize_ValidInstituteConfiguratonFile_OkReturned()
        {
            // Arrange
            A.CallTo(() => _settingsHttpManager.InitializeInstitute(A<InstituteConfigurationFile>.Ignored)).Returns(Task.FromResult(new RequestResponse(true)));
            
            // Act
            var result = await _classUnderTest.Initialize(new InstituteConfigurationFile
            {
                InstituteLogo = new InstituteLogo(),
                InstituteConfigJwt = "token"
            });
            
            // Assert
            Assert.IsType<OkObjectResult>(result.Result);
        }

    }
}
