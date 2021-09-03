using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using RadioReport.Common.Models;

namespace RadioReport.Tests.Helpers
{
    public static class FakeHelper
    {
        public static int IgnoredInt => A<int>.Ignored;
        public static CancellationToken IgnoredCt => A<CancellationToken>.Ignored;
        public static string IgnoredString => A<string>.Ignored;
        public static Guid IgnoredGuid => A<Guid>.Ignored;
        public static HttpAuthContext IgnoredAuth => A<HttpAuthContext>.Ignored;
        public static Expression<Func<T1, T2>> IgnoreExpression<T1, T2>() => A<Expression<Func<T1, T2>>>.Ignored;
        public static Task CompletedTask => Task.CompletedTask;

        public static HttpContext FakeRequest(this HttpContext context, HttpRequest request)
        {
            A.CallTo(() => context.Request).Returns(request);

            return context;
        }

        public static HttpContext FakeResponse(this HttpContext context, HttpResponse response)
        {
            A.CallTo(() => context.Response).Returns(response);

            return context;
        }

        public static HttpRequest FakePath(this HttpRequest request, PathString path = default)
        {
            A.CallTo(() => request.Path).Returns(path != default ? new PathString(path) : new PathString("/"));

            return request;
        }

        public static HttpRequest FakeQuery(this HttpRequest request, IQueryCollection queryCollection = null)
        {
            A.CallTo(() => request.Query).Returns(queryCollection ?? A.Fake<IQueryCollection>());

            return request;
        }

        public static HttpRequest FakeHeaders(this HttpRequest request, params KeyValuePair<string, StringValues>[] headers)
        {
            A.CallTo(() => request.Headers).Returns(new HeaderDictionary(new Dictionary<string, StringValues>(headers)));

            return request;
        }

        public static HttpRequest FakeBearerAuthHeader(this HttpRequest request, string tokenString)
        {
            A.CallTo(() => request.Headers).Returns(new HeaderDictionary
            {
                {
                    "Authorization",
                    new StringValues($"Bearer {tokenString}")
                }
            });

            return request;
        }
    }
}
