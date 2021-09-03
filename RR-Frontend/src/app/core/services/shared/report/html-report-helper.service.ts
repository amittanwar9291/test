import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlReportHelper {
  renderer2: Renderer2;

  constructor(public translate: TranslateService) {}

  clearReportContainer(reportContainer: ElementRef) {
    const reportContent = reportContainer?.nativeElement.querySelectorAll('div, span');
    reportContent?.forEach((e: HTMLElement) => {
      this.renderer2.removeChild(reportContainer.nativeElement, e);
    });
  }

  copyToClipboard(header: Node, content: Node, discussion: Node) {
    // Not using Clipboard API. since typescript doesn't supports clipboard.write().
    // Only clipboard.writeText() is supported but we want to copy html not string.

    const container = document.createElement('div');
    container.style.cssText = 'background-color:white; font-family:\'Segoe UI\';';

    container.appendChild(header);
    container.appendChild(content);
    if (discussion) {
      container.appendChild(discussion);
    }

    Array.from(container.getElementsByTagName('table')).forEach(table => {
      table.style.cssText = 'font-family:\'Segoe UI\';';
      table.parentNode.parentNode.insertBefore(document.createElement('br'), table.parentNode);
      table.parentNode.insertBefore(document.createElement('br'), table.nextSibling);
    });

    Array.from(container.getElementsByTagName('th')).forEach(th => {
      th.style.cssText = 'font-family:\'Segoe UI\';';
    });

    Array.from(container.getElementsByClassName('font-small')).forEach(f => {
      (f as HTMLElement).style.cssText = 'font-size: 8pt;';
    });

    Array.from(container.getElementsByClassName('font-italic')).forEach(f => {
      (f as HTMLElement).style.cssText = 'font-style: italic;';
    });

    Array.from(container.getElementsByClassName('font-underline')).forEach(f => {
      (f as HTMLElement).style.cssText = 'text-decoration: underline;';
    });

    document.body.appendChild(container);
    window.getSelection().removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(container);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    document.body.removeChild(container);
  }

  async createClipboardDiscussionSection(discussion: string): Promise<Node> {
    const outputDiscussion = discussion ? document.createElement('div') : null;
    if (outputDiscussion) {
      const title = document.createElement('div');
      title.setAttribute('style', 'font-weight:bold;');
      title.append((await this.translate.get('report.discussion').toPromise()) + ':');
      outputDiscussion.appendChild(title);
      outputDiscussion.append(discussion);
    }
    return outputDiscussion;
  }

  parseHtmlReport(htmlReport: string): NodeListOf<Element> {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlReport, 'text/html');
    return parsedHtml.body.querySelectorAll('div, span');
  }
}
