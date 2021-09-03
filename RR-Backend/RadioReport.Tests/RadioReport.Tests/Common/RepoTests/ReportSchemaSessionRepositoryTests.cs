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
    public class ReportSchemaSessionRepositoryTests
    {
        [Theory]
        [ClassData(typeof(ReportSchemaSessionRepoGetTestData))]
        public async Task GetByIdFromRepositoryTest(ReportSchema report) 
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            var expected = JsonConvert.SerializeObject(report.Session);
            using var context = GetContext();
            SeedDataToReportDbContext(context, report);
            var repository = new ReportSchemaSessionRepositoryBase(context);

            // Act
            var result = await repository.GetByIdAsync(report.Session.Id);

            // Assert
            Assert.Equal(expected, JsonConvert.SerializeObject(result));
        }

        [Fact]
        public async Task GetByIdFromRepositoryShouldNotFailWhenEmptyTest()
        {
            // Arrange
            using var context = GetContext();
            var repository = new ReportSchemaSessionRepositoryBase(context);
            var randId = Guid.NewGuid();

            // Act
            var result = await repository.GetByIdAsync(randId);

            // Assert
            Assert.Null(result);
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionRepoUpdateTestData))]
        public void UpdateTest(ReportSchema report, ReportSchemaSession updatedSession)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            var expected = JsonConvert.SerializeObject(updatedSession);
            using var context = GetContext();
            SeedDataToReportDbContext(context, report);
            var repository = new ReportSchemaSessionRepositoryBase(context);

            // Act
            var result = repository.Update(updatedSession);
            context.SaveChanges();

            // Assert
            Assert.Equal(expected, JsonConvert.SerializeObject(result));
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionRepoAddTestData))]
        public void AddTest(ReportSchema report)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            using var context = GetContext();
            var session = report.Session;
            report.Session = null;
            SeedDataToReportDbContext(context, report);
            var repository = new ReportSchemaSessionRepositoryBase(context);

            // Act
            var result = repository.Add(session);
            context.SaveChanges();

            // Assert
            Assert.NotNull(repository.GetById(session.Id));
        }

        [Theory]
        [ClassData(typeof(ReportSchemaSessionRepoGetTestData))]
        public void DeleteTest(ReportSchema report)
        {
            // Arrange
            if (report is null)
            {
                throw new ArgumentNullException(nameof(report));
            }

            using var context = GetContext();
            SeedDataToReportDbContext(context, report);
            var idToDelete = report.Session.Id;
            var repository = new ReportSchemaSessionRepositoryBase(context);

            // Act
            repository.Delete(idToDelete);
            context.SaveChanges();

            // Assert
            Assert.Null(repository.GetById(idToDelete));
        }

        [Fact]
        public void DeleteTestShouldNotFailWhenEmptyTest()
        {
            // Arrange
            using var context = GetContext();
            var repository = new ReportSchemaSessionRepositoryBase(context);
            var randId = Guid.NewGuid();

            // Act
            repository.Delete(randId);
            context.SaveChanges();

            // Assert
            Assert.False(context.Set<ReportSchemaSession>().Any());
        }

        private static ReportGeneratorDbContext GetContext()
        {
            var options = new DbContextOptionsBuilder<ReportGeneratorDbContext>()
                .UseInMemoryDatabase(databaseName: "ReportGeneratorSession")
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
