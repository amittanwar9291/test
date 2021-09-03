using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RadioReport.Common.Repository;
using RadioReport.Core.Users.Domain.Models.Entities;
using Microsoft.Extensions.DependencyInjection;
using RadioReport.Common.Enums;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.Auth;

namespace RadioReport.Core.Users.Repo
{
    public class CoreUserDbContext : UserDbContextBase<ApplicationUser, ApplicationRole, ApplicationUserRole>
    {
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<AuthToken> AuthTokens { get; set; }
        public DbSet<ClientToken> ClientTokens { get; set; }

        public CoreUserDbContext(DbContextOptions<CoreUserDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null) throw new ArgumentNullException(nameof(modelBuilder));

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>(entity =>
            {
                var index = entity.HasIndex(u => new { u.NormalizedUserName }).Metadata;
                entity.Metadata.RemoveIndex(index.Properties);
            });

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.Entity<ApplicationUser>().ToTable("Users").Property(a => a.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(a => new { a.NormalizedUserName, a.InstituteId }).IsUnique();
            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(a => new { a.Initial, a.InstituteId }).IsUnique();

            modelBuilder.Entity<ApplicationRole>().ToTable("Roles");
            modelBuilder.Entity<ApplicationUserRole>().ToTable("UserRoles");
            modelBuilder.Entity<IdentityRoleClaim<string>>().ToTable("UserRoleClaims");
            modelBuilder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            modelBuilder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            modelBuilder.Entity<IdentityUserToken<string>>().ToTable("UserTokens");

            modelBuilder.Entity<ApplicationUserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });
        }

        protected override async Task Seed(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();

            await CreateRoles(roleManager);
            await CreateUsers(userManager, configuration);
        }

        private static async Task CreateRoles(RoleManager<ApplicationRole> roleManager)
        {
            var roleNames = Enum.GetNames(typeof(UserRole)).Skip(1); // Skip 'None' role
            foreach (var roleName in roleNames)
            {
                var roleExist = await roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    await roleManager.CreateAsync(new ApplicationRole(roleName));
                }
            }
        }

        private static async Task CreateUsers(UserManager<ApplicationUser> userManager, IConfiguration configuration)
        {
            var users = new List<ApplicationUser> { GetSaUser(configuration) }
                .Concat(configuration.GetSection("Users:Users").Get<List<ApplicationUser>>() ?? new List<ApplicationUser>())
                .ToList();
            // TODO move to configuration
            var instituteIdString = Environment.GetEnvironmentVariable(EnvironmentVariables.InstituteId);
            var instituteId = instituteIdString.IsNullOrEmpty() ? Guid.Empty : Guid.Parse(instituteIdString);
            users.ForEach(u => u.InstituteId = instituteId);

            var usersData = new List<(string, string)>
                {
                    (configuration.GetValue<string>("Users:Users:Password"), configuration.GetValue<string>("Users:Users:Role"))
                }
                .Concat(configuration.GetSection("Users:Users").GetChildren().ToList().Select(d =>
                    (d.GetValue<string>("password"), d.GetValue<string>("role"))
                )).ToList<(string Password, string Role)>();

            foreach (var userToAdd in users.Zip(usersData, (u, p) => new { ApplicationUser = u, UsersData = p }))
            {
                var user = await userManager.FindByNameAsync(userToAdd.ApplicationUser.UserName);
                if (user == null)
                {
                    var createPowerUser = await userManager.CreateAsync(userToAdd.ApplicationUser, userToAdd.UsersData.Password);
                    if (createPowerUser.Succeeded)
                    {
                        await userManager.AddToRoleAsync(userToAdd.ApplicationUser, userToAdd.UsersData.Role);
                    }
                }
            }
        }

        private static ApplicationUser GetSaUser(IConfiguration configuration) =>
            new ApplicationUser
            {
                UserName = configuration.GetValue<string>("Users:Users:UserName"),
                Initial = configuration.GetValue<string>("Users:Users:Initial"),
                FirstName = configuration.GetValue<string>("Users:Users:FirstName"),
                Surname = configuration.GetValue<string>("Users:Users:Surname"),
                Salutation = configuration.GetValue<Salutation>("Users:Users:Salutation"),
                LanguageOfProgram = configuration.GetValue<Language>("Users:Users:LanguageOfProgram"),
                LanguageDoctorFindings = configuration.GetValue<Language>("Users:Users:LanguageDoctorFindings"),
                LanguagePatientFindings = configuration.GetValue<Language>("Users:Users:LanguagePatientFindings"),
                IsActive = configuration.GetValue<bool>("Users:Users:IsActive")
            };
    }
}
