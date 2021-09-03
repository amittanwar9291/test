export interface IModuleLifecycle {
  triggerDestroy(): void;
  triggerInit(): void;
  getOnDestroyStream(): void;
  getOnInitStream(): void;
}
