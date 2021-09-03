using System;
using System.Net.Mime;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using RadioReport.Common.Enums.Models;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Core.LicenseManager.Domain.Interfaces;
using RadioReport.Core.LicenseManager.Domain.Services;
using RadioReport.Tests.TestData;
using Xunit;
using static RadioReport.Tests.Helpers.FakeHelper;

namespace RadioReport.Tests.LicenseManager
{
    public class LicenseTokenServiceTests
    {
        private readonly LicenseTokenService _classUnderTest;
        private readonly IKeyStoreService _keyStoreServiceFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly ILicenseFractionManager _licenseFractionManagerFake;
        private readonly ICurrentCreditScoreManager _currentCreditScoreManagerFake;
        private readonly ILicenseManager _licenseManagerFake;
        private readonly IKafkaProducer _kafkaProducerFake;
        private readonly IFormFile _formFileFake;
        private readonly IEncryptionService _encryptionServiceFake;

        public LicenseTokenServiceTests()
        {
            _keyStoreServiceFake = A.Fake<IKeyStoreService>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _licenseFractionManagerFake = A.Fake<ILicenseFractionManager>();
            _formFileFake = A.Fake<IFormFile>();
            _currentCreditScoreManagerFake = A.Fake<ICurrentCreditScoreManager>();
            _licenseManagerFake = A.Fake<ILicenseManager>();
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _encryptionServiceFake = A.Fake<IEncryptionService>();
            _classUnderTest = new LicenseTokenService(_keyStoreServiceFake, _httpAuthContextFake, _licenseFractionManagerFake, _currentCreditScoreManagerFake,
                _licenseManagerFake, _kafkaProducerFake, _encryptionServiceFake);
        }

        [Theory]
        [InlineData("filename.invalid")]
        [InlineData("filename.i")]
        [InlineData("filename.")]
        [InlineData("filename")]
        public async Task UploadLicenseFile_InvalidFileExtension_ThrowsException(string fileName)
        {
            // Arrange
            FakeOfflineInstitute();
            A.CallTo(() => _formFileFake.FileName).Returns(fileName);
            A.CallTo(() => _formFileFake.ContentType).Returns(MediaTypeNames.Text.Plain);

            // Act + Assert
            await Assert.ThrowsAsync<InvalidLicenseFileException>(() => _classUnderTest.UploadLicenseFile(_formFileFake));
        }

        [Fact]
        public async Task UploadLicenseFile_InvalidContentType_ThrowsException()
        {
            // Arrange
            FakeOfflineInstitute();
            A.CallTo(() => _formFileFake.FileName).Returns("fileName.rrl");
            A.CallTo(() => _formFileFake.ContentType).Returns("invalid");

            // Act + Assert
            await Assert.ThrowsAsync<InvalidLicenseFileException>(() => _classUnderTest.UploadLicenseFile(_formFileFake));
        }

        [Fact]
        public async Task ValidateAndAddLicense_MissingKeyId_ThrowsException()
        {
            // Act + Assert
            await Assert.ThrowsAsync<InvalidLicenseTokenException>(() =>
                _classUnderTest.ValidateAndAddLicense(TestDataConsts.LicenseManagerJwtTokenMissingKeyId));
        }

        [Fact]
        public async Task ValidateAndAddLicense_InvalidJwtSignature_ThrowsException()
        {
            // Arrange
            FakeOfflineInstitute();
            A.CallTo(() => _keyStoreServiceFake.GetByKeyIdOrLast(A<Guid>.Ignored)).Returns(TestDataConsts.LicenseCipherKeyDecrypted);

            // Act + Assert
            await Assert.ThrowsAsync<SecurityTokenInvalidSignatureException>(() =>
                _classUnderTest.ValidateAndAddLicense(TestDataConsts.LicenseManagerJwtTokenInvalidSignature));
        }

        [Fact]
        public async Task ValidateAndAddLicense_InvalidInstituteId_ThrowsException()
        {
            // Arrange
            FakeValidJwtSignature();
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.NewGuid());

            // Act + Assert
            await Assert.ThrowsAsync<UnauthorizedAccessException>(() =>
                _classUnderTest.ValidateAndAddLicense(TestDataConsts.LicenseManagerJwtTokenValidSignature));
        }

        [Fact]
        public async Task ValidateAndAddLicense_LicenseUploaded_ThrowsException()
        {
            // Arrange
            FakeAuthorized();
            FakeValidJwtSignature();
            A.CallTo(() => _licenseFractionManagerFake.AnyAsync(A<Guid>.Ignored)).Returns(true);

            // Act + Assert
            await Assert.ThrowsAsync<LicenseFractionAlreadyUploadedException>(() =>
                _classUnderTest.ValidateAndAddLicense(TestDataConsts.LicenseManagerJwtTokenValidSignature));
        }

        private void FakeOfflineInstitute()
        {
            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<GetInstituteSyncResponse>(A<GetInstituteSyncRequest>.Ignored, IgnoredAuth, IgnoredInt,
                IgnoredCt)).Returns(new GetInstituteSyncResponse
            {
                IsSuccess = true,
                Institute = new Institute
                {
                    ConnectionType = ConnectionType.Offline
                }
            });
        }

        private void FakeValidJwtSignature()
        {
            A.CallTo(() => _keyStoreServiceFake.GetByKeyIdOrLast(A<Guid>.Ignored)).Returns(TestDataConsts.LicenseCipherKeyDecrypted);
        }

        private void FakeAuthorized()
        {
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.Parse("cfdea220-325f-4450-af33-1c462ad38830"));
        }

        private void FakeValidLicenseId()
        {
            A.CallTo(() => _licenseFractionManagerFake.AnyAsync(A<Guid>.Ignored)).Returns(false);
        }
    }
}
