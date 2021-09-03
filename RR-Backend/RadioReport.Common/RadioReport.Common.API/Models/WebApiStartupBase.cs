using System.Collections.Generic;
using System.Linq;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using RadioReport.Common.API.Extensions;
using RadioReport.Common.Logic.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace RadioReport.Common.API.Models
{
    public class WebApiStartupBase : StartupBase
    {
        public WebApiStartupBase(IConfiguration configuration, string serviceName, IWebHostEnvironment environment) : base(configuration, serviceName,
            environment)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddHealthChecks();
            
            ConfigureMvcServices(services);
            services.AddApiVersioning(options =>
            {
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.ApiVersionReader = new HeaderApiVersionReader("x-api-version");
                options.DefaultApiVersion = ApiVersion.Parse("1.0");
                options.ReportApiVersions = true;
            });
            services.AddVersionedApiExplorer(
                options =>
                {
                    options.GroupNameFormat = "'v'VVV";
                    options.SubstituteApiVersionInUrl = true;
                } );
            services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();

            services.AddControllers()
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
                });

            services.AddJwtAuthentication();
            services.AddLocalization();
            services.AddSwagger();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });
        }

        protected virtual void ConfigureMvcServices(IServiceCollection services)
        {
            services.AddMvc(options =>
            {
                options.AddExceptionFilters();
            }).AddFluentValidation();
        }

        public override void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            base.Configure(app, env);

            var provider = app.ApplicationServices.GetRequiredService<IApiVersionDescriptionProvider>();
            var serviceContext = app.ApplicationServices.GetRequiredService<ServiceContext>();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // MS-Docs: call to UseCors must be placed after UseRouting, but before UseAuthorization
            app.UseRouting();
            app.UseCors("AllowAll");
            app.UseJwtAuthentication();
            app.UseSwagger(serviceContext, provider);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHealthChecks(serviceContext.CoreService ? $"/api/Core/{serviceContext.Name}/Health" : $"/api/{serviceContext.Name}/Health");
            });

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                Converters = new List<JsonConverter> { new Newtonsoft.Json.Converters.StringEnumConverter() }
            };
        }
    }
}
