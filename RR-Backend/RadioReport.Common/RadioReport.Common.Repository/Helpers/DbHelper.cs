using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Npgsql;
using RadioReport.Common.Logic.Helpers;
using RadioReport.Common.Logic.Models;
using Serilog;

namespace RadioReport.Common.Repository.Helpers
{
    public static class DbHelper
    {
        public static async void Migrate<T>(IHost host, Action<DbContext, IServiceProvider> migrateAction) where T : DbContext
        {
            ILogger logger = null;
            try
            {
                using var scope = host.Services.CreateScope();
                var serviceContext = scope.ServiceProvider.GetService<ServiceContext>();
                var hostEnvironment = scope.ServiceProvider.GetService<IHostEnvironment>();
                var configuration = scope.ServiceProvider.GetService<IConfiguration>();
                logger = LogHelper.CreateLogger(serviceContext.Name, hostEnvironment, configuration);
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                var dbContext = scope.ServiceProvider.GetRequiredService<T>();

                logger.Information("Start migration of " + serviceContext.Name + " | Environment variables: {EnvironmentVariables}",
                    JsonConvert.SerializeObject(Environment.GetEnvironmentVariables(), Formatting.Indented));

                var timeoutTokenSource = new CancellationTokenSource();
                timeoutTokenSource.CancelAfter(TimeSpan.FromMinutes(5));
                await using var npgsqlConnection = new NpgsqlConnection(RemoveDatabaseToken(connectionString));
                var isSqlServerAvailable = false;
                while (!isSqlServerAvailable)
                {
                    try
                    {
                        await npgsqlConnection.OpenAsync(timeoutTokenSource.Token);
                        isSqlServerAvailable = true;
                    }
                    catch (NpgsqlException)
                    {
                        Thread.Sleep(1000);
                    }
                    catch (OperationCanceledException)
                    {
                        logger.Error("Sql server access by " + serviceContext.Name + " timed out");
                        break;
                    }
                    catch (Exception exception)
                    {
                        logger.Error("Sql server access by " + serviceContext.Name + " failed");
                        logger.Error(exception, exception.Message);
                        break;
                    }
                }
                await npgsqlConnection.CloseAsync();

                if (!isSqlServerAvailable)
                {
                    return;
                }

                try
                {
                    await PerformMigration(logger, dbContext, serviceContext.Name, () => migrateAction(dbContext, scope.ServiceProvider));
                }
                catch (Exception exception)
                {
                    logger.Error("Migration of " + serviceContext.Name + " failed");
                    logger.Error(exception, exception.Message);
                }
            }
            catch (Exception exception)
            {
                logger?.Error(exception, exception.Message);
            }
        }

        private static async Task PerformMigration(ILogger logger, DbContext dbContext, string serviceName, Action migrateAction)
        {
            var pendingMigrations = (await dbContext.Database.GetPendingMigrationsAsync()).ToList();
            if (pendingMigrations.Any())
            {
                logger.Information("Pending migrations of " + serviceName + ": {PendingMigrations}", string.Join(", ", pendingMigrations));
            }
            else
            {
                logger.Information("No pending migrations for " + serviceName);
            }

            const int maxAttempts = 3;
            var currentAttepmt = 1;
            var migrationSucceeded = false;
            while (!migrationSucceeded && currentAttepmt <= maxAttempts)
            {
                try
                {
                    migrateAction();
                    migrationSucceeded = true;
                }
                catch (Exception exception)
                {
                    if (currentAttepmt < maxAttempts)
                    {
                        logger.Warning("Migration attempt " + currentAttepmt + " of " + serviceName + " failed");
                        logger.Warning(exception, exception.Message);
                        currentAttepmt++;
                        Thread.Sleep(2000);
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            logger.Information("Migration of " + serviceName + " succeeded");
        }

        private static string RemoveDatabaseToken(string connectionString)
        {
            var result = Regex.Replace(connectionString, "Database=(.*?);", "");
            result = Regex.Replace(result, "Initial Catalog=(.*?);", "");

            return result;
        }
    }
}
