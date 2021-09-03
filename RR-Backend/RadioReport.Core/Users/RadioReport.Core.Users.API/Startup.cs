using System.Linq;
using AutoMapper;
using FluentValidation;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.API.Models;
using RadioReport.Common.Consts;
using RadioReport.Core.Users.API.Config;
using RadioReport.Core.Users.Domain.Interfaces;
using RadioReport.Core.Users.Domain.Managers;
using RadioReport.Core.Users.Domain.Models;
using RadioReport.Core.Users.Repo;
using RadioReport.Core.Users.Repo.Repositories;
using RadioReport.Core.Users.Domain.HostedServices;
using RadioReport.Core.Users.Domain.Models.Entities;
using RadioReport.Core.Users.Domain.Services;
using RadioReport.Core.Users.Domain.Validators;

namespace RadioReport.Core.Users.API
{
    public class Startup : WebApiStartupBase
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment) : base(configuration, ServiceNames.Users, environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddAutoMapper(typeof(AutoMapperProfile));

            services.AddDbContext<CoreUserDbContext>(options => options.ConfigureDefaults(Configuration, ServiceName));

            services.Configure<JwtOptions>(Configuration.GetSection("Users:Jwt"));
            services.Configure<Domain.Models.PasswordOptions>(Configuration.GetSection("Users:Password"));

            services.AddScoped<IAccountHttpManager, AccountHttpManager>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IApplicationUserManager, ApplicationUserManager>();
            services.AddScoped<IApplicationUserRepository, ApplicationUserRepository>();
            services.AddScoped<IUserViewModelHttpManager, UserViewModelHttpManager>();
            services.AddScoped<IUserViewModelService, UserViewModelService>();
            services.AddScoped<IAuthTokenManager, AuthTokenManager>();
            services.AddScoped<IAuthTokenRepository, AuthTokenRepository>();
            services.AddScoped<IAuthTokenService, AuthTokenService>();
            services.AddScoped<IClientTokenManager, ClientTokenManager>();
            services.AddScoped<IClientTokenRepository, ClientTokenRepository>();
            services.AddScoped<IClientTokenService, ClientTokenService>();
            services.AddTransient<IValidator<LoginRequest>, LoginRequestValidator>();

            services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
                {
                    options.Password.RequiredLength = 5;
                    options.Password.RequireDigit = true;
                    options.Password.RequireUppercase = true;
                })
                .AddEntityFrameworkStores<CoreUserDbContext>()
                .AddPasswordValidator<ApplicationUserPasswordValidator>()
                .AddDefaultTokenProviders();
            services.Replace(ServiceDescriptor.Scoped<IUserValidator<ApplicationUser>, ApplicationUserValidator>());

            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = actionContext =>
                {
                    var errors = actionContext.ModelState
                        .Where(e => e.Value.Errors.Count > 0)
                        .Select(e => new
                        {
                            Code = e.Key,
                            Description = e.Value.Errors.First().ErrorMessage
                        }).ToArray();

                    return new BadRequestObjectResult(errors);
                };
            });

            services.AddHostedService<UsersKafkaService>();
        }
    }
}
