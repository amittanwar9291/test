using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PuppeteerSharp;
using PuppeteerSharp.Media;
using RadioReport.Common.Consts;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Enums;
using RadioReport.Core.HtmlRender.Domain.Interfaces;
using PaperFormat = RadioReport.Common.Logic.Enums.PaperFormat;

namespace RadioReport.Core.HtmlRender.Domain.HostedServices
{
    public class HtmlRenderKafkaService : KafkaConsumerHostedServiceBase
    {
        private readonly IBrowserService _browserService;

        public HtmlRenderKafkaService(ConsumerConfig consumerConfig, IServiceScopeFactory serviceScopeFactory, ICacheService cacheService, IBrowserService browserService,
            ILogger<HtmlRenderKafkaService> logger) : base(consumerConfig, logger, serviceScopeFactory, cacheService)
        {
            _browserService = browserService;
        }

        protected override IEnumerable<string> Topics { get; } = new[]
        {
            KafkaTopic.Request.HtmlRender,
            KafkaTopic.Request.BulkHtmlRender,
            KafkaTopic.Request.HtmlTemplateRender
        };

        protected override async Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope)
        {
            if (topic == KafkaTopic.Request.HtmlRender)
            {
                await HandleHtmlRender(message, serviceScope);
            }
            else if (topic == KafkaTopic.Request.BulkHtmlRender)
            {
                await HandleBulkHtmlRender(message, serviceScope);
            }
            else if (topic == KafkaTopic.Request.HtmlTemplateRender)
            {
                await HandleTemplateRendering(message, serviceScope);
            }
        }

        private async Task HandleBulkHtmlRender(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<BulkHtmlRenderRequest>();
            var renderedContents = new Dictionary<string, byte[]>();
            var responseDict = new Dictionary<string, string>();
            var minIOService = serviceScope.ServiceProvider.GetRequiredService<IMinIOService>();
            var fileFormat = request.CacheReturn ? "" : request.HtmlRenderFormat.ToString().ToLower();
            if (!request.CacheReturn) await minIOService.CreateBucketIfNotExist(MinIO.Buckets.HtmlRenders);
            foreach (var (contentKey, contentInfo) in request.HtmlContentMap)
            {
                var renderData = await Rendering(contentInfo.htmlContent, contentInfo.viewport, request.PaperFormat, request.HtmlRenderFormat);
                if (request.CacheReturn)
                {
                    renderedContents.Add(contentKey, renderData);
                }
                else
                {
                    await minIOService.PutObjectAsync(MinIO.Buckets.HtmlRenders, request.CacheKey, $"{contentKey}.{fileFormat}", renderData);
                    responseDict.Add(contentKey, $"{request.CacheKey}/{contentKey}.{fileFormat}");
                }
            }

            if (request.CacheReturn)
            {
                foreach (var (contentKey, contentData) in renderedContents)
                {
                    responseDict.Add(contentKey, Convert.ToBase64String(contentData));
                }
            }

            await CacheService.Set(request.CacheKey, new BulkHtmlRenderResponse(true, responseDict).AsJson(),
                TimeSpan.FromMinutes(Redis.Expirations.HtmlRenderResultMinutes));
        }

        private async Task HandleHtmlRender(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<HtmlRenderRequest>();

            var renderData = await Rendering(request.HtmlContent, request.Viewport, request.PaperFormat, request.HtmlRenderFormat);

            await ReturnPath(renderData, request.CacheReturn, request.CacheKey, request.HtmlRenderFormat, serviceScope);
        }

        private async Task HandleTemplateRendering(string message, IServiceScope serviceScope)
        {
            var request = message.Deserialize<HtmlTemplateRenderRequest>();

            var renderData = await TemplateRendering(request);
            
            await ReturnPath(renderData, request.CacheReturn, request.CacheKey, HtmlRenderFormat.PDF, serviceScope);
        }

        private async Task<byte[]> TemplateRendering(HtmlTemplateRenderRequest htmlTemplateRenderRequest)
        {
            await _browserService.InitBrowser();
            var chromiumPage = await _browserService.ChromiumBrowser.NewPageAsync();
            await chromiumPage.SetContentAsync($"<style>{htmlTemplateRenderRequest.CssSection}</style>\n{htmlTemplateRenderRequest.BodySection}");

            var pdfOptions = new PdfOptions
            {
                PrintBackground = true,
                HeaderTemplate = $"<div id=\"header-template\" style=\"width: 100%;\">{htmlTemplateRenderRequest.HeaderSection}</div>",
                DisplayHeaderFooter = true,
                Format = PaperFormatMapping(htmlTemplateRenderRequest.PaperFormat),
                MarginOptions = new MarginOptions
                {
                    Top = htmlTemplateRenderRequest.TopMargin,
                    Right = htmlTemplateRenderRequest.RightMargin,
                    Bottom = htmlTemplateRenderRequest.BottomMargin,
                    Left = htmlTemplateRenderRequest.LeftMargin
                },
                FooterTemplate = $"<div id=\"footer-template\" style=\"width: 100%;\">{htmlTemplateRenderRequest.FooterSection}</div>"
            };
            var pdfData = await chromiumPage.PdfDataAsync(pdfOptions);
            await chromiumPage.CloseAsync();
            return pdfData;
        }

        private async Task<byte[]> Rendering(string htmlContent, (int width, int height) viewport, PaperFormat paperFormat, HtmlRenderFormat htmlRenderFormat)
        {
            await _browserService.InitBrowser();
            var chromiumPage = await _browserService.ChromiumBrowser.NewPageAsync();
            await chromiumPage.SetContentAsync(htmlContent);
            switch (htmlRenderFormat)
            {
                case HtmlRenderFormat.PNG:
                    await chromiumPage.SetViewportAsync(new ViewPortOptions() { Height = viewport.height + ConfigurationConsts.HtmlRenderViewportHeightAdjustment, Width = viewport.width + ConfigurationConsts.HtmlRenderViewportWidthAdjustment });
                    var pngData = await chromiumPage.ScreenshotDataAsync(new ScreenshotOptions(){OmitBackground = true, Type = ScreenshotType.Png});
                    await chromiumPage.CloseAsync();
                    return pngData;
                case HtmlRenderFormat.PDF:
                    var pdfOptions = new PdfOptions()
                    {
                        PrintBackground = true
                    };
                    pdfOptions.Format = PaperFormatMapping(paperFormat);
                    var pdfData = await chromiumPage.PdfDataAsync(pdfOptions);
                    await chromiumPage.CloseAsync();
                    return pdfData;
                default:
                    await chromiumPage.CloseAsync();
                    throw new ArgumentOutOfRangeException(nameof(HtmlRenderFormat), htmlRenderFormat, null);
            }
        }

        private async Task ReturnPath(byte[] data, bool cacheReturn, string cacheKey, HtmlRenderFormat htmlRenderFormat,  IServiceScope serviceScope)
        {
            if (cacheReturn)
            {
                var response = new HtmlRenderResponse
                {
                    IsSuccess = true,
                    RenderContent = Convert.ToBase64String(data)
                };
                await CacheService.Set(cacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.HtmlRenderResultMinutes));
            }
            else
            {
                var fileFormat = htmlRenderFormat.ToString().ToLower();
                var minIOService = serviceScope.ServiceProvider.GetRequiredService<IMinIOService>();
                await minIOService.CreateBucketIfNotExist(MinIO.Buckets.HtmlRenders);
                await minIOService.PutObjectAsync(MinIO.Buckets.HtmlRenders, cacheKey, $"{MinIO.DefaultHtmlRenderFileName}.{fileFormat}", data);
                var response = new HtmlRenderResponse
                {
                    IsSuccess = true,
                    RenderContent = $"{cacheKey}/{MinIO.DefaultHtmlRenderFileName}.{fileFormat}"
                };
                await CacheService.Set(cacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.HtmlRenderResultMinutes));
            }
        }

        private static PuppeteerSharp.Media.PaperFormat PaperFormatMapping(PaperFormat paperFormat)
        {
            var result  = paperFormat switch
            {
                PaperFormat.Letter => PuppeteerSharp.Media.PaperFormat.Letter,
                PaperFormat.Legal => PuppeteerSharp.Media.PaperFormat.Legal,
                PaperFormat.Tabloid => PuppeteerSharp.Media.PaperFormat.Tabloid,
                PaperFormat.Ledger => PuppeteerSharp.Media.PaperFormat.Ledger,
                PaperFormat.A0 => PuppeteerSharp.Media.PaperFormat.A0,
                PaperFormat.A1 => PuppeteerSharp.Media.PaperFormat.A1,
                PaperFormat.A2 => PuppeteerSharp.Media.PaperFormat.A2,
                PaperFormat.A3 => PuppeteerSharp.Media.PaperFormat.A3,
                PaperFormat.A4 => PuppeteerSharp.Media.PaperFormat.A4,
                PaperFormat.A5 => PuppeteerSharp.Media.PaperFormat.A5,
                PaperFormat.A6 => PuppeteerSharp.Media.PaperFormat.A6,
                _ => throw new ArgumentOutOfRangeException(nameof(paperFormat), paperFormat, null)
            };
            return result;
        }
    }
}
