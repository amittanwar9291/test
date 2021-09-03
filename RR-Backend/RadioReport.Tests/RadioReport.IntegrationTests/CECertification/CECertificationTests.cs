using System.Linq;
using Microsoft.EntityFrameworkCore;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.Repo;
using Xunit;

namespace RadioReport.IntegrationTests.CECertification
{
    public class CECertificationTests
    {
        private const string KneeMrtConnectionString = "Server=localhost;Database=RadioReport_KneeMRT;User=sa;Password=ogx5853rDE3rvujn7z88V*XC8i2Ls2d;";

        // preparation for test UR_002_SWR_DICOM_001__Test_Dicom_Interface, removing reports with studyInstanceUid to be imported
        [Fact(Skip = "Started manually in context of CE certification manual testing")]
        public void UR_002_SWR_DICOM_001__Test_Dicom_Interface_Preparation()
        {
            // Arrange
            const string studyIdToBeImported = "1.3.46.670589.11.70679.5.0.12104.2020070913255207002";
            var dbContext = CreateKneeMrtDbContext();
            var existingImports = dbContext.Reports.Where(r => r.StudyInstanceUID == studyIdToBeImported).ToList();
            dbContext.RemoveRange(existingImports);
            dbContext.SaveChanges();

            // Assert
            existingImports = dbContext.Reports.Where(r => r.StudyInstanceUID == studyIdToBeImported).ToList();
            Assert.Empty(existingImports);
        }

        // execute import by client by executing script https://dev.azure.com/neo-q/Radio%20Report/_git/RR-Backend?version=GBdev&path=%2FRadioReport.Tools%2FRadioReport.Scripts%2Fimport_study_rr.bat
        // and selection of option 2 before starting the test
        [Fact(Skip = "Started manually in context of CE certification manual testing")]
        public void UR_002_SWR_DICOM_001__Test_Dicom_Interface()
        {
            // Arrange
            const string studyIdToBeImported = "1.3.46.670589.11.70679.5.0.12104.2020070913255207002";
            var dbContext = CreateKneeMrtDbContext();

            // Act
            // client triggered import

            // Assert
            var importedReport = dbContext.Reports.SingleOrDefault(r => r.StudyInstanceUID == studyIdToBeImported);
            Assert.NotNull(importedReport);
            var importedTechnologyPage = dbContext.Set<TechnologyPage>().Include(p => p.Sequences).SingleOrDefault(p => p.ReportId == importedReport.Id);
            Assert.NotNull(importedTechnologyPage);
            Assert.NotEmpty(importedTechnologyPage.Sequences);
        }

        private KneeMRTDbContext CreateKneeMrtDbContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<KneeMRTDbContext>();
            optionsBuilder.UseSqlServer(KneeMrtConnectionString);

            return new KneeMRTDbContext(optionsBuilder.Options);
        }
    }
}
