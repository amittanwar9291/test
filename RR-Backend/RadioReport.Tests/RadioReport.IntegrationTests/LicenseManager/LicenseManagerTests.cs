using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bogus;
using MoreLinq;
using RadioReport.Core.LicenseManager.Domain.Enums;
using RadioReport.Core.LicenseManager.Domain.Models;
using RadioReport.Core.LicenseManager.Repo;
using RadioReport.IntegrationTests.Helpers;
using Xunit;

namespace RadioReport.IntegrationTests.LicenseManager
{
    public class LicenseManagerTests
    {
        private readonly LicenseManagerDbContext _dbContext;

        public LicenseManagerTests()
        {
            _dbContext = DbIntegrationHelper.CreateDbContext<LicenseManagerDbContext>(ConnectionStrings.Localhost.LicenseManager);
        }

        [Fact(Skip = "For development purposes only")]
        public async Task AddLicenses()
        {
            var instituteId = Guid.Parse("cfdea220-325f-4450-af33-1c462ad38830");
            var licenseFractionsTotal = new List<LicenseFraction>();

            var licenseFractionFaker = new Faker<LicenseFraction>()
                .RuleFor(f => f.AllocationDate, f => f.Date.Past())
                .RuleFor(f => f.CreationDate, f => f.Date.Past())
                .RuleFor(f => f.ExpirationDate, f => f.Date.Past())
                .RuleFor(f => f.InstituteId, instituteId);
            var licenseFaker = new Faker<License>()
                .RuleFor(l => l.Id, Guid.NewGuid)
                .RuleFor(l => l.CreationDate, f => f.Date.Past())
                .RuleFor(l => l.ExpirationDate, f => f.Date.Past())
                .RuleFor(l => l.InstituteId, instituteId)
                .RuleFor(l => l.IsActive, f => f.Random.Bool())
                .RuleFor(l => l.LicensingType, f => f.PickRandom<LicensingType>())
                .RuleFor(l => l.LicenseFractions, (f, b) =>
                {
                    var licenseFractions = licenseFractionFaker.Generate(f.Random.Number(30, 50));
                    licenseFractions.ForEach(l => l.License = b);
                    licenseFractions.OrderBy(f1 => f1.CreationDate).ForEach((f2, i) => f2.Order = i);
                    b.LicenseFractions.AddRange(licenseFractions);
                    licenseFractionsTotal.AddRange(licenseFractions);

                    return licenseFractions;
                });
            var currentCreditScoreFaker = new Faker<CurrentCreditScore>()
                .RuleFor(s => s.InstituteId, instituteId)
                .RuleFor(s => s.LastModifiedDate, f => f.Date.Recent(30));

            var licensesTotal = licenseFaker.Generate(70);
            var currentCreditScoreTotal = new List<CurrentCreditScore>();
            licensesTotal.ForEach(l =>
            {
                var score = currentCreditScoreFaker.Generate(1).First();
                score.LicenseId = l.Id;
                currentCreditScoreTotal.Add(score);
            });
            licensesTotal.OrderBy(l1 => l1.CreationDate).ForEach((l2, i) => l2.Order = i);

            await _dbContext.Set<CurrentCreditScore>().AddRangeAsync(currentCreditScoreTotal);
            await _dbContext.Set<LicenseFraction>().AddRangeAsync(licenseFractionsTotal);
            await _dbContext.Set<License>().AddRangeAsync(licensesTotal);
            await _dbContext.SaveChangesAsync();
        }
    }
}
