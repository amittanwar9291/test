using System.Threading.Tasks;
using FakeItEasy;
using RadioReport.Common.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Services;
using Xunit;
using static RadioReport.Tests.Helpers.FakeHelper;

namespace RadioReport.Tests.InstituteManager
{
    public class InstituteServiceTests
    {
        private readonly ICacheService _cacheServiceFake;
        private readonly InstituteService _classUnderTest;

        public InstituteServiceTests()
        {
            _cacheServiceFake = A.Fake<ICacheService>();
            _classUnderTest = new InstituteService(_cacheServiceFake);
        }

        [Fact]
        public async Task GetAvailableModules_KeyNotExists_EmptyListReturned()
        {
            // Arrange
            A.CallTo(() => _cacheServiceFake.TryGet(IgnoredString)).Returns((false, "any"));

            // Act
            var result = await _classUnderTest.GetAvailableModules();

            // Assert
            Assert.NotNull(result);
            Assert.Empty(result);
        }

        [Fact]
        public async Task GetAvailableModules_KeyExists_ListReturned()
        {
            // Arrange
            A.CallTo(() => _cacheServiceFake.TryGet(IgnoredString)).Returns((true, "any"));
            A.CallTo(() => _cacheServiceFake.GetList(IgnoredString)).Returns(new[] { "one", "two" });

            // Act
            var result = await _classUnderTest.GetAvailableModules();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count);
            Assert.Contains("one", result);
            Assert.Contains("two", result);
        }
    }
}
