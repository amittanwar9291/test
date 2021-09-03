using System;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using RadioReport.Common.Logic.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace RadioReport.Common.API.Models
{
    /// <summary>
    /// Configures the Swagger generation options.
    /// </summary>
    /// <remarks>This allows API versioning to define a Swagger document per API version after the
    /// <see cref="IApiVersionDescriptionProvider"/> service has been resolved from the service container.</remarks>
    public class ConfigureSwaggerOptions : IConfigureOptions<SwaggerGenOptions>
    {
        private readonly IApiVersionDescriptionProvider _provider;
        private readonly ServiceContext _serviceContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConfigureSwaggerOptions"/> class.
        /// </summary>
        /// <param name="provider">The <see cref="IApiVersionDescriptionProvider">provider</see> used to generate Swagger documents.</param>
        public ConfigureSwaggerOptions( IApiVersionDescriptionProvider provider, ServiceContext serviceContext )
        {
            _provider = provider;
            _serviceContext = serviceContext;
        }

        /// <inheritdoc />
        public void Configure( SwaggerGenOptions options )
        {
            // add a swagger document for each discovered API version
            // note: you might choose to skip or document deprecated API versions differently
            foreach ( var description in _provider.ApiVersionDescriptions )
            {
                options.SwaggerDoc( description.GroupName, CreateInfoForApiVersion( description, _serviceContext ) );
            }
        }

        static OpenApiInfo CreateInfoForApiVersion( ApiVersionDescription description, ServiceContext serviceContext )
        {
            var info = new OpenApiInfo()
            {
                Title = $"{serviceContext.Name} API",
                Version = description.ApiVersion.ToString()
            };

            if ( description.IsDeprecated )
            {
                info.Description += " This API version has been deprecated.";
            }

            return info;
        }
    }
}