using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading;
using RadioReport.Common.Consts;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Tests.Common.TestData
{
    public class ReportSchemaRepoStandardTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 ==",
                                    Metadata = 
                                    {
                                        new Metadata()
                                        {
                                            Key = "ICD",
                                            Value = "25"
                                        }
                                    },
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations = 
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                    Text = "Example translation2"
                                                }
                                            },
                                            InFixCondition = "a == 0",
                                            PostFixCondition = "a 0 ==",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = "ICD",
                                                    Value = "25"
                                                },
                                                new Metadata()
                                                {
                                                    Key = "ABC-2",
                                                    Value = "test text"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1
                        }
                    }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaRepoUpdateTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new List<Paragraph>
                {
                    new Paragraph
                    {
                        Name = "Title",
                        Order = 1,
                        Lines = 
                        {
                            new Line
                            {
                                LevelOrder = 1,
                                IsDeleted = true,
                                Translations = 
                                {
                                    new Translation
                                    {
                                        LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                        Text = "Example translation"
                                    }
                                },
                                InFixCondition = "a == 0",
                                PostFixCondition = "a 0 ==",
                                Metadata = 
                                {
                                    new Metadata()
                                    {
                                        Key = "ICD",
                                        Value = "25"
                                    },
                                    new Metadata()
                                    {
                                        Key = "ABC-2",
                                        Value = "test text"
                                    }
                                },
                                ChildLines = 
                                {
                                    new Line
                                    {
                                        LevelOrder = 1,
                                        IsDeleted = true,
                                        Translations = 
                                        {
                                            new Translation
                                            {
                                                LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                Text = "Example translation2"
                                            }
                                        },
                                        InFixCondition = "a == 0",
                                        PostFixCondition = "a 0 =="
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                }
            },
            new object[]
            {
                new List<Paragraph>(),
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1
                        }
                    }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaRepoIncludesTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    IsDeleted = false,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation2"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 =="
                                }
                            }
                        }
                    }
                }
            },
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 ==",
                                    Metadata = 
                                    {
                                        new Metadata()
                                        {
                                            Key = "ICD",
                                            Value = "25"
                                        }
                                    },
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations = 
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                    Text = "Example translation2"
                                                }
                                            },
                                            InFixCondition = "a == 0",
                                            PostFixCondition = "a 0 ==",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = "ICD",
                                                    Value = "25"
                                                },
                                                new Metadata()
                                                {
                                                    Key = "ABC-2",
                                                    Value = "test text"
                                                }
                                            },
                                            ChildLines = 
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Translations = 
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                            Text = "Example translation2"
                                                        }
                                                    },
                                                    InFixCondition = "a == 0",
                                                    PostFixCondition = "a 0 ==",
                                                    Metadata = 
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = "ICD",
                                                            Value = "25"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = "ABC-2",
                                                            Value = "test text"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaUpdateTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 4,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 =="
                                }
                            }
                        }
                    }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 4,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 =="
                                }
                            }
                        }
                    }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 1,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 4,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 =="
                                }
                            }
                        }
                    }
                }
            },
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-2222-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 4,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "a == 0",
                                    PostFixCondition = "a 0 =="
                                }
                            }
                        }
                    }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-2222-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-2222-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 1,
                    IsDefault = true
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaUpdateWithDefaultTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs =  { }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111112"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main2",
                    BuildVersion = 1,
                    IsDefault = false,
                    Paragraphs =  { }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaAddTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = false,
                    Paragraphs =  { }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaAddWithDefaultTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs =  { }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111112"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main2",
                    BuildVersion = 1,
                    IsDefault = true,
                    Paragraphs =  { }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}