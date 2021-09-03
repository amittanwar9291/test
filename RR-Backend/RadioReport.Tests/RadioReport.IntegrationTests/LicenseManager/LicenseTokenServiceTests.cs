using System;
using System.Threading.Tasks;
using FakeItEasy;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Managers;
using RadioReport.Core.LicenseManager.Domain.Services;
using RadioReport.Core.LicenseManager.Repo;
using RadioReport.Core.LicenseManager.Repo.Repositories;
using RadioReport.IntegrationTests.Helpers;
using RadioReport.IntegrationTests.TestData;
using Xunit;

namespace RadioReport.IntegrationTests.LicenseManager
{
    public class LicenseTokenServiceTests
    {
        private readonly LicenseTokenService _classUnderTest;
        private readonly IKeyStoreService _keyStoreServiceFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly IKafkaProducer _kafkaProducerFake;
        private readonly IEncryptionService _encryptionServiceFake;

        // use UploadLicenseFile() to upload a license. Adjust following connectionstring, institute id + license consts accordingly. The institute id
        // must accord with the institute id the license token is configured for
        private const string TheConnectionString = ConnectionStrings.Localhost.LicenseManager;
        private const string TheLicenseToUpload = JwtToken.ValidLicenseToken4000Credits;
        private const string TheInstituteId = "cfdea220-325f-4450-af33-1c462ad38830";

        public LicenseTokenServiceTests()
        {
            _keyStoreServiceFake = A.Fake<IKeyStoreService>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _encryptionServiceFake = A.Fake<IEncryptionService>();
            var dbContext = DbIntegrationHelper.CreateDbContext<LicenseManagerDbContext>(TheConnectionString);
            var licenseFractionRepository = new LicenseFractionRepository(dbContext);
            var currentScoreRepository = new CurrentCreditScoreRepository(dbContext);
            var licenseRepository = new LicenseRepository(dbContext);
            _classUnderTest = new LicenseTokenService(_keyStoreServiceFake, _httpAuthContextFake, new LicenseFractionManager(licenseFractionRepository),
                new CurrentCreditScoreManager(currentScoreRepository, _httpAuthContextFake),
                new Core.LicenseManager.Domain.Managers.LicenseManager(licenseRepository, _httpAuthContextFake),
                _kafkaProducerFake, _encryptionServiceFake);
        }

        // [Fact]
        [Fact(Skip = "For development purposes")]
        public async Task UploadLicenseFile()
        {
            // Arrange
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.Parse(TheInstituteId));
            A.CallTo(() => _keyStoreServiceFake.GetByKeyId(A<Guid>.Ignored)).Returns(JwtToken.LicenseCipherKeyDecrypted);

            // Act
            await _classUnderTest.ValidateAndAddLicense(TheLicenseToUpload);
        }
    }
}
