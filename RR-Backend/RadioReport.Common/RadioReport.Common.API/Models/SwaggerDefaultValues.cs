using System;
using System.Linq;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using RadioReport.Common.Logic.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace RadioReport.Common.API.Models
{
    public class SwaggerDefaultValues : IOperationFilter
    {
        private readonly ServiceContext _serviceContext;

        public SwaggerDefaultValues(ServiceContext serviceContext)
        {
            _serviceContext = serviceContext;
        }
        public void Apply( OpenApiOperation operation, OperationFilterContext context )
        {
            var apiDescription = context.ApiDescription;

            operation.Deprecated |= apiDescription.IsDeprecated();

            if (operation.Parameters.Any(parameter => parameter.Name.Equals("module", StringComparison.CurrentCultureIgnoreCase)))
            {
                var moduleParameter = operation.Parameters.Single(parameter => parameter.Name.Equals("module", StringComparison.CurrentCultureIgnoreCase));
                moduleParameter.Example = new OpenApiString(_serviceContext.Name);
            }

            foreach ( var responseType in context.ApiDescription.SupportedResponseTypes )
            {
                var responseKey = responseType.IsDefaultResponse ? "default" : responseType.StatusCode.ToString();
                var response = operation.Responses[responseKey];

                foreach ( var contentType in response.Content.Keys )
                {
                    if (responseType.ApiResponseFormats.All(x => x.MediaType != contentType))
                    {
                        response.Content.Remove( contentType );
                    }
                }
            }

            if ( operation.Parameters == null )
            {
                return;
            }

            foreach ( var parameter in operation.Parameters )
            {
                var description = apiDescription.ParameterDescriptions.First( p => p.Name == parameter.Name );

                if ( parameter.Description == null )
                {
                    parameter.Description = description.ModelMetadata?.Description;
                }

                if ( parameter.Schema.Default == null && description.DefaultValue != null )
                {
                    var json = JsonSerializer.Serialize( description.DefaultValue, description.ModelMetadata.ModelType );
                    parameter.Schema.Default = OpenApiAnyFactory.CreateFromJson( json );
                }

                parameter.Required |= description.IsRequired;
            }
        }
    }
}