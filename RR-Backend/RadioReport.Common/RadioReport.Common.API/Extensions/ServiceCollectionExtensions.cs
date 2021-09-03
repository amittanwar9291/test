using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;
using Confluent.Kafka;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using RadioReport.Common.API.Models;
using RadioReport.Common.API.Helpers;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Logic.Services;
using RadioReport.Common.Models;
using StackExchange.Redis;
using Swashbuckle.AspNetCore.Filters;

namespace RadioReport.Common.API.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.OperationFilter<SwaggerDefaultValues>();
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new List<string> {"{{access_token}}"}
                    }
                });
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "Standard Authorization header using the Bearer scheme. Example: \"Bearer {token}\"",
                    In = ParameterLocation.Header,
                    Name = HeaderNames.Authorization,
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    BearerFormat = "JWT",
                    
                });
            });
            services.ConfigureSwaggerGen(options => options.CustomSchemaIds(t => t.FullName));
            services.AddSwaggerGenNewtonsoftSupport();
        }

        public static void AddKafkaConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var maxMessageBytes = configuration.GetValue<int>("Kafka:MaxMessageBytes");
            var producerConfig = new ProducerConfig();
            configuration.Bind("Kafka:Producer", producerConfig);
            producerConfig.MessageMaxBytes = maxMessageBytes;
            services.AddSingleton(producerConfig);
            services.AddSingleton<IKafkaProducer, KafkaProducer>();
            services.AddRedisCache(configuration);

            var consumerConfig = new ConsumerConfig();
            configuration.Bind("Kafka:Consumer", consumerConfig);
            consumerConfig.AutoOffsetReset = AutoOffsetReset.Latest;
            consumerConfig.MessageMaxBytes = maxMessageBytes;
            services.AddSingleton(consumerConfig);
        }

        public static void AddMinIOWrapper(this IServiceCollection services, IConfiguration configuration)
        {
            var minIOConfig = new MinIOConfig();
            configuration.Bind("MinIOConfig", minIOConfig);
            services.AddScoped<IMinIOWrapper, MinIOWrapper>(serviceProvider => new MinIOWrapper(minIOConfig));
            services.AddScoped<IMinIOService, MinIOService>();
        }

        public static void AddEnvironmentContext(this IServiceCollection services, IConfiguration configuration)
        {
            var environmentContext = new EnvironmentContext();
            configuration.Bind("EnvironmentContext", environmentContext);
            services.AddSingleton(environmentContext);
        }

        public static void AddRedisCache(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<ICacheService, RedisCacheService>();
            var connectionString = configuration.GetValue<string>("RedisConnection");
            if (connectionString.IsNullOrEmpty())
            {
                throw new MissingRedisConfigurationException();
            }
            var options = ConfigurationOptions.Parse(connectionString);
            options.ConnectTimeout = ConfigurationConsts.RedisConnectTimeoutMs;
            services.AddSingleton<IConnectionMultiplexer>(_ => ConnectionMultiplexer.Connect(options));
        }

        public static void AddJwtAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(AuthConst.JwtSecret)),
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero,
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
            services.AddAuthorization();
        }

        public static void AddVault(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton(serviceProvider =>
            {
                var options = serviceProvider.GetRequiredService<IOptions<VaultOptions>>();

                return VaultHelper.CreateClient(options.Value);
            });

            if (configuration.GetValue($"{VaultOptions.SectionName}:{nameof(VaultOptions.IsMocked)}", false))
            {
                services.AddScoped<IEncryptionService, MockEncryptionService>();
            }
            else
            {
                services.AddScoped<IEncryptionService, VaultEncryptionService>();
            }
        }
    }
}
