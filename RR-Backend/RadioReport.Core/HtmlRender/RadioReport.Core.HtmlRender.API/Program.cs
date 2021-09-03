using Microsoft.Extensions.Hosting;
using RadioReport.Common.API.Models;

namespace RadioReport.Core.HtmlRender.API
{
    public class Program : ProgramBase<Startup>
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }
        
        public static IHostBuilder CreateHostBuilder(string[] args) => CommonCreateHostBuilder(args);
    }
}