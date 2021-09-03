using System;
using System.Threading.Tasks;
using Polly;
using PuppeteerSharp;
using RadioReport.Core.HtmlRender.Domain.Interfaces;

namespace RadioReport.Core.HtmlRender.Domain.Services
{
    public class BrowserService : IBrowserService
    {
        private readonly ConnectOptions _connectOptions;
        public Browser ChromiumBrowser { get; set; }

        public BrowserService(ConnectOptions connectOptions)
        {
            _connectOptions = connectOptions;
            InitBrowser(false).Wait();
        }

        public async Task InitBrowser(bool checkHealth = true)
        {
            if (checkHealth)
            {
                if (!ChromiumBrowserOk())
                {
                    ChromiumBrowser = await RetryConnect();
                }
            }
            else
            {
                ChromiumBrowser = await RetryConnect();
            }
        }

        private bool ChromiumBrowserOk() => !ChromiumBrowser.IsClosed && ChromiumBrowser.IsConnected;

        private async Task<Browser> RetryConnect() =>
            await Policy
                .Handle<Exception>()
                .WaitAndRetryForeverAsync(retryNo =>
                {
                    var delaySeconds = Math.Pow(2, retryNo);
                    Console.WriteLine($"Retry No.: {retryNo}; Waiting for: {delaySeconds} seconds");

                    return TimeSpan.FromSeconds(delaySeconds);
                })
                .ExecuteAsync(() => Puppeteer.ConnectAsync(_connectOptions));
    }
}
