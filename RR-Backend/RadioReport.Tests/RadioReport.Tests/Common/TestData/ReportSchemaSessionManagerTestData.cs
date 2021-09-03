using System;
using System.Collections;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Tests.Common.TestData
{
    public class ReportSchemaSessionManagerGetTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchemaSession()
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111111"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                },
                false
            },
            new object[] {
                new ReportSchemaSession()
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111111"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now.AddHours(-4)
                },
                true
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaSessionManagerAddTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("22222222-2222-2222-2222-222222222222"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                },
                new ReportSchemaSession()
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportSchemaId = new Guid("22222222-2222-2222-2222-222222222222"),
                    UserName = "Test User 2",
                    LastActivity = DateTime.Now
                }
            },
            new object[] {
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("22222222-2222-2222-2222-222222222222"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                },
                null
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaSessionManagerUpdateTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchemaSession()
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111111"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                }
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportsSchemaSessionManagerRemoveTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] 
            {
                new ReportSchemaSession()
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportSchemaId = new Guid("22222222-2222-2222-2222-222222222222"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
