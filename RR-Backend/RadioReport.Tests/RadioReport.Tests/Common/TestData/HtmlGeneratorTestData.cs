using System.Collections;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Tests.Common.TestData
{
    public class HtmlGeneratorTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            // CASE: General test 
            // (all lines not empty, new line character, bold, summary, icd-10, export tag, comments, separators, tables)
            new object[]
            {
                new ReportSchema
                {
                    Paragraphs =
                    {
                        new Paragraph
                        {
                            Order = 1,
                            Name = "Test P1",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "Test P1_L1",
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ShowInSummaryKey,
                                            Value = ReportConsts.TrueValue
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.PriorityKey,
                                            Value = "3"
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ICD10Key,
                                            Value = "S13, 124, abc"
                                        }
                                    },
                                    LineSeparator = ".\\a",
                                    PageNumber = 2,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P1_L1_C1",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.OnlyInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.PriorityKey,
                                                    Value = "2"
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ICD10Key,
                                                    Value = "rep1"
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ICD10Key,
                                                    Value = "rep2, rep3"
                                                }
                                            },
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P1_L1_C1_C1\\b",
                                                    PageNumber = 2,
                                                    LineSeparator = ":",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "5"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ICD10Key,
                                                            Value = "X123, eee, rep1, rep1"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ICD10Key,
                                                            Value = "rep1"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ICD10Key,
                                                            Value = "rep2, rep3"
                                                        }
                                                    }                                
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P1_L1_C1_C2",
                                                    Summary = new List<ReportSummaryTextModel>()
                                                    {
                                                        new ReportSummaryTextModel()
                                                        {
                                                            Lang = "en-GB",
                                                            ActualTextLang = null,
                                                            Text = "Test P1_L1_C1_C2"
                                                        }
                                                    },
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "3"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 2,
                                                    Text = "\\bTest P1_L1_C1_C3",
                                                    Summary = new List<ReportSummaryTextModel>()
                                                    {
                                                        new ReportSummaryTextModel()
                                                        {
                                                            Lang = "en-GB",
                                                            ActualTextLang = null,
                                                            Text = "Test P1_L1_C1"
                                                        }
                                                    },
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 3,
                                                    Text = "Text shown in empty summary",
                                                    Summary = new List<ReportSummaryTextModel>()
                                                    {
                                                        new ReportSummaryTextModel()
                                                        {
                                                            Lang = "en-GB",
                                                            ActualTextLang = null,
                                                            Text = "Text shown in empty summary"
                                                        }
                                                    },
                                                    PageNumber = 2,
                                                    LineSeparator = ".\\a",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInEmptySummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test \\bP1_L1_C2",
                                            Summary = new List<ReportSummaryTextModel>()
                                            {
                                                new ReportSummaryTextModel()
                                                {
                                                    Lang = "en-GB",
                                                    ActualTextLang = null,
                                                    Text = "Test \\bP1_L1_C2"
                                                }
                                            },
                                            PageNumber = 2,
                                            LineSeparator = ","
                                        }
                                    }
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "Test P1_L2",
                                    LineSeparator = ".\\a",
                                    PageNumber = 3,
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = "export-tag",
                                            Value = "findings"
                                        },
                                        new Metadata()
                                        {
                                            Key = "export-tag",
                                            Value = "patient data"
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.SentenceTypeKey,
                                            Value = "header"
                                        }
                                    },
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "\\\\\\Test P1_L2_C1",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.PriorityKey,
                                                    Value = "1"
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test P1_L2_C2",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.SentenceTypeKey,
                                                    Value = "header"
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ShowInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.PriorityKey,
                                                    Value = "5"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        new Paragraph
                        {
                            Order = 2,
                            Name = "Test P2",
                            Metadata =
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "impression"
                                }
                            },
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = string.Empty,
                                    LineSeparator = ".\\a",
                                    PageNumber = 4,
                                    Table = new Table()
                                    {
                                        HasHeader = true,
                                        Name = "Table 1",
                                        Rows =
                                        {
                                            new TableRow()
                                            {
                                                Order = 0,
                                                Columns =
                                                {
                                                    new TableCell()
                                                    {
                                                        Order = 1,
                                                        Text = "Col 1",
                                                        Metadata =
                                                        {
                                                            new Metadata()
                                                            {
                                                                Key = ReportConsts.ICD10Key,
                                                                Value = "idc10Table, rep2, rep1"
                                                            }
                                                        }
                                                    },
                                                    new TableCell()
                                                    {
                                                        Order = 2,
                                                        Text = "Col 2"
                                                    }
                                                }
                                            },
                                            new TableRow()
                                            {
                                                Order = 1,
                                                Columns =
                                                {
                                                    new TableCell()
                                                    {
                                                        Order = 1,
                                                        Text = "Col1-row1"
                                                    },
                                                    new TableCell()
                                                    {
                                                        Order = 2,
                                                        Text = "\\bCol2-row1"
                                                    }
                                                }
                                            },
                                            new TableRow()
                                            {
                                                Order = 2,
                                                Columns =
                                                {
                                                    new TableCell()
                                                    {
                                                        Order = 1,
                                                        Text = "Col1-row2 \\n newline"
                                                    },
                                                    new TableCell()
                                                    {
                                                        Order = 2,
                                                        Text = "Col2-row2"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P2_L1_C1",
                                            PageNumber = 4,
                                            LineSeparator = "&",
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ShowInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ICD10Key,
                                                    Value = "r3X"
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.PriorityKey,
                                                    Value = "1"
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test P2_L1_C2",
                                            PageNumber = 4,
                                            LineSeparator = ","
                                        }
                                    },
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.SentenceTypeKey,
                                            Value = "title"
                                        }
                                    }
                                }
                            }
                        },
                        new Paragraph
                        {
                            Order = 3,
                            Name = "Test P3",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 2,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = string.Empty,
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "\\nTest P3_L1_C1_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";"
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = string.Empty,
                                                    PageNumber = 2,
                                                    LineSeparator = string.Empty,
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.OnlyInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        }
                                                    },
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 2",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Text = "Col 1"
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Text = "Col1-row1"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P3_L1_C2_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "1"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P3_L1_C2_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.SentenceTypeKey,
                                                            Value = "title"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.SummaryEditTitleKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 2,
                                                    Text = string.Empty,
                                                    PageNumber = 2,
                                                    LineSeparator = string.Empty,
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "3"
                                                        }
                                                    },
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Text = "Col 1"
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Text = "Col1-row1",
                                                                        Metadata =
                                                                        {
                                                                            new Metadata()
                                                                            {
                                                                                Key = ReportConsts.ICD10Key,
                                                                                Value = "icd10InSummary"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 3,
                                                    Text = string.Empty,
                                                    PageNumber = 2,
                                                    LineSeparator = string.Empty,
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.OnlyInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "4"
                                                        }
                                                    },
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Text = "Col 1"
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Text = "Col1-row1",
                                                                        Metadata =
                                                                        {
                                                                            new Metadata()
                                                                            {
                                                                                Key = ReportConsts.ICD10Key,
                                                                                Value = "icd10OnlyInSummary"
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
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 3,
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.SentenceTypeKey,
                                            Value = "image"
                                        }
                                    },
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P3_L2_C1_C1\\n Next text",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "1"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P3_L2_C1_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                new Line
                                {
                                    Name = ReportConsts.SummarySentenceName,
                                    LevelOrder = 3,
                                    Text = string.Empty,
                                    LineSeparator = ".\\a",
                                    PageNumber = 0
                                }
                            }
                        },
                        new Paragraph
                        {
                            Order = 4,
                            Name = "Test P4",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 2,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "\\bTest P4_L1_C1_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "1"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P4_L1_C1_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 2,
                                                    Text = "Test P4_L1_C1_C3",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.FontKey,
                                                            Value = ReportConsts.FontSmallValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "3"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P4_L1_C2_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "1"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P4_L1_C2_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 3,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P4_L2_C1_C1\\b",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "1"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P4_L2_C1_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                new Line
                                {
                                    LevelOrder = 3,
                                    Text = "",
                                    LineSeparator = "!\\a",
                                    PageNumber = 3,
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.OnlyInSummaryKey,
                                            Value = ReportConsts.TrueValue
                                        }
                                    },
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P4_L3_C1",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.OnlyInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test P4_L3_C2",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.OnlyInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }, 
                        new Paragraph
                        {
                            Order = 5,
                            Name = "Test P5",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "Test P5_L1",
                                    LineSeparator = ",",
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.FontKey,
                                            Value = ReportConsts.FontSmallValue
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ShowInSummaryKey,
                                            Value = ReportConsts.TrueValue
                                        }
                                    },
                                    PageNumber = 6,
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "\\bTest P5_L2",
                                    LineSeparator = ",",
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.FontKey,
                                            Value = ReportConsts.FontSmallValue
                                        }
                                    },
                                    PageNumber = 6,
                                }                               
                            }
                        },
                        new Paragraph
                        {
                            Order = 6,
                            Name = "Summary & ICD-10",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "Text shown in not empty summary",
                                    Summary = new List<ReportSummaryTextModel>()
                                    {
                                        new ReportSummaryTextModel()
                                        {
                                            Lang = "en-GB",
                                            ActualTextLang = null,
                                            Text = "Text shown in not empty summary"
                                        }
                                    },
                                    LineSeparator = ",",
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ShowInNotEmptySummaryKey,
                                            Value = ReportConsts.TrueValue
                                        }
                                    }
                                },
                                new Line
                                {
                                    Name = ReportConsts.SummarySentenceName,
                                    LevelOrder = 2,
                                    Text = string.Empty,
                                    LineSeparator = ".\\a",
                                    PageNumber = 0
                                },
                                new Line
                                {
                                    Name = ReportConsts.ICD10SentenceName,
                                    LevelOrder = 3,
                                    Text = string.Empty,
                                    PageNumber = 0
                                }
                            }
                        }    
                    }
                },
                new ReportResult()
                {
                    IsICD10 = true,
                    IsLocalizer = false,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                    {
                        new ReportSummaryModel()
                        {
                            Order = 1,
                            PageNumber = 3,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P1_L2_C2 "
                                }
                            }
                        },
                        new ReportSummaryModel()
                        {
                            Order = 2,
                            PageNumber = 4,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P2_L1_C1 "
                                }
                            }
                        },
                        new ReportSummaryModel()
                        {
                            Order = 3,
                            PageNumber = 3,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P3_L2_C1_C1 Next text; Test P3_L2_C1_C2 "
                                }
                            }
                        },
                        new ReportSummaryModel()
                        {
                            Order = 4,
                            PageNumber = 2,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P4_L1_C1_C1; Test P4_L1_C1_C2, Test P4_L1_C2_C1; Test P4_L1_C2_C2 "
                                }
                            }
                        },
                        new ReportSummaryModel()
                        {
                            Order = 5,
                            PageNumber = 3,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P4_L2_C1_C1; Test P4_L2_C1_C2 "
                                }
                            }
                        },
                        new ReportSummaryModel()
                        {
                            Order = 6,
                            PageNumber = 2,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P1_L1 Test P1_L1_C1 Test P1_L1_C1_C1: Test P1_L1_C1_C2; Test P1_L1_C1_C3. "
                                }
                            }
                        },
                        new ReportSummaryModel()
                        {
                            Order = 7,
                            PageNumber = 3,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P4_L3_C1, Test P4_L3_C2! "
                                }
                            }
                        }                       
                    }
                },
                "<span page=\"2\">Test P1_L1 <strong page=\"2\">Test P1_L1_C1_C1</strong>: Test P1_L1_C1_C2; <strong page=\"2\">Test P1_L1_C1_C3</strong>, <strong page=\"2\">Test P1_L1_C2</strong>. </span>" +
                "<!-- <export-tag=findings> -->" +
                "<!-- <export-tag=patient data> -->" +
                "<span page=\"3\"><!-- <sentence-type=header> -->Test P1_L2 <!-- </sentence-type=header> --><!-- <sentence-type=header> -->Test P1_L2_C2<!-- </sentence-type=header> -->. </span>" +
                "<!-- </export-tag=patient data> -->" +
                "<!-- </export-tag=findings> -->" +
                "<!-- <export-tag=impression> -->" +
                "<span page=\"4\"><!-- <sentence-type=title> -->" +
                "<table class=\"report-table\">" +
                "<tr><th>Col 1</th><th>Col 2</th></tr>" +
                "<tr><td>Col1-row1</td><td><strong page=\"4\">Col2-row1</strong></td></tr>" +
                "<tr><td>Col1-row2 <br/> newline</td><td>Col2-row2</td></tr>" +
                "</table><!-- </sentence-type=title> -->" +
                "Test P2_L1_C1&amp; Test P2_L1_C2. </span>" +
                "<!-- </export-tag=impression> -->" +
                "<span page=\"2\"><br/>Test P3_L1_C1_C1 " +
                "Test P3_L1_C2_C1; </span><span page=\"2\" id=\"summary-title\"><!-- <sentence-type=title> -->Test P3_L1_C2_C2<!-- </sentence-type=title> --></span>" +
                "<span page=\"2\">; <table class=\"report-table\">" +
                "<tr><th>Col 1</th></tr>" +
                "<tr><td>Col1-row1</td></tr>" +
                "</table>. " +
                "</span>" +
                "<span page=\"3\"><!-- <sentence-type=image> --><!-- </sentence-type=image> -->Test P3_L2_C1_C1<br/> Next text; Test P3_L2_C1_C2. </span>" +
                "<span page=\"3\"><br/>1. Test P1_L2_C2 </span>" +
                "<span page=\"4\"><br/>2. Test P2_L1_C1 </span>" +
                "<span page=\"3\"><br/>3. Test P3_L2_C1_C1 Next text; Test P3_L2_C1_C2 </span>" +
                "<span page=\"2\"><br/>4. Test P4_L1_C1_C1; Test P4_L1_C1_C2, Test P4_L1_C2_C1; Test P4_L1_C2_C2 </span>" +
                "<span page=\"3\"><br/>5. Test P4_L2_C1_C1; Test P4_L2_C1_C2 </span>" +
                "<span page=\"2\"><br/>6. Test P1_L1 Test P1_L1_C1 Test P1_L1_C1_C1: Test P1_L1_C1_C2; Test P1_L1_C1_C3. </span>" +
                "<span page=\"3\"><br/>7. Test P4_L3_C1, Test P4_L3_C2! </span>" +
                "<span page=\"2\"><strong page=\"2\">Test P4_L1_C1_C1</strong>; Test P4_L1_C1_C2; </span><span page=\"2\" class=\"font-small\">Test P4_L1_C1_C3</span><span page=\"2\">, Test P4_L1_C2_C1; Test P4_L1_C2_C2. </span>" +
                "<span page=\"3\"><strong page=\"3\">Test P4_L2_C1_C1</strong>; Test P4_L2_C1_C2. </span>" +
                "<span page=\"6\" class=\"font-small\">Test P5_L1 </span>" +
                "<span page=\"6\" class=\"font-small\"><strong page=\"6\">Test P5_L2</strong> </span>" +
                "<span>Text shown in not empty summary </span>" +
                "<span page=\"3\"><br/>1. Test P1_L2_C2 </span>" +
                "<span page=\"4\"><br/>2. Test P2_L1_C1 </span>" +
                "<span page=\"3\"><br/>3. Test P3_L2_C1_C1 Next text; Test P3_L2_C1_C2 </span>" +
                "<span page=\"2\"><br/>4. Test P4_L1_C1_C1; Test P4_L1_C1_C2, Test P4_L1_C2_C1; Test P4_L1_C2_C2 </span>" +
                "<span page=\"3\"><br/>5. Test P4_L2_C1_C1; Test P4_L2_C1_C2 </span>" +
                "<span page=\"2\"><br/>6. Test P1_L1 Test P1_L1_C1 Test P1_L1_C1_C1: Test P1_L1_C1_C2; Test P1_L1_C1_C3. </span>" +
                "<span page=\"3\"><br/>7. Test P4_L3_C1, Test P4_L3_C2! </span>" +
                "<span><br/>S13, 124, abc, rep1, rep2, rep3, X123, eee, idc10Table, r3X, icd10InSummary, icd10OnlyInSummary</span>"              
            },

            // CASE: Root sentence empty, "only in summary" in child, separators
            new object[]
            {
                new ReportSchema
                {
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Order = 1,
                            Name = "Test P1",
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "",
                                    LineSeparator = ".",
                                    PageNumber = 2,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P1_L1_C1",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.OnlyInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test P1_L1_C2",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.OnlyInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test P1_L1_C3",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ShowInEmptySummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                }
                                            }
                                        }
                                    }
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 3,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P1_L2_C1",
                                            PageNumber = 2,
                                            LineSeparator = ","
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "Test P1_L2_C2",
                                            PageNumber = 2,
                                            LineSeparator = ","
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportResult()
                {
                    IsICD10 = true,
                    IsLocalizer = false,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                    {
                        new ReportSummaryModel()
                        {
                            Order = 1,
                            PageNumber = 3,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P1_L2_C1, Test P1_L2_C2. "
                                }
                            }
                        },
                    }
                },
                "<span page=\"3\">Test P1_L2_C1, Test P1_L2_C2. </span>"
            },

            // CASE: Root and inner root sentences empty, icd-10 in the middle, separators
            new object[]
            {
                new ReportSchema
                {
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Order = 1,
                            Name = "Test P1",
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 2,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines = 
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P1_L1_C1_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata = 
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ICD10Key,
                                                            Value = "r3X"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P1_L1_C1_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";"
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ICD10Key,
                                                    Value = "S1, S2"
                                                }
                                            },
                                            ChildLines = 
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P1_L1_C2_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";"
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P1_L1_C2_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";"
                                                }
                                            }
                                        }
                                    }
                                },
                                new Line
                                {
                                    Name = ReportConsts.ICD10SentenceName,
                                    LevelOrder = 2,
                                    Text = string.Empty,
                                    PageNumber = 0
                                },
                                new Line
                                {
                                    LevelOrder = 3,
                                    Text = "",
                                    LineSeparator = ".\\a",
                                    PageNumber = 3,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "",
                                            PageNumber = 2,
                                            LineSeparator = ",",
                                            ChildLines = 
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 0,
                                                    Text = "Test P1_L3_C1_C1",
                                                    PageNumber = 2,
                                                    LineSeparator = ";"
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Text = "Test P1_L3_C1_C2",
                                                    PageNumber = 2,
                                                    LineSeparator = ";",
                                                    Metadata = 
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ICD10Key,
                                                            Value = "S3"
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
                },
                new ReportResult()
                {
                    IsICD10 = true,
                    IsLocalizer = false,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                },
                "<span page=\"2\">Test P1_L1_C1_C1; Test P1_L1_C1_C2, Test P1_L1_C2_C1; Test P1_L1_C2_C2. </span>" +
                "<span><br/>r3X, S1, S2, S3</span>" +
                "<span page=\"3\">Test P1_L3_C1_C1; Test P1_L3_C1_C2. </span>"
            },

            // CASE: Middle lines empty, summary at the beginning, separators
            new object[]
            {
                new ReportSchema
                {
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Order = 1,
                            Name = "Test P1",
                            Lines = 
                            {
                                new Line
                                {
                                    Name = ReportConsts.SummarySentenceName,
                                    LevelOrder = 1,
                                    Text = string.Empty,
                                    LineSeparator = ".\\a",
                                    PageNumber = 0
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "Test P1_L2",
                                    LineSeparator = ".\\a",
                                    PageNumber = 4,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P1_L2_C1",
                                            PageNumber = 4,
                                            LineSeparator = ","
                                        },
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Text = "",
                                            PageNumber = 4,
                                            LineSeparator = ","
                                        },
                                        new Line
                                        {
                                            LevelOrder = 2,
                                            Text = "",
                                            PageNumber = 4,
                                            LineSeparator = ","
                                        },
                                        new Line
                                        {
                                            LevelOrder = 3,
                                            Text = "Test P1_L2_C4",
                                            PageNumber = 4,
                                            LineSeparator = ",",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ShowInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.PriorityKey,
                                                    Value = "1"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportResult()
                {
                    IsICD10 = true,
                    IsLocalizer = false,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                    {
                        new ReportSummaryModel()
                        {
                            Order = 1,
                            PageNumber = 4,
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "en-GB",
                                    ActualTextLang = null,
                                    Text = "Test P1_L2_C4 "
                                }
                            }
                        },
                    }
                },
                "<span><br/></span><span id=\"summary-title\"></span>" +
                "<span page=\"4\"><br/>Test P1_L2_C4 </span>" +
                "<span page=\"4\">Test P1_L2 Test P1_L2_C1, Test P1_L2_C4. </span>"
            },

            // CASE: Empty summary
            new object[]
            {
                new ReportSchema
                {
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Order = 1,
                            Name = "Test P1",
                            Lines = 
                            {
                                new Line
                                {
                                    Name = ReportConsts.SummarySentenceName,
                                    LevelOrder = 1,
                                    Text = string.Empty,
                                    LineSeparator = ".\\a",
                                    PageNumber = 0
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    Text = "Test P1_L2",
                                    LineSeparator = ".\\a",
                                    PageNumber = 4,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 0,
                                            Text = "Test P1_L2_C1",
                                            PageNumber = 4,
                                            LineSeparator = ",",
                                            Metadata = 
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ShowInSummaryKey,
                                                    Value = ReportConsts.FalseValue
                                                },
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.PriorityKey,
                                                    Value = "1"
                                                }
                                            }
                                        }
                                    }
                                },
                                new Line
                                {
                                    LevelOrder = 3,
                                    Text = "Text shown in empty summary",
                                    Summary = new List<ReportSummaryTextModel>()
                                    {
                                        new ReportSummaryTextModel()
                                        {
                                            Lang = "en-GB",
                                            ActualTextLang = null,
                                            Text = "Text shown in empty summary"
                                        }
                                    },
                                    LineSeparator = ".\\a",
                                    PageNumber = 4,
                                    Metadata = 
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ShowInEmptySummaryKey,
                                            Value = ReportConsts.TrueValue
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.PriorityKey,
                                            Value = "1"
                                        }
                                    }
                                },
                                new Line
                                {
                                    LevelOrder = 4,
                                    Text = "Text shown in not empty summary",
                                    Summary = new List<ReportSummaryTextModel>()
                                    {
                                        new ReportSummaryTextModel()
                                        {
                                            Lang = "en-GB",
                                            ActualTextLang = null,
                                            Text = "Text shown in not empty summary"
                                        }
                                    },
                                    LineSeparator = ".\\a",
                                    PageNumber = 4,
                                    Metadata = 
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ShowInNotEmptySummaryKey,
                                            Value = ReportConsts.TrueValue
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.PriorityKey,
                                            Value = "1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportResult()
                {
                    IsICD10 = true,
                    IsLocalizer = false,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                },
                "<span page=\"4\">Test P1_L2 Test P1_L2_C1. </span>" +
                "<span page=\"4\">Text shown in empty summary. </span>"
            },

            // CASE: Empty
            new object[]
            {
                new ReportSchema(),
                new ReportResult()
                {
                    IsICD10 = true,
                    IsLocalizer = false,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                },
                string.Empty
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
            
    }
}