using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PuppeteerSharp;
using RadioReport.Common.Extensions;

namespace RadioReport.Core.HtmlRender.API.Extensions
{
    public static class HtmlRenderServiceCollectionExtensions
    {
        public static void AddConnectOptions(this IServiceCollection services, IConfiguration configuration)
        {
            var connectOptions = new ConnectOptions();
            configuration.Bind("PuppeteerConnectOptions", connectOptions);
            var browserlessToken = configuration.GetValue<string>("BrowserlessToken");
            if (!browserlessToken.IsNullOrEmpty())
            {
                connectOptions.BrowserWSEndpoint = $"{connectOptions.BrowserWSEndpoint}?token={browserlessToken}";
            }
            services.AddSingleton(connectOptions);
        }
    }
}
