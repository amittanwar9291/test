using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Services;
using RadioReport.Common.Models;
using RadioReport.Core.PatientManager.Domain.Models;
using RadioReport.Core.PatientManager.Domain.Services;
using RadioReport.Core.PatientManager.Repo;
using RadioReport.IntegrationTests.Helpers;
using VaultSharp;
using VaultSharp.V1.AuthMethods.LDAP;
using Xunit;

namespace RadioReport.IntegrationTests.PatientManager
{
    public class PatientManagerTests
    {
        [Fact(Skip = "For explicit migration")]
        // [Fact]
        public void MigratePatientsToPatientsEncrypted()
        {
            const string dbServer = "localhost";
            const bool isVaultMocked = true;
            const string instituteId = "cfdea220-325f-4450-af33-1c462ad38830";


            var connectionString = $"Server={dbServer};Database=RadioReport_PatientManager;User=sa;Password=ogx5853rDE3rvujn7z88V*XC8i2Ls2d;";
            var vaultOptions = new VaultOptionsWrapper(isVaultMocked);
            var httpAuthContext = new HttpAuthContext { InstituteId = Guid.Parse(instituteId) };
            var encodingService = new VaultEncodingService(vaultOptions);
            IEntityEncryptionService<Patient, PatientEncrypted> encryptionService;
            if (isVaultMocked)
            {
                encryptionService = new MockPatientEncryptionService(encodingService, httpAuthContext, vaultOptions);
            }
            else
            {
                encryptionService = new PatientEncryptionService(CreateVaultClient(vaultOptions.Value), encodingService, httpAuthContext, vaultOptions);
            }

            SqlConnection connection = null;
            try
            {
                connection = new SqlConnection(connectionString);
                connection.Open();

                var patientQuery = new SqlCommand("select * from RadioReport_PatientManager.dbo.Patients", connection);
                var reader = patientQuery.ExecuteReader();
                var patients = new List<Patient>();
                var failedCount = 0;
                while (reader.Read())
                {
                    try
                    {
                        var authContext = new HttpAuthContext
                        {
                            InstituteId = Guid.Parse(reader["InstituteId"].ToString())
                        };
                        var genderString = reader["Gender"].ToString();
                        var birthDateString = reader["BirthDate"].ToString();
                        patients.Add(new PatientDto
                        {
                            Id = Guid.Parse(reader["Id"].ToString()),
                            FirstName = reader["FirstName"].ToString(),
                            LastName = reader["LastName"].ToString(),
                            BirthDate = DateTime.Parse(birthDateString.IsNullOrEmpty() ? DateTime.Now.ToString() : birthDateString),
                            Gender = Enum.Parse<Gender>(genderString.IsNullOrEmpty() ? Gender.Male.ToString() : genderString),
                            ExternalIdentifier = reader["ExternalIdentifier"].ToString(),
                            Name = reader["Name"].ToString()
                        }.MapToPatient(authContext));
                    }
                    catch
                    {
                        failedCount++;
                    }
                }
                reader.Close();
                Console.WriteLine("Failed count: " + failedCount);

                var patientsEncrypted = encryptionService.EncryptRangeAsync(patients).Result;
                var dbContext = DbIntegrationHelper.CreateDbContext<PatientManagerDbContext>(connectionString);
                dbContext.PatientsEncrypted.AddRange(patientsEncrypted);
                dbContext.SaveChanges();
            }
            finally
            {
                connection?.Close();
            }
        }

        private static IVaultClient CreateVaultClient(VaultOptions options) =>
            new VaultClient(new VaultClientSettings(options.ServerAddress, new LDAPAuthMethodInfo(options.UserName, options.Password)));

        public class VaultOptionsWrapper : IOptions<VaultOptions>
        {
            public VaultOptionsWrapper(bool isMocked)
            {
                Value = new VaultOptions
                {
                    IsMocked = isMocked,
                    ServerAddress = "http://staging.rr:8200",
                    UserName = "radioreport",
                    Password = "9jG6YscyaoRv8n7WD8SoCMGf",
                    HashSalt = "aFu3JkyU9Hwj"
                };
            }

            public VaultOptions Value { get; }
        }
    }
}
