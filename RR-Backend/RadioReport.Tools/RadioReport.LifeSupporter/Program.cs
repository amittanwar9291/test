using CommandLine;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RadioReport.Core.Users.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Extensions;

namespace RadioReport.LifeSupporter
{
	public class Program
	{
		private const string applicationUrl = "ApplicationURL";

        static void Main(string[] args)
        {
            Console.WriteLine($"Backend life supporter STARTED at {DateTime.Now}");

            string applicationUrlArg = string.Empty;

            Parser.Default.ParseArguments<LifeSupporterStartOptions>(args).WithParsed(o =>
            {
                applicationUrlArg = o.Application;
            });

            if (string.IsNullOrEmpty(applicationUrlArg))
            {
                throw new ArgumentNullException($"Missing application url");
            }

            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            IConfigurationRoot configuration = builder.Build();

            var user = configuration.GetSection("User")?.Value;
            var password = configuration.GetSection("Password")?.Value;
            var usersUrl = configuration.GetSection("Core_Users")?.Value;
            var paramsDict = new Dictionary<string, string> { { "user", user }, { "password", password }, { "usersUrl", usersUrl } };
            var emptyParams = paramsDict.Where(kp => string.IsNullOrEmpty(kp.Value));

            if (emptyParams.Any())
            {
                Console.WriteLine($"Missing configuration! " + String.Join(", ", emptyParams.Select(p => p.Key)));
                return;
            }

            using var httpClient = new HttpClient();
            var loginRequest = new LoginRequest()
            {
                UserName = user,
                Password = password,
                Application = Common.Logic.Enums.Application.RR,
                InstituteId = new Guid("cfdea220-325f-4450-af33-1c462ad38830")
            };

            var messageContent = loginRequest.AsJson();
            usersUrl = usersUrl.Replace(applicationUrl, applicationUrlArg, StringComparison.InvariantCulture);
            using (var httpMessage = new HttpRequestMessage(HttpMethod.Post, usersUrl))
            {
                httpMessage.Content = new StringContent(messageContent, Encoding.UTF8, "application/json");
                var authResponse = httpClient.SendAsync(httpMessage);
                authResponse.Wait();

                if (authResponse.Status == TaskStatus.RanToCompletion && authResponse.Result != null && authResponse.Result.IsSuccessStatusCode && authResponse.Result.Content != null)
                {
                    var responeString = authResponse.Result.Content.ReadAsStringAsync().Result;
                    var authData = JsonConvert.DeserializeObject<AuthResponse>(responeString);
                    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", authData.AccessToken);
                    Console.WriteLine($"OK: User {user} logged in successfully");
                }
                else
                {
                    Console.WriteLine("Something went wrong during auth request: " + authResponse.Result.StatusCode);
                    return;
                }

                var options = configuration.GetSection("Urls");

                foreach (IConfigurationSection section in options.GetChildren())
                {
                    try
                    {
                        // Console.WriteLine($"START waking up {section.Key} service with request: {section.Value}");
                        var url = section.Value.Replace(applicationUrl, applicationUrlArg, StringComparison.InvariantCulture);
                        using (HttpRequestMessage message = new HttpRequestMessage(HttpMethod.Get, url)
                        {
                            Content = new StringContent(string.Empty, Encoding.UTF8, "application/json")
                        })
                        {
                            var response = httpClient.SendAsync(message);
                            response.Wait();

                            if (response.Status == TaskStatus.RanToCompletion && response.Result != null && response.Result.IsSuccessStatusCode && response.Result.Content != null)
                            {
                                var resultString = response.Result.Content.ReadAsStringAsync();

                                Console.WriteLine(resultString.Result.ToUpperInvariant().Equals("FALSE", StringComparison.InvariantCulture)
                                    ? $"BAD: No correct answer from IsAlive for {url}"
                                    : $"OK: {response.Result?.StatusCode} for {url}");
                            }
                            else
                            {
                                Console.WriteLine($"BAD: {response.Result?.StatusCode} for {url}");
                            }
                        }                      
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine($"Something when wrong for {section.Key} - {e.Message}");
                    }
                    finally
                    {
                        //Console.WriteLine($"FINISH waking up {section.Key} service with request: {url}");
                    }
                }

                Console.WriteLine($"Backend life supporter ENDED at {DateTime.Now}");
            }
        }
	}
}
