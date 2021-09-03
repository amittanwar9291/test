using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Repository.DbContexts.ReportGenerator;
using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
using RadioReport.Tests.Common.TestData;
using Xunit;

namespace RadioReport.Tests.Common.RepoTests
{
    public class ReportSchemaRepositoryTests
    {
        [Theory]
        [ClassData(typeof(ReportSchemaRepoIncludesTestData))]
        public async Task GetByIdFromRepositoryIncludesTest(ReportSchema report)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            var expected = JsonConvert.SerializeObject(report);
            using var context = GetContext();
            SeedDataToReportDbContext(context, report);
            var repository = new ReportSchemaRepositoryBase(context);

            // Act
            var result = await repository.GetByIdAsync(report.Id);

            // Assert
            Assert.Equal(expected, JsonConvert.SerializeObject(result));
        }

        [Fact]
        public async Task GetByIdFromRepositoryShouldNotFailWhenEmptyTest()
        { 
            // Arrange
            using var context = GetContext();
            var repository = new ReportSchemaRepositoryBase(context);
            var randId = Guid.NewGuid();

            // Act
            var result = await repository.GetByIdAsync(randId);

            // Assert
            Assert.Null(result);
        }

        [Theory]
        [ClassData(typeof(ReportSchemaUpdateTestData))]
        public void UpdateTest(ReportSchema originalReport, ReportSchema updatedReport, ReportSchema expectedReport)
        {
            // Arrange
            if (originalReport is null)
            {
                throw new ArgumentNullException(nameof(originalReport));
            }
            
            var expected = JsonConvert.SerializeObject(expectedReport);
            using var context = GetContext();
            SeedDataToReportDbContext(context, originalReport);
            var repository = new ReportSchemaRepositoryBase(context);

            // Act
            var result = repository.Update(updatedReport);
            context.SaveChanges();

            // Assert
            Assert.Equal(expected, JsonConvert.SerializeObject(result));
            Assert.Equal(expected, JsonConvert.SerializeObject(repository.GetById(originalReport.Id)));
        }

        [Theory]
        [ClassData(typeof(ReportSchemaUpdateWithDefaultTestData))]
        public void UpdateWithDefaultTest(ReportSchema report1, ReportSchema report2)
        {
            // Arrange
            if (report1 is null)
            {
                throw new ArgumentNullException(nameof(report1));
            }

            if (report2 is null)
            {
                throw new ArgumentNullException(nameof(report2));
            }

            using var context = GetContext();
            SeedDataToReportDbContext(context, new ReportSchema[] { report1, report2 });
            var repository = new ReportSchemaRepositoryBase(context);
            report2.IsDefault = true;

            // Act
            var result = repository.Update(report2);
            context.SaveChanges();

            // Assert
            Assert.False(repository.GetById(report1.Id).IsDefault);
            Assert.True(repository.GetById(report2.Id).IsDefault);
        }

        [Theory]
        [ClassData(typeof(ReportSchemaAddTestData))]
        public void AddTest(ReportSchema report)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            using var context = GetContext();
            var repository = new ReportSchemaRepositoryBase(context);

            // Act
            var result = repository.Add(report);
            context.SaveChanges();

            // Assert
            Assert.True(repository.GetById(report.Id).IsDefault);
        }

        [Theory]
        [ClassData(typeof(ReportSchemaAddWithDefaultTestData))]
        public void AddWithDefaultTest(ReportSchema report1, ReportSchema report2)
        {
            // Arrange
            if (report1 is null)
            {
                throw new ArgumentNullException(nameof(report1));
            }

            if (report2 is null)
            {
                throw new ArgumentNullException(nameof(report2));
            }

            using var context = GetContext();
            SeedDataToReportDbContext(context, report1);
            var repository = new ReportSchemaRepositoryBase(context);

            // Act
            var result = repository.Add(report2);
            context.SaveChanges();

            // Assert
            Assert.False(repository.GetById(report1.Id).IsDefault);
            Assert.True(repository.GetById(report2.Id).IsDefault);
        }

        [Theory]
        [ClassData(typeof(ReportSchemaRepoStandardTestData))]
        public async Task DeleteTest(ReportSchema report)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            using var context = GetContext();
            SeedDataToReportDbContext(context, report);
            var idToDelete = report.Id;
            var repository = new ReportSchemaRepositoryBase(context);

            // Act
            await repository.Delete(idToDelete);
            context.SaveChanges();

            // Assert
            Assert.Null(repository.GetById(report.Id));
        }

        [Fact]
        public async Task DeleteTestShouldNotFailWhenEmptyTest()
        {
            // Arrange  
            using var context = GetContext();
            var repository = new ReportSchemaRepositoryBase(context);
            var randId = Guid.NewGuid();

            // Act
            await repository.Delete(randId);
            context.SaveChanges();

            // Assert
            Assert.Null(repository.GetById(randId));
        }

        private static ReportGeneratorDbContext GetContext()
        {
            var options = new DbContextOptionsBuilder<ReportGeneratorDbContext>()
                .UseInMemoryDatabase(databaseName: "ReportGeneratorSchema")
                .Options;
            var context = new ReportGeneratorDbContext(options);
            context.Database.EnsureDeleted();
            return context;
        }

        private static void SeedDataToReportDbContext(ReportGeneratorDbContext dbContext, params ReportSchema[] reports)
        {
            foreach (var report in reports)
            {
                dbContext.Add(report);
            }
            dbContext.SaveChanges();
            // prevents referencing the same object in insert and get operations
            dbContext.ChangeTracker.Entries()
                .Where(e => e.Entity != null).ToList()
                .ForEach(e => e.State = EntityState.Detached);
        }
    }
}
