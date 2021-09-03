"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new CallSuperSlideBaseWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "No super.ngOnDestroy() call";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var CallSuperSlideBaseWalker = /** @class */ (function (_super) {
    __extends(CallSuperSlideBaseWalker, _super);
    function CallSuperSlideBaseWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallSuperSlideBaseWalker.prototype.visitClassDeclaration = function (node) {
        var _this = this;
        if (node.heritageClauses !== undefined) {
            node.heritageClauses.forEach(function (clause) {
                if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
                    var regexp = new RegExp("SlideBaseComponent<(\\w)+?>");
                    if (regexp.test(clause.getText())) {
                        _this.extendsSlideBase = true;
                    }
                }
            });
        }
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    CallSuperSlideBaseWalker.prototype.visitMethodDeclaration = function (node) {
        if (this.extendsSlideBase) {
            var superCallExists_1 = false;
            if (node.name.getText() === "ngOnDestroy" && node.body.statements !== undefined) {
                node.body.statements.forEach(function (s) {
                    if (s.getText() === "super.ngOnDestroy();") {
                        superCallExists_1 = true;
                    }
                });
                if (!superCallExists_1) {
                    var fix = new Lint.Replacement(node.body.statements[0].getStart(), 0, "super.ngOnDestroy();\n    ");
                    this.addFailure(this.createFailure(node.name.getStart(), node.name.getWidth(), Rule.FAILURE_STRING, fix));
                }
            }
        }
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    return CallSuperSlideBaseWalker;
}(Lint.RuleWalker));
