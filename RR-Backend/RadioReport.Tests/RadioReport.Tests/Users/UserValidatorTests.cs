using System;
using System.Linq;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;
using RadioReport.Core.Users.Domain.Models.Entities;
using RadioReport.Core.Users.Domain.Validators;
using RadioReport.Core.Users.Repo;
using RadioReport.Core.Users.Repo.Repositories;
using Xunit;

namespace RadioReport.Tests.Users
{
    public class UserViewModelServiceTests
    {
        private readonly HttpAuthContext _httpAuthContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly CoreUserDbContext _coreUserDbContext;

        private readonly ApplicationUserValidator _classUnderTest;
        
        public UserViewModelServiceTests()
        {
            _httpAuthContext = A.Fake<HttpAuthContext>();
            _userManager = A.Fake<UserManager<ApplicationUser>>();

            var optionsBuilder = new DbContextOptionsBuilder<CoreUserDbContext>();
            optionsBuilder.UseInMemoryDatabase(Guid.NewGuid().ToString());
            _coreUserDbContext = new CoreUserDbContext(optionsBuilder.Options);
            
            _classUnderTest = new ApplicationUserValidator(new ApplicationUserRepository(new CoreUserDbContext(optionsBuilder.Options), _httpAuthContext));
        }
        
        [Fact]
        public async void Validate_UserNameContainsInvalidChars_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "öäü_invalid",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);
            
            // Assert
            Assert.NotEmpty(result.Errors);
            Assert.Equal("InvalidUserName", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_DuplicateUserNameAndInstitute_ReturnError()
        {
            // Arrange
            var instituteId = Guid.NewGuid();
            var user1 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "AD",
                InstituteId = instituteId
            };
            var user2 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "AD",
                InstituteId = instituteId
            };
            await _coreUserDbContext.ApplicationUsers.AddAsync(user1);
            await _coreUserDbContext.SaveChangesAsync();
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user2);
            
            // Assert
            Assert.NotEmpty(result.Errors);
            Assert.Equal("DuplicateUserName", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_DuplicateInitialAndInstitute_ReturnError()
        {
            // Arrange
            var instituteId = Guid.NewGuid();
            var user1 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad1",
                Initial = "AD",
                InstituteId = instituteId
            };
            var user2 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad2",
                Initial = "AD",
                InstituteId = instituteId
            };
            await _coreUserDbContext.ApplicationUsers.AddAsync(user1);
            await _coreUserDbContext.SaveChangesAsync();
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user2);
            
            // Assert
            Assert.NotEmpty(result.Errors);
            Assert.Equal("DuplicateUserInitial", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_DuplicateUserNameAndUniqueInstitute_ReturnSuccess()
        {
            // Arrange
            var user1 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            var user2 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            await _coreUserDbContext.ApplicationUsers.AddAsync(user1);
            await _coreUserDbContext.SaveChangesAsync();
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user2);
            
            // Assert
            Assert.Empty(result.Errors);
        }
        
        [Fact]
        public async void Validate_DuplicateInitialAndUniqueInstitute_ReturnError()
        {
            // Arrange
            var user1 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad1",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            var user2 = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad2",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            await _coreUserDbContext.ApplicationUsers.AddAsync(user1);
            await _coreUserDbContext.SaveChangesAsync();
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user2);
            
            // Assert
            Assert.Empty(result.Errors);
        }
        
        [Fact]
        public async void Validate_InvalidUserName_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);

            Assert.NotEmpty(result.Errors);
            Assert.Equal("InvalidUserName", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_InvalidSalutation_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.None,
                UserName = "ad",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);

            Assert.NotEmpty(result.Errors);
            Assert.Equal("Salutation", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_InvalidFirstName_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);

            Assert.NotEmpty(result.Errors);
            Assert.Equal("FirstName", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_InvalidSurName_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);

            Assert.NotEmpty(result.Errors);
            Assert.Equal("Surname", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_InvalidInitial_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "ad",
                Initial = "",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);

            Assert.NotEmpty(result.Errors);
            Assert.Equal("Initial", result.Errors.First().Code);
        }
        
        [Fact]
        public async void Validate_InvalidUserName2_ReturnError()
        {
            // Arrange
            var user = new ApplicationUser()
            {
                FirstName = "Adminis",
                Surname = "trator",
                Salutation = Salutation.Mr,
                UserName = "",
                Initial = "AD",
                InstituteId = Guid.NewGuid()
            };
            
            // Act
            var result = await _classUnderTest.ValidateAsync(_userManager, user);

            Assert.Equal(2, result.Errors.Count());
            Assert.Equal("InvalidUserName", result.Errors.First().Code);
            Assert.Equal("UserName", result.Errors.Last().Code);
        }
    }
}
