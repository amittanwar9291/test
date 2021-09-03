export class SearchMapModel {
  outOfFindingsTabs?: SearchMapTabsObject;
  findingTypes?: { [key: string]: SearchMapFindingsObject };
  findingTypes1?: { [key: string]: SearchMapFindingsObject };
  findingTypes2?: { [key: string]: SearchMapFindingsObject };
}

export class SearchMapFindingsObject {
  outOfTabs: string[] | { mainFindingItems: string[]; subfindings: string[] };
  tabs: SearchMapTabsObject;
}

class SearchMapTabsObject {
  [key: string]: string[] | { subtabs: SearchMapTabsObject };
}
