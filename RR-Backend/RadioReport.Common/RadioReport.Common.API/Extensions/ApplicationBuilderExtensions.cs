using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using RadioReport.Common.API.Middlewares;
using RadioReport.Common.Logic.Models;

namespace RadioReport.Common.API.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static void UseSwagger(this IApplicationBuilder app, ServiceContext serviceContext, IApiVersionDescriptionProvider provider)
        {
            var pathPrefix = $"api/{serviceContext.Name}";
            if (serviceContext.CoreService)
            {
                pathPrefix = $"api/Core/{serviceContext.Name}";
            }
            app.UseSwagger(options =>
            {
                options.RouteTemplate = $"{pathPrefix}/swagger/{{documentName}}/{serviceContext.Name}.json";
            });
            app.UseSwaggerUI(
                options =>
                {
                    // build a swagger endpoint for each discovered API version
                    foreach ( var description in provider.ApiVersionDescriptions )
                    {
                        options.SwaggerEndpoint( $"swagger/{description.GroupName}/{serviceContext.Name}.json", description.GroupName.ToUpperInvariant() );
                        options.RoutePrefix = pathPrefix;
                    }
                } );
        }

        public static void UseAuthTokenValidation(this IApplicationBuilder app) => app.UseMiddleware<AuthTokenValidationMiddleware>();

        public static void UseJwtAuthentication(this IApplicationBuilder app)
        {
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseAuthTokenValidation();
        }

        public static void UseExceptionHandling(this IApplicationBuilder app) => app.UseMiddleware<ExceptionHandlerMiddleware>();
    }
}
